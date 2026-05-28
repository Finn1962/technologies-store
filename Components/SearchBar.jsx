import styled from "styled-components";
import { useState } from "react";
import { useFetchProductData } from "../js/fetchProductData/fetchProductData.js";

export default function SearchBar({ setProductData, setIsLoading }) {
  const { fetchProductSearch } = useFetchProductData();

  const [inputValue, setInputValue] = useState("");

  async function triggerSearch() {
    if (inputValue && inputValue.length > 0) {
      setIsLoading(true);
      fetchProductSearch(inputValue)
        .then((data) => {
          setProductData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <StyledWrapper>
      <div className="group">
        <button onClick={triggerSearch} className="search-button">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </g>
          </svg>
        </button>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") triggerSearch();
          }}
          value={inputValue}
          placeholder="Search"
          type="search"
          className="input"
        />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 190px;
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    background-color: #fff;
  }

  .search-button:hover + .input {
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    background-color: #fff;
  }

  .search-button {
    position: absolute;
    left: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .icon {
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
