import styled from "styled-components";

export default function RadioInput({ currentPage, setCurrentPage }) {
  return (
    <RadioContainer $isHome={currentPage === "home"}>
      <div>
        <input
          type="radio"
          id="option1"
          name="page"
          aria-label="Home"
          checked={currentPage === "home"}
          onChange={() => setCurrentPage("home")}
        />
        <label htmlFor="option1">Home</label>
        <input
          type="radio"
          id="option2"
          name="page"
          aria-label="Shop"
          checked={currentPage === "shop"}
          onChange={() => setCurrentPage("shop")}
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
    color: ${({ $isHome }) => ($isHome ? "lightgray;" : "darkgray;")}
    font-size: 1rem;
  }

  label:last-of-type {
    margin-left: 50px;
  }

  input:checked + label {
    color: ${({ $isHome }) => ($isHome ? "white;" : "black;")}
    text-decoration: underline solid ${({ $isHome }) =>
      $isHome ? "white" : "black"} 2px;
    text-underline-offset: 2px;
  }

  input {
    display: none;
  }
`;
