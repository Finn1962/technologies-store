import { useState, useEffect } from "react";
import styled from "styled-components";

export default function FilterButton() {
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [hoveringOptionsContainer, setHoveringOptionsContainer] =
    useState(false);

  useEffect(() => {
    function hiddeFilterOptions() {
      if (!hoveringOptionsContainer) setFilterOptionsVisible(false);
    }

    window.addEventListener("scroll", hiddeFilterOptions);
    window.addEventListener("click", hiddeFilterOptions);

    return () => {
      window.removeEventListener("scroll", hiddeFilterOptions);
      window.removeEventListener("click", hiddeFilterOptions);
    };
  });

  return (
    <StyledWrapper $filterOptionsVisible={filterOptionsVisible}>
      <button
        title="filter"
        className="filter"
        onClick={() => {
          if (filterOptionsVisible) setFilterOptionsVisible(false);
          else setFilterOptionsVisible(true);
        }}
        onMouseEnter={() => setHoveringOptionsContainer(true)}
        onMouseLeave={() => setHoveringOptionsContainer(false)}
      >
        <svg viewBox="0 0 512 512" height="1em">
          <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
        </svg>
      </button>
      <div
        className="options-container"
        onMouseEnter={() => setHoveringOptionsContainer(true)}
        onMouseLeave={() => setHoveringOptionsContainer(false)}
      >
        <button className="selection-options">Highest price</button>
        <hr />
        <button className="selection-options">Lowest price</button>
        <hr />
        <button className="selection-options">Available</button>
        <hr />
        <button className="selection-options">Best rating</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;

  .filter {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #f3f3f4;
    border: 2px solid transparent;
  }

  .filter svg {
    height: 16px;
    fill: #9e9ea7;
    transition: all 0.3s;
  }
  .filter:hover {
    background-color: rgb(255, 255, 255);
    border-color: rgba(0, 0, 0, 0.4);
  }

  .options-container {
    height: auto;
    width: auto;
    padding: 15px;
    max-width: 500px;
    background-color: #f3f3f4;
    position: absolute;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    display: ${({ $filterOptionsVisible }) =>
      $filterOptionsVisible ? "block" : "none"};
  }

  .selection-options {
    white-space: nowrap;
    border: none;
    background-color: transparent;
    font-weight: 600;
    padding: 5px;
    color: #6b6b6b;
  }

  .selection-options:hover {
    color: black;
  }

  hr {
    background-color: rgb(128, 128, 128);
    height: 1px;
    border: none;
    width: 100%;
    opacity: 0.5;
  }
`;
