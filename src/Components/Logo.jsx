//Assets
import logo from "../assets/logo.svg";

//Libarys
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function Logo() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <StyledLink to="/">
      <StyledLogoContainer $isHome={currentPage === "home"}>
        <img src={logo} alt="Logo" draggable="false" />
        <p>Technologies</p>
      </StyledLogoContainer>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    filter: ${({ $isHome }) => ($isHome ? "invert(1)" : "invert(0)")};
    cursor: pointer;
  }

  p {
    margin-left: 2px;
    font-weight: 700;
    cursor: default;
    color: ${({ $isHome }) => ($isHome ? "white" : "black")};
    cursor: pointer;
  }
`;
