import BackgroundImage from "../Components/BackgroundImage.jsx";
import MacbookFront from "../Components/MacbookFront.jsx";
import MacbookBack from "../Components/MacbookBack.jsx";

import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
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
  position: Absolute;
  width: 100%;
  height: 100%;

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
