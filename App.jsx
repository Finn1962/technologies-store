import Logo from "./Components/Logo.jsx";

import RadioInput from "./Components/RadioInput/RadioInput.jsx";
import Home from "./Pages/Home.jsx";
import CartButton from "./Components/CartButton.jsx";

import { useState } from "react";
import styled from "styled-components";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <StyledHeader>
        <Logo currentPage={currentPage} />
        <RadioInput currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <CartButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </StyledHeader>
      {currentPage === "home" && <Home />}
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: transparent;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%; /* Schöner Abstand zu den Rändern */
  box-sizing: border-box;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    filter: invert(1);
  }

  .logo img {
    height: 20px;
  }

  .logo p {
    margin-left: 2px;
    font-weight: 700;
  }
`;

export default App;
