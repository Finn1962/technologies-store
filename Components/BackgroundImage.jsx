import backgroundImage from "../assets/Background.jpg";
import styled from "styled-components";

export default function BackgroundImage() {
  return <StyledBackgroundImage src={backgroundImage} alt="Background" />;
}

const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
