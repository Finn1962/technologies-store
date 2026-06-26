//Libarys
import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

//Contexts
import { CartContext } from "../contexts/CartContext.jsx";

//Utils
import { createSlug } from "../utils/slugify.js";

//Components
import QuantityInput from "../Components/QuantityInput.jsx";

export default function CartProductPreview({ data }) {
  const { changeQuantityInCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <ComponentContainer>
      <Link
        to={`/product/${createSlug(data.product.title)}/${data.product.id}`}
        className="link-image"
      >
        <img className="image" src={data.product.thumbnail} />
      </Link>
      <div className="info-container">
        <p className="product-brand">{data.product.brand}</p>
        <Link
          to={`/product/${createSlug(data.product.title)}/${data.product.id}`}
          className="link-name"
        >
          <p className="product-name">{data.product.title}</p>
        </Link>
        <p className="product-description">
          {data.product.description.slice(0, 50)}...
        </p>
        <p className="single-price">{data.product.price}$</p>
      </div>
      <QuantityInput
        className="quantity-input"
        quantity={data.quantity}
        setQuantity={(newQuantity) =>
          changeQuantityInCart({
            product: data.product,
            quantity: newQuantity,
          })
        }
      />
      <DeleteButton
        className="delete-button"
        onClick={() =>
          removeProductFromCart({
            product: data.product,
            quantity: data.quantity,
          })
        }
      />
      <p className="full-price">
        {(data.product.price * data.quantity).toFixed(2).replaceAll(".", ",")}$
      </p>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 125px 2fr 120px 25px 1fr;
  grid-template-rows: 150px;
  column-gap: 20px;

  .link-image {
    align-self: center;
  }

  .image {
    width: 100%;
    align-self: center;
    border: 1px solid var(--primary-button-border-color);
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .product-brand {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .link-name {
    text-decoration: none;
  }

  .link-name:hover {
    text-decoration: underline 1px black;
  }

  .product-name {
    font-weight: 800;
    color: black;
  }

  .product-description {
    font-size: 0.8rem;
    opacity: 0.5;
    margin: 5px 0;
  }

  .single-price {
    font-size: 0.8rem;
    opacity: 0.6;
    font-weight: 800;
  }

  .quantity-input {
    justify-self: end;
  }

  .delete-button {
    height: min-content;
    width: min-content;
    align-self: center;
    justify-self: start;
  }

  .full-price {
    align-self: center;
    justify-self: end;
    font-weight: 800;
  }

  @media (max-width: 700px) {
    grid-template-columns: 125px 1fr auto;
    grid-template-rows: 150px auto;

    .quantity-input {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }

    .delete-button {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }
  }

  @media (max-width: 400px) {
    .product-description {
      display: none;
    }
  }
`;

function DeleteButton({ className, onClick }) {
  return (
    <StyledWrapper className={className}>
      <button className="btn" onClick={onClick}>
        <svg
          viewBox="0 0 15 17.5"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            transform="translate(-2.5 -1.25)"
            d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
            id="Fill"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    background-color: transparent;
    position: relative;
    border: none;
    transition: transform 0.3s;
  }

  .btn:active {
    transform: scale(0.8);
  }

  .icon {
    transform: scale(1.2);
    transition: 0.2s linear;
    width: 10px;
    min-width: 10px;
  }

  .btn:hover > .icon {
    transform: scale(1.5);
  }

  .icon path {
    fill: #a9a9a9;
  }

  .btn:hover > .icon path {
    fill: rgb(168, 7, 7);
  }

  .btn:hover::after {
    visibility: visible;
    opacity: 1;
    top: -160%;
  }
`;
