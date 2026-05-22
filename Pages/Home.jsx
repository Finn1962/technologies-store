import BackgroundImage from "../Components/BackgroundImage.jsx";
import MacbookFront from "../Components/MacbookFront.jsx";
import MacbookBack from "../Components/MacbookBack.jsx";
import RadioInput from "../Components/RadioInput.jsx";

import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <header>
        <RadioInput />
      </header>
      <p className="text">
        Dein Onlinestore für <br></br> Technik, die begeistert.
      </p>
      <MacbookFront />
      <MacbookBack />
      <BackgroundImage />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: 50px;
    background-color: transparent;
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%; /* Schöner Abstand zu den Rändern */
    box-sizing: border-box; /* Sorgt dafür, dass Padding die 100% Breite nicht sprengt */
  }

  .text {
    position: absolute;
    color: white;
    font-size: 3rem;
    font-weight: 200;
    z-index: 3;
    left: 3%;
    bottom: 10%;
  }

  @media (max-width: 768px) {
    .text {
      font-size: 2rem;
    }
  }
`;
