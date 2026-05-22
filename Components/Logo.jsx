import logo from "../assets/logo.svg";

import styled from "styled-components";

export default function Logo({ currentPage }) {
  return (
    <StyledLogoContainer $isHome={currentPage === "home"}>
      <img src={logo} alt="Logo" />
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
    ${({ $isHome }) => ($isHome ? "filter: invert(1)" : "filter: invert(0)")}
  }

  p {
    margin-left: 2px;
    font-weight: 700;
    color: ${({ $isHome }) => ($isHome ? "white" : "black")};
  }
`;
