//Components
import styled from "styled-components";

export default function SearchBar({
  searchValue,
  setSearchValue,
  setSearchParams,
}) {
  return (
    <StyledWrapper>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input
          onChange={(event) => {
            setSearchValue(event.target.value);
            setSearchParams((prev) => {
              return {
                ...Object.fromEntries(prev),
                search: event.target.value,
              };
            });
          }}
          value={searchValue}
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
    border: 1px solid transparent;
    outline: none;
    background-color: var(--primary-button-color);
    color: var(--primary-focus-text-color);
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: var(--primary-button-text-color);
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: var(--primary-button-border-color);
    background-color: var(--primary-button-hover-color);
    color: var(--primary-focus-text-color);
  }

  .icon {
    fill: var(--primary-button-text-color);
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 1rem;
    border: none;
    background-color: transparent;
  }

  .icon:hover + .input {
    outline: none;
    border-color: var(--primary-button-border-color);
    background-color: var(--primary-button-hover-color);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
