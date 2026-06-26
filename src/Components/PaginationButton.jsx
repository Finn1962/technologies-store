//Libarys
import styled from "styled-components";

//Assets
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

export default function PaginationButton({
  numberOfPages,
  currentPageNumber,
  setCurrentPageNumber,
  className,
}) {
  let currentSlotNumber = currentPageNumber - 3;
  const slots = new Array(5).fill(null).map((_, index) => {
    currentSlotNumber++;
    if (currentSlotNumber > 0 && currentSlotNumber <= numberOfPages) {
      return (
        <Slot
          currentSlotNumber={currentSlotNumber}
          gridPosition={index + 1}
          setCurrentPageNumber={setCurrentPageNumber}
          isActive={currentSlotNumber === currentPageNumber}
          className="button-primary"
          key={currentSlotNumber}
          tabIndex="0"
          aria-hidden="false"
        />
      );
    } else {
      return (
        <Slot
          currentSlotNumber={null}
          gridPosition={index + 1}
          setCurrentPageNumber={() => {}}
          isActive={currentSlotNumber === currentPageNumber}
          className="button-not-clickable"
          key={currentSlotNumber}
          tabIndex="-1"
          ariaHidden="true"
        />
      );
    }
  });

  return (
    <StyledContainer className={className}>
      <button
        className="arrow-button"
        onClick={() =>
          setCurrentPageNumber((prev) => (prev > 1 ? prev - 1 : prev))
        }
      >
        <img src={arrowLeft} draggable={false} />
      </button>

      <div className="slots-container">{slots}</div>

      <button
        className="arrow-button"
        onClick={() =>
          setCurrentPageNumber((prev) =>
            prev < numberOfPages ? prev + 1 : prev,
          )
        }
      >
        <img src={arrowRight} draggable={false} />
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .slots-container {
    display: grid;
    grid-template-columns: repeat(5, 40px);
    grid-template-rows: 40px;
    gap: 10px;
  }

  .arrow-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .arrow-button img {
    width: 25px;
    height: 25px;
    transition: 0.2s ease;
    user-select: none;
    opacity: 0.2;
  }

  .arrow-button img:hover {
    opacity: 0.6;
  }
`;

function Slot({
  currentSlotNumber,
  gridPosition,
  setCurrentPageNumber,
  isActive,
  className,
  tabIndex,
  ariaHidden,
}) {
  return (
    <StyledSlotContainer
      style={{
        gridColumn: `${gridPosition} / ${gridPosition + 1}`,
        gridRow: "1 / 2",
      }}
    >
      <button
        className={className}
        onClick={() => setCurrentPageNumber(currentSlotNumber)}
        data-active={isActive}
        draggable={false}
        tabIndex={tabIndex}
        aria-hidden={ariaHidden}
      >
        {currentSlotNumber}
      </button>
    </StyledSlotContainer>
  );
}

const StyledSlotContainer = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: rgb(125, 125, 125);
  }

  button[data-active="true"] {
    outline: none;
    border-color: var(--primary-button-border-color);
    background-color: var(--primary-button-hover-color);
    color: var(--primary-focus-text-color);
  }

  .button-not-clickable {
    border: none;
    border-radius: 0px;
    background-color: var(--primary-button-color);
    cursor: default;
  }
`;
