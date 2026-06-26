//Libarys
import { useContext } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

//Assets
import cart from "../assets/cart.svg";

//Contexts
import { PopUpContext } from "../contexts/PopUpContext.jsx";

export default function CartButton() {
  const { hidePopUp } = useContext(PopUpContext);

  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <CartContainer $isHome={currentPage === "home"}>
      <Link to="/cart" aria-label="Warenkorb" onClick={hidePopUp}>
        <button>
          <img src={cart} alt="cart" draggable="false" />
        </button>
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

  button {
    border: none;
    background-color: transparent;
  }
`;
