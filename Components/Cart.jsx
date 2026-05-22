import cart from "../assets/cart.svg";

import styled from "styled-components";

export default function Cart({ currentPage, setCurrentPage }) {
  return (
    <CartContainer $isHome={currentPage === "home"}>
      <button onClick={() => setCurrentPage("cart")}>
        <img src={cart} alt="cart" />
      </button>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  button {
    background-color: transparent;
    border: none;
  }

  img {
    width: 25px;
    transition: all 0.2s ease;
    ${({ $isHome }) => ($isHome ? "filter: invert(1)" : "filter: invert(0)")}
  }

  img:hover {
    transform: scale(1.1);
  }
`;
