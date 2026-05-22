import macbookBackImage from "../assets/macbook-back.webp";

import styled, { keyframes } from "styled-components";

export default function MacbookBack() {
  return <StyledMacbookBack src={macbookBackImage} alt="Macbook Back" />;
}

const gentleFloat = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-49%, -52%);
  }
  50% {
    transform: translate(-51%, -48%);
  }
  75% {
    transform: translate(-49.5%, -51%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;

const StyledMacbookBack = styled.img`
  position: absolute;
  top: 38%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 700px;
  max-height: 80%;
  object-fit: contain;
  z-index: 1;
  animation: ${gentleFloat} 6s ease-in-out infinite;
`;
