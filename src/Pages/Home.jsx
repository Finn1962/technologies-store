//Components
import BackgroundImage from "../Components/BackgroundImage.jsx";
import MacbookFront from "../Components/MacbookFront.jsx";
import MacbookBack from "../Components/MacbookBack.jsx";
import PopularestProductsPreview from "../Components/PopularestProductsPreview.jsx";
import BrandsSlider from "../Components/BrandsSlider.jsx";
import ReviewsPreview from "../Components/ReviewsPreview.jsx";

// Libarys
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home({ overlayOpacity }) {
  return (
    <>
      <StyledPageContainer>
        <StyledOverlay $overlayOpacity={overlayOpacity} />
        <ScrollIcon />
        <p className="slogan">
          Your Online Store for <br></br> Tech That Inspires.
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
    .text {
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
  padding: 30px 20px;
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

function ScrollIcon() {
  return (
    <StyledIconWrapper
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight - 50,
          behavior: "smooth",
        })
      }
    >
      <div className="main__action">
        <div className="main__scroll-box">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              fill="rgb(220, 220, 220)"
            ></path>
          </svg>
        </div>
        <span className="main__scroll-text">Scroll</span>
      </div>
    </StyledIconWrapper>
  );
}

const StyledIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 2;

  .main__scroll-text {
    color: rgb(220, 220, 220);
    transition: 0.2s ease;
  }

  svg path {
    transition: 0.2s ease;
  }

  &:hover .main__scroll-text,
  &:hover svg path {
    color: #fff;
    fill: #fff;
  }

  .main__action .main__scroll-box {
    animation: scroll-down 2s infinite;
  }

  span {
    font-weight: 500;
  }

  @keyframes scroll-down {
    0%,
    100% {
      transform: translateY(0rem);
      opacity: 1;
    }

    35% {
      transform: translateY(1rem);
      opacity: 0;
    }

    70% {
      transform: translateY(-1rem);
      opacity: 0;
    }
  }
`;
