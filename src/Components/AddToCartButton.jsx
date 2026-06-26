//Libarys
import styled from "styled-components";

//Assets
import cartIcon from "../assets/cart.svg";

export default function AddToCartButton({ className, onClick }) {
  return (
    <StyledButton className={className} onClick={onClick}>
      <span className="IconContainer">
        <img src={cartIcon} className="icon" />
      </span>
      <p className="text">Add to Cart</p>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: auto;
  min-width: 120px;
  padding: 0 20px;
  height: 40px;
  border: none;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.5s;
  overflow: hidden;
  position: relative;

  &:hover .IconContainer {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: 0.5s;
  }

  &:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  &:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;
