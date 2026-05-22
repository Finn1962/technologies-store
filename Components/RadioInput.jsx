import { useState } from "react";
import styled from "styled-components";

export default function RadioInput() {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <RadioContainer>
      <div>
        <input
          type="radio"
          id="option1"
          name="page"
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <label htmlFor="option1">Home</label>
        <input
          type="radio"
          id="option2"
          name="page"
          checked={selectedOption === "option2"}
          onChange={() => {
            setSelectedOption("option2");
          }}
        />
        <label htmlFor="option2">Shop</label>
      </div>
    </RadioContainer>
  );
}

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    color: lightgray;
    font-size: 1rem;
  }

  input:checked + label {
    color: white;
    text-decoration: underline solid white 2px;
    text-underline-offset: 2px;
  }

  input {
    display: none;
  }
`;
