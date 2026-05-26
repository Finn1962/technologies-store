import cart from "../assets/cart.svg";

import styled from "styled-components";

export default function CartButton({ currentPage, setCurrentPage }) {
  return (
    <CartContainer $isHome={currentPage === "home"}>
      <button onClick={() => setCurrentPage("cart")} aria-label="Warenkorb">
        <img src={cart} alt="cart" draggable="false" />
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
    filter: ${({ $isHome }) => ($isHome ? "invert(1)" : "invert(0)")};
  }

  img:hover {
    transform: scale(1.1);
  }
`;
