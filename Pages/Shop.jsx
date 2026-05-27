import { useState, useEffect } from "react";
import { useFetchProductData } from "../js/fetchProductData/fetchProductData.js";

import styled from "styled-components";

import ProductPrevierw from "../Components/ProductPreview.jsx";

export default function Shop() {
  const { fetchAllProductData } = useFetchProductData();
  const [productData, setProductData] = useState([]);
  console.log(productData);

  useEffect(() => {
    fetchAllProductData()
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledPageWrapper>
      {productData.map((product) => {
        return <ProductPrevierw product={product} />;
      })}
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 80px 20px 0 20px;
`;
