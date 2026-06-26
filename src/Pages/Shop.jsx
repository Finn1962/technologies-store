//Components
import SearchBar from "../Components/SearchBar.jsx";
import ProductPreview from "../Components/ShopProductPreview.jsx";
import FilterButtons from "../Components/FilterButtons.jsx";
import PaginationButton from "../Components/PaginationButton.jsx";
import ImageSlider from "../Components/ImageSlider.jsx";
import Loader from "../Components/Loader.jsx";

//Services
import { useFetchProductData } from "../services/fetchProductData.js";

//Utils
import { useSortProducts } from "../utils/sortProducts.js";

//Libarys
import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

//Contexts
import { LoaderContext } from "../contexts/LoaderContext.jsx";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoaderVisible, showLoader, hideLoader } = useContext(LoaderContext);

  const {
    sortByHighestPrice,
    sortByLowestPrice,
    sortByBestRating,
    filterByCategorie,
    filterByBrand,
  } = useSortProducts();

  const { fetchAllProductData, fetchProductSearch } = useFetchProductData();

  const [productData, setProductData] = useState([]);
  const [searchValue, setSearchValue] = useState(searchParams.get("search"));
  const [activeCategorie, setActiveCategorie] = useState(
    capitalize(searchParams.get("categorie")),
  );
  const [activeBrand, setActiveBrand] = useState(
    capitalize(searchParams.get("brand")),
  );
  const [activeFilter, setActiveFilter] = useState(
    capitalize(searchParams.get("filter")),
  );

  const activeBrandProducts = activeBrand
    ? filterByBrand(productData, capitalize(activeBrand))
    : productData;

  const activeCategorieProducts = activeCategorie
    ? filterByCategorie(activeBrandProducts, activeCategorie.toLowerCase())
    : activeBrandProducts;

  const sortedProducts =
    activeFilter === "Highest price"
      ? sortByHighestPrice(activeCategorieProducts)
      : activeFilter === "Lowest price"
        ? sortByLowestPrice(activeCategorieProducts)
        : activeFilter === "Best rating"
          ? sortByBestRating(activeCategorieProducts)
          : activeCategorieProducts;

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const numberOfPages = Math.ceil(sortedProducts.length / 10);
  const startProductsToRedner = (currentPageNumber - 1) * 10;
  const endProductsToRender = currentPageNumber * 10;

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (searchValue === "") {
      showLoader();
      //eslint-disable-next-line
      setCurrentPageNumber(1);
      fetchAllProductData()
        .then((data) => {
          setProductData(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          hideLoader();
        });
    } else {
      showLoader();
      setCurrentPageNumber(1);
      fetchProductSearch(searchValue)
        .then((data) => {
          setProductData(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          hideLoader();
        });
    }
  }, [searchValue]);

  return (
    <>
      <ImageSlider />

      <StyledPageWrapper>
        <div className="control-elements-container">
          <SearchBar
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            setSearchParams={setSearchParams}
          />
          <FilterButtons
            className="filter-buttons"
            activeCategorie={activeCategorie}
            setActiveCategorie={setActiveCategorie}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            activeBrand={activeBrand}
            setActiveBrand={setActiveBrand}
            setSearchParams={setSearchParams}
            onClick={() => setCurrentPageNumber(1)}
          />
        </div>

        <Loader className="loader" />

        {sortedProducts.length > 0 &&
          sortedProducts
            .slice(startProductsToRedner, endProductsToRender)
            .map((product) => {
              return (
                <ProductPreview
                  product={product}
                  key={product.id}
                  className="product-preview"
                />
              );
            })}

        {numberOfPages > 1 && (
          <>
            <hr />
            <PaginationButton
              numberOfPages={numberOfPages}
              currentPageNumber={currentPageNumber}
              setCurrentPageNumber={setCurrentPageNumber}
              className="pagination"
            />
          </>
        )}

        {sortedProducts.length === 0 && !isLoaderVisible && (
          <p className="no-results">No results found.</p>
        )}
      </StyledPageWrapper>
    </>
  );
}

const StyledPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px 40px 20px;

  .control-elements-container {
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: max(auto, 40px) 1fr;
    margin-bottom: 10px;
    gap: 5px;
  }

  .filter-buttons {
    margin-top: 5px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
  }

  .loader {
    margin-top: 10px;
  }

  .pagination {
    margin-top: 40px;
  }

  .no-results {
    position: relative;
    font-weight: 800;
    margin-top: 25px;
  }

  @media (max-width: 700px) {
    .filter-buttons {
      justify-self: start;
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
  }
`;
