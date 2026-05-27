import cart from "../assets/cart.svg";

import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function CartButton() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <CartContainer $isHome={currentPage === "home"}>
      <Link to="/cart" aria-label="Warenkorb">
        <img src={cart} alt="cart" draggable="false" />
      </Link>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  img {
    width: 25px;
    transition: all 0.2s ease;
    filter: ${({ $isHome }) => ($isHome ? "invert(1)" : "invert(0)")};
  }

  img:hover {
    transform: scale(1.1);
  }
`;
