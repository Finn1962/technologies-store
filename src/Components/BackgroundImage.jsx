//Libarys
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <>
      <StyledBackground alt="Background" draggable="false" />
    </>
  );
}

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(circle, #d9d9d9, #4a4a4a);
  z-index: 1;
`;
