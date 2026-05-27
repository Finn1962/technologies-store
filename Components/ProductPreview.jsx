import styled from "styled-components";
import cartIcon from "../assets/cart.svg";

export default function ProductPreview({ product }) {
  return (
    <>
      <StyledContainer $secondImage={product.images[1]}>
        <div className="horizontal-wrapper">
          <img className="image" src={product.thumbnail} />
          <div className="info-container">
            <a className="name" href="">
              {product.title}
            </a>
            <p className="info">{product.description}</p>
            <p className="price">
              {product.price}
              <span>$</span>
            </p>
          </div>
          <button className="CartBtn">
            <span className="IconContainer">
              <img src={cartIcon} className="icon" />
            </span>
            <p className="text">Add to Cart</p>
          </button>
        </div>
        <hr />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1000px;

  .horizontal-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
  }

  .image {
    width: 150px;
  }

  .image:hover {
    content: url("${({ $secondImage }) => $secondImage}");
  }

  .info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin-right: 25px;
  }

  .name {
    text-decoration: none;
    color: black;
    font-weight: 800;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .name:hover {
    text-decoration: underline 1px black;
  }

  .info {
    opacity: 0.5;
    font-size: 0.8rem;
  }

  .price {
    font-weight: 800;
    margin-top: 10px;
  }

  .CartBtn {
    width: 120px;
    min-width: 120px;
    height: 40px;
    border-radius: 12px;
    border: none;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    position: relative;
  }

  .IconContainer {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: 0.5s;
  }

  .icon {
    width: 20px;
    margin-right: 10px;
    filter: invert(1);
  }

  .text {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    z-index: 1;
    transition-duration: 0.5s;
    font-weight: 600;
    white-space: nowrap;
  }

  .CartBtn:hover .IconContainer {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: 0.5s;
  }

  .CartBtn:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  .CartBtn:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
  }

  hr {
    opacity: 0.5;
  }
`;
