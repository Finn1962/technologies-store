//Libarys
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Contexts
import { PopUpContext } from "../contexts/PopUpContext.jsx";

export default function PopUp() {
  const { isVisible, hidePopUp } = useContext(PopUpContext);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      hidePopUp();
    }, 5000);

    return () => clearTimeout(timer);
  }, [isVisible, hidePopUp]);

  return (
    <StyledPopUpWrapper $isVisible={isVisible}>
      <p>You have added an item to your shopping cart. 🛒</p>
      <Link to="/cart" onClick={hidePopUp}>
        <ToCartButton />
      </Link>
    </StyledPopUpWrapper>
  );
}

const StyledPopUpWrapper = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  z-index: 100;
  width: 100%;
  max-width: 400px;
  height: auto;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0%" : "100%")});

  p {
    font-weight: 400;
    font-size: 1.2rem;
  }

  button {
    margin: 10px 0 0 0;
  }
`;

function ToCartButton() {
  return (
    <StyledWrapper>
      <button className="cta">
        <span className="hover-underline-animation">Checkout →</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    border: none;
    background: none;
    cursor: pointer;
    padding-left: 0;
    padding-right: 0;
  }

  .cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 14px;
    text-transform: uppercase;
  }

  .hover-underline-animation {
    position: relative;
    color: black;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
