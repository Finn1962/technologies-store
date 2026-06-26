//Libarys
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

//Assets
import image01 from "../assets/banner-image-01.jpg";
import image02 from "../assets/banner-image-02.jpg";
import image03 from "../assets/banner-image-03.jpg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const slides = [
  {
    image: image01,
    text: "LOWEST PRICES",
    shopButton: false,
    key: crypto.randomUUID(),
  },
  {
    image: image02,
    text: "LATEST PRODUCTS",
    shopButton: false,
    key: crypto.randomUUID(),
  },
  {
    image: image03,
    text: "COMPREHENSIVE SERVICE",
    shopButton: false,
    key: crypto.randomUUID(),
  },
];

export default function ImageSlider() {
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  const slidesContainer = useRef(null);

  const slideWidth = window.innerWidth;
  const slidePositions = new Array(slides.length)
    .fill(null)
    .map((_, index) => index * slideWidth);

  function slideToPrevius() {
    if (currentSlidePosition > 0) {
      slidesContainer.current.scrollTo({
        left: slidePositions[currentSlidePosition - 1],
        behavior: "smooth",
      });
      setCurrentSlidePosition((prev) => prev - 1);
    } else {
      slidesContainer.current.scrollTo({
        left: slidePositions[slidePositions.length - 1],
        behavior: "smooth",
      });
      setCurrentSlidePosition(slidePositions.length - 1);
    }
  }

  function slideToNext() {
    if (currentSlidePosition < slides.length - 1) {
      slidesContainer.current.scrollTo({
        left: slidePositions[currentSlidePosition + 1],
        behavior: "smooth",
      });
      setCurrentSlidePosition((prev) => prev + 1);
    } else {
      slidesContainer.current.scrollTo({
        left: slidePositions[0],
        behavior: "smooth",
      });
      setCurrentSlidePosition(0);
    }
  }

  function slideTo(slideIndex) {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      slidesContainer.current.scrollTo({
        left: slidePositions[slideIndex],
        behavior: "smooth",
      });
      setCurrentSlidePosition(slideIndex);
    }
  }

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  function handleSwipe() {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (touchStartX.current > touchEndX.current) slideToNext();
    else slideToPrevius();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlidePosition]);

  return (
    <StyledContainer $slidesNumber={slides.length}>
      <div
        className="slides-container"
        ref={slidesContainer}
        onTouchStart={(event) =>
          (touchStartX.current = event.touches[0].clientX)
        }
        onTouchEnd={(event) => {
          touchEndX.current = event.changedTouches[0].clientX;
          handleSwipe();
        }}
      >
        {slides.map((slide) => {
          return (
            <div className="slide" key={slide.key}>
              <div className="slides-content-container">
                <p className="slides-text">{slide.text}</p>
                {slide.shopButton && (
                  <Link to="/shop?search=&filter=&categorie=&brand=">
                    <button className="shop-button button-secondary">
                      Shop Now
                    </button>
                  </Link>
                )}
              </div>
              <div className="slides-overlay"></div>
              <img src={slide.image} />
            </div>
          );
        })}
      </div>

      <div className="control-elements-container">
        <button onClick={slideToPrevius} className="controll-button">
          <img src={arrowLeft} draggable={false} />
        </button>

        {slides.map((_, index) => {
          return (
            <button
              className="controll-button"
              onClick={() => slideTo(index)}
              key={index}
            >
              <div
                className={
                  index === currentSlidePosition ? "filled-dot" : "dot"
                }
              ></div>
            </button>
          );
        })}

        <button onClick={slideToNext} className="controll-button">
          <img src={arrowRight} draggable={false} />
        </button>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  position: relative;

  .slides-container {
    display: grid;
    grid-template-columns: repeat(
      ${({ $slidesNumber }) => $slidesNumber},
      100vw
    );
    overflow-x: hidden;
    position: relative;
    margin-top: 50px;
  }

  .slides-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: black;
    opacity: 0.5;
  }

  .slide {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .slides-content-container {
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 10px;
  }

  .slides-text {
    color: white;
    font-size: 1.7rem;
    font-weight: 900;
    text-align: center;
  }

  .shop-button {
    position: relativ;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  .control-elements-container {
    min-height: 50px;
    border-bottom: 1px solid var(--primary-button-border-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control-elements-container img {
    width: 25px;
    transition: 0.2s ease;
    opacity: 0.2;
  }

  .control-elements-container img:hover {
    opacity: 0.6;
  }

  .control-elements-container svg:hover {
    transform: scale(1.3);
  }

  .controll-button {
    border: none;
    background-color: transparent;
  }

  .dot {
    border-radius: 999px;
    border: 1px var(--primary-button-border-color) solid;
    background-color: transparent;
    width: 10px;
    height: 10px;
  }

  .filled-dot {
    border-radius: 999px;
    border: 1px black solid;
    background-color: black;
    width: 10px;
    height: 10px;
  }

  @media (max-width: 700px) {
    .slide {
      width: 100%;
      height: 300px;
    }

    .slides-text {
      font-size: 1.4rem;
    }
  }
`;
