//Libarys
import { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Utils
import { createSlug } from "../utils/slugify.js";

//Komponets
import AddToCartButton from "./AddToCartButton.jsx";
import RatingStars from "./RatingStars.jsx";

//Contexts
import { CartContext } from "../contexts/CartContext.jsx";
import { PopUpContext } from "../contexts/PopUpContext.jsx";

export default function ShopProductPreview({ product }) {
  const { addProductToCart } = useContext(CartContext);
  const { showPopUp } = useContext(PopUpContext);

  const [displayedImage, setDisplayedImage] = useState(product.thumbnail);

  return (
    <>
      <StyledContainer>
        <Link
          to={`/product/${createSlug(product.title)}/${product.id}`}
          className="link"
          tabIndex="-1"
        >
          <img
            className="image"
            src={displayedImage}
            onMouseEnter={() => setDisplayedImage(product.images[1])}
            onMouseLeave={() => setDisplayedImage(product.thumbnail)}
          />
        </Link>
        <div className="info-container">
          <p className="brand">{product.brand}</p>
          <Link
            to={`/product/${createSlug(product.title)}/${product.id}`}
            className="link"
          >
            {product.title}
          </Link>
          <p className="info">{product.description}</p>
          <p className="price">
            {product.price.toFixed(2).replaceAll(".", ",")}$
          </p>
          <RatingStars rating={product.rating} />
        </div>
        <AddToCartButton
          onClick={() => {
            addProductToCart({ product: product, quantity: 1 });
            showPopUp();
          }}
        />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .image {
    width: 150px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin-right: 25px;
  }

  .brand {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .link {
    text-decoration: none;
    color: black;
    font-weight: 800;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .link:hover {
    text-decoration: underline 1px black;
  }

  .info {
    opacity: 0.5;
    font-size: 0.8rem;
  }

  .price {
    font-weight: 800;
    margin: 10px 0;
    font-size: 0.8rem;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    gap: 10px;

    .info-container {
      max-width: 100%;
      margin: 0 0 10px 0;
    }
  }
`;
