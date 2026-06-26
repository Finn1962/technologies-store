//Libarys
import { useState, useRef } from "react";
import styled from "styled-components";

export default function ImageGalery({ images }) {
  const [indexActiveImage, setIndexActiveImage] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const minSwipeDistance = 50;

  function handleSwipe() {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < minSwipeDistance) return;
    if (touchStartX.current > touchEndX.current)
      setIndexActiveImage((prev) => {
        if (prev < images.length - 1 && prev + 1) return prev + 1;
        else return prev;
      });
    else
      setIndexActiveImage((prev) => {
        if (prev > 0) return prev - 1;
        else return prev;
      });
  }

  return (
    <StyledImagesContainer>
      <img
        className="product-image"
        src={images?.[indexActiveImage]}
        alt="Product image"
        onTouchStart={(event) =>
          (touchStartX.current = event.touches[0].clientX)
        }
        onTouchEnd={(event) => {
          touchEndX.current = event.changedTouches[0].clientX;
          handleSwipe();
        }}
      />
      <div>
        {images?.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => setIndexActiveImage(index)}
              data-active={index === indexActiveImage}
            >
              <img src={image} key={index} />
            </button>
          );
        })}
      </div>
    </StyledImagesContainer>
  );
}

const StyledImagesContainer = styled.div`
  .product-image {
    border: 1px solid var(--primary-button-border-color);
    touch-action: pan-y;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--primary-button-border-color);
    cursor: pointer;
  }

  button[data-active="true"] {
    border-color: black;
  }

  button img {
    width: 100px;
  }

  @media (max-width: 700px) {
    button img {
      width: 70px;
    }
  }
`;
