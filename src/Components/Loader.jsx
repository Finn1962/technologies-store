//Libarys
import styled from "styled-components";
import { useContext } from "react";

//Contexts
import { LoaderContext } from "../contexts/LoaderContext.jsx";

export default function Loader({ className }) {
  const { isLoaderVisible } = useContext(LoaderContext);

  return (
    <StyledWrapper className={className} $isLoaderVisible={isLoaderVisible}>
      <svg viewBox="25 25 50 50">
        <circle r={20} cy={50} cx={50} />
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: ${({ $isLoaderVisible }) => ($isLoaderVisible ? "block" : "none")};
  z-index: 100;

  svg {
    width: 3.25em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: hsl(0, 0%, 0%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
