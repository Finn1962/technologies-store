import backgroundImage from "../assets/Background.jpg";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <>
      <StyledOverlay />
      <StyledBackgroundImage src={backgroundImage} alt="Background" />
    </>
  );
}

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  color: black;
  z-index: 10;
`;

const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;
