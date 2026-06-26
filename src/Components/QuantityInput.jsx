//Libarys
import styled from "styled-components";

export default function QuantityInput({ className, quantity, setQuantity }) {
  function handleInputChange(event) {
    const value = event.target.value;
    setQuantity(value === "" ? "" : Number(value));
  }

  return (
    <StyledQuantityInputContainer className={className}>
      <button
        className="button-primary"
        onClick={() => setQuantity(Number(quantity > 1 ? quantity - 1 : 1))}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 12L18 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className="button-primary"
        onClick={() => setQuantity(Number(quantity + 1))}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 12H20M12 4V20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </StyledQuantityInputContainer>
  );
}

const StyledQuantityInputContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    -moz-appearance: textfield;
    padding: 10px;
    border-radius: 0;
    border-color: var(--primary-button-border-color);
    border-style: solid;
    border-width: 1px;
    width: 40px;
    height: 40px;
    text-align: center;
  }

  input:focus,
  input:active {
    border-color: black;
    outline: none;
  }

  button {
    height: 40px;
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button svg {
    width: 10px;
    min-width: 10px;
  }
`;
