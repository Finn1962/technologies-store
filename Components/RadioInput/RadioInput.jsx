import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function RadioInput() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  const fontColor = currentPage === "home" ? "white" : "black";

  return (
    <RadioContainer>
      <div>
        <StyledLink
          $fontColor={fontColor}
          to="/"
          aria-label="Home"
          data-active={currentPage === "home"}
        >
          Home
        </StyledLink>
        <StyledLink
          $fontColor={fontColor}
          to="/shop"
          aria-label="Shop"
          data-active={currentPage === "shop"}
        >
          Shop
        </StyledLink>
      </div>
    </RadioContainer>
  );
}

const StyledLink = styled(Link)`
  color: ${({ $fontColor }) => $fontColor};
  text-decoration: none;
  opacity: 0.5;

  &[data-active="true"] {
    opacity: 1;
    text-decoration: underline solid ${({ $fontColor }) => $fontColor} 2px;
    text-underline-offset: 2px;
  }

  &:last-of-type {
    margin-left: 15px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
