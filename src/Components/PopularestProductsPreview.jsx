//Libarys
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//Services
import { useFetchProductData } from "../services/fetchProductData.js";

//Utils
import { createSlug } from "../utils/slugify.js";
import { useSortProducts } from "../utils/sortProducts.js";

//Contexts
import { LoaderContext } from "../contexts/LoaderContext.jsx";

//Komponents
import Loader from "../Components/Loader.jsx";

export default function PopularestProductsPreview() {
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const { fetchAllProductData } = useFetchProductData();
  const { sortByBestRating } = useSortProducts();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    showLoader();
    fetchAllProductData()
      .then((data) => {
        const sortedData = sortByBestRating(data);
        const firstEightProducts = sortedData.splice(0, 8);
        setProductData(firstEightProducts);
      })
      .catch((error) => console.log(error))
      .finally(() => hideLoader());
  }, []);

  return (
    <StyledContainer>
      <div className="wrapper">
        <h2>OUR BESTSELLERS</h2>
        <div className="product-container">
          <Loader className="loader" />
          {productData.map((product, index) => {
            return (
              <div className="product" key={index}>
                <Link
                  to={`/product/${createSlug(product.title)}/${product.id}`}
                >
                  <Image product={product} />
                </Link>
                <p className="brand">{product.brand}</p>
                <Link
                  to={`/product/${createSlug(product.title)}/${product.id}`}
                >
                  <h3>{product.title}</h3>
                </Link>
                <p className="product-description">
                  {product.description.slice(0, 50)}...
                </p>
                <p className="price">{product.price}$</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 0 0 100px 0;
  padding: 0 20px;
  position: relative;

  .wrapper {
    max-width: var(--page-width);
    width: 100%;
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 80px);
  }

  h2 {
    font-size: 1.8rem;
  }

  .product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    gap: 50px;
  }

  .product img {
    width: 100%;
    margin-bottom: 30px;
  }

  .brand {
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .product h3 {
    font-size: 1rem;
    margin-top: 0px;
  }

  .product-description {
    font-size: 0.8rem;
    opacity: 0.6;
    margin: 10px 0;
  }

  .price {
    font-weight: 800;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline black 1px;
  }

  @media (max-width: 700px) {
    .product-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
    }

    .product-description {
      display: none;
    }

    .product img {
      margin-bottom: 20px;
    }

    .product-container {
      gap: 20px;
    }
  }
`;

function Image({ product }) {
  const [displayedImage, setDisplayedImage] = useState(product.thumbnail);
  return (
    <img
      src={displayedImage}
      onMouseEnter={() => setDisplayedImage(product.images[1])}
      onMouseLeave={() => setDisplayedImage(product.thumbnail)}
    />
  );
}
