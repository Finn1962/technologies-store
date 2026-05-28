import { useState, useEffect } from "react";
import { useFetchProductData } from "../js/fetchProductData/fetchProductData.js";

import styled from "styled-components";

import SearchBar from "../Components/SearchBar.jsx";
import ProductPrevierw from "../Components/ProductPreview.jsx";
import Loader from "../Components/Loader.jsx";

export default function Shop() {
  const { fetchAllProductData } = useFetchProductData();

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsLoading(true);
    fetchAllProductData()
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <StyledLoader $isLoading={isLoading} />
      <StyledPageWrapper>
        <div className="control-elements-container">
          <SearchBar
            setProductData={setProductData}
            setIsLoading={setIsLoading}
          />
        </div>
        {productData.length > 0 &&
          productData.map((product) => {
            return <ProductPrevierw product={product} key={product.id} />;
          })}
        {productData.length === 0 && !isLoading && (
          <p className="no-results">No results found.</p>
        )}
      </StyledPageWrapper>
    </>
  );
}

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ $isLoading }) => ($isLoading ? "block" : "none")};
`;

const StyledPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 80px 20px 0 20px;

  .control-elements-container {
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    algn-items: center;
  }

  .no-results {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
  }
`;
