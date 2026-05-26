import logo from "../assets/logo.svg";

import styled from "styled-components";

export default function Logo({ currentPage }) {
  return (
    <StyledLogoContainer $isHome={currentPage === "home"}>
      <img src={logo} alt="Logo" draggable="false" />
      <p>Technologies</p>
    </StyledLogoContainer>
  );
}

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    filter: ${({ $isHome }) => ($isHome ? "invert(1)" : "invert(0)")};
  }

  p {
    margin-left: 2px;
    font-weight: 700;
    cursor: default;
    color: ${({ $isHome }) => ($isHome ? "white" : "black")};
  }
`;
