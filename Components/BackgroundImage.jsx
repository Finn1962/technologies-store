import backgroundImage from "../assets/Background.jpg";

import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";

export default function BackgroundImage() {
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) inputRef.current.style.display = "none";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StyledOverlay ref={inputRef} />
      <StyledBackgroundImage src={backgroundImage} alt="Background" />
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0;
  z-index: 2;
  animation: ${fadeIn} 2s ease;
`;

const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;
