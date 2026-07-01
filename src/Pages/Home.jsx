//Components
import BackgroundImage from "../Components/BackgroundImage.jsx";
import MacbookFront from "../Components/MacbookFront.jsx";
import MacbookBack from "../Components/MacbookBack.jsx";
import PopularestProductsPreview from "../Components/PopularestProductsPreview.jsx";
import BrandsSlider from "../Components/BrandsSlider.jsx";
import ReviewsPreview from "../Components/ReviewsPreview.jsx";
import ScrollButton from "../Components/ScrollButton.jsx";

// Libarys
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home({ overlayOpacity }) {
  return (
    <>
      <StyledPageContainer>
        <StyledOverlay $overlayOpacity={overlayOpacity} />
        <ScrollButton />
        <p className="slogan">
          Your online store for <br></br> tech that inspires.
        </p>
        <MacbookBack />
        <MacbookFront />
        <BackgroundImage />
        <BrandsSlider className="brands-slider" />
        <TextBlock className="text-block" />
        <PopularestProductsPreview className="popularest-products-preview" />
        <ReviewsPreview />
      </StyledPageContainer>
    </>
  );
}

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: ${({ $overlayOpacity }) => `${$overlayOpacity}`};
  z-index: 2;
`;

const StyledPageContainer = styled.div`
  width: 100%;
  height: 100%;

  .slogan {
    position: absolute;
    color: white;
    font-size: 3rem;
    font-weight: 200;
    z-index: 2;
    left: 3%;
    bottom: 10%;
  }

  .brands-slider {
    margin-bottom: 35px;
  }

  .text-block {
    margin-bottom: 75px;
  }

  .popularest-products-preview {
    margin-bottom: 100px;
  }

  @media (max-width: 1024px) {
    .slogan {
      font-size: 2rem;
    }
  }
`;

function TextBlock({ className }) {
  return (
    <StyledTextContainer className={className}>
      <div className="wrapper">
        <h2>OUR GOAL</h2>
        <p>
          Our goal is to always offer you the lowest prices on the latest
          brand-name products. To achieve this, we continuously scour the
          internet for better deals and beat them. If you come across a lower
          price online, send us an email at info@technologies.de, and we will
          make you a better offer.
        </p>
        <Link to="/shop?search=&filter=&categorie=&brand=">
          <button className="button-secondary">Start Shoping</button>
        </Link>
      </div>
    </StyledTextContainer>
  );
}

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px 20px;
  background-color: #f8f8f8;

  .wrapper {
    width: 100%;
    max-width: var(--page-width);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  button {
    margin-top: 35px;
  }
`;
