import macbookFrontImage from "../assets/macbook-front.webp";

import styled, { keyframes } from "styled-components";

export default function MacbookFront() {
  return (
    <StyledMacbookFront
      src={macbookFrontImage}
      alt="Macbook Front"
      draggable="false"
    />
  );
}

const figureEightFloat = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-51.5%, -52%) rotate(-0.8deg);
  }
  50% {
    transform: translate(-48.5%, -48%) rotate(0.8deg);
  }
  75% {
    transform: translate(-48.5%, -52%) rotate(0.4deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const StyledMacbookFront = styled.img`
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 700px;
  max-height: 80%;
  object-fit: contain;
  z-index: 2;
  animation: ${figureEightFloat} 6s ease-in-out infinite;
`;
