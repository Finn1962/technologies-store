// Assets
import Logo from "./Components/Logo.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";

// Components
import CartButton from "./Components/CartButton.jsx";
import RadioInput from "./Components/RadioInput/RadioInput.jsx";

// Libarys
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <>
      <StyledHeader $isHome={currentPage === "home"}>
        <Logo />
        <RadioInput />
        <CartButton />
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${({ $isHome }) => ($isHome ? "transparent" : "white")};
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%; /* Schöner Abstand zu den Rändern */
  box-sizing: border-box;
`;

export default App;
