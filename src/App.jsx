// Assets
import Logo from "./Components/Logo.jsx";
import gitHubLogo from "./assets/github-icon.svg";

// Pages
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";
import Product from "./Pages/Product.jsx";

// Components
import CartButton from "./Components/CartButton.jsx";
import RadioInput from "./Components/RadioInput.jsx";
import PopUp from "./Components/PopUp.jsx";

// Libarys
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Provider
import AppProvider from "./Providers/AppProvider.jsx";

export default function App() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [headerColor, setHeaderColor] = useState("transparent");

  useEffect(() => {
    function handleScroll() {
      const percent = Math.round(
        window.innerHeight > 0
          ? (window.scrollY / (window.innerHeight / 2)) * 100
          : 0,
      );

      setOverlayOpacity(percent / 100);

      if (percent > 90) {
        setHeaderColor("black");
      } else {
        setHeaderColor("transparent");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppProvider>
      <StyledAppContainer>
        <PopUp />
        <StyledHeader
          $isHome={currentPage === "home"}
          $headerColor={headerColor}
        >
          <Logo />
          <RadioInput />
          <CartButton />
        </StyledHeader>
        <Routes>
          <Route path="/" element={<Home overlayOpacity={overlayOpacity} />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:productName/:productId"
            element={<Product />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <StyledFooter>
          <div>
            <a href="#">Imprint</a>
            <span />
            <a href="#">FAQ</a>
          </div>
          <div>
            <a
              href="https://github.com/Finn1962"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubLogo} />
              <p>Developed by Finn Schmidt</p>
            </a>
          </div>
        </StyledFooter>
      </StyledAppContainer>
    </AppProvider>
  );
}

const StyledAppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${({ $isHome, $headerColor }) =>
    $isHome ? $headerColor : "white"};
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%; /* Schöner Abstand zu den Rändern */
  box-sizing: border-box;
  color: #d4d4d4;
  text-decoration: none;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: auto;
  padding: 25px 0;
  user-select: none;

  span {
    background-color: white;
    width: 1px;
    height: 20px;
    color: #d4d4d4;
  }

  a {
    color: #d4d4d4;
    text-decoration: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  div img {
    width: 20px;
  }

  div p {
    color: white;
    font-weight: 300;
  }
`;
