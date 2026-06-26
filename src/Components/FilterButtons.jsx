//Libarys
import styled from "styled-components";

export default function CategorieButtons({
  className,
  activeCategorie,
  setActiveCategorie,
  activeFilter,
  setActiveFilter,
  activeBrand,
  setActiveBrand,
  setSearchParams,
  onClick,
}) {
  function handleClick({
    currentActiveState,
    stateUpdater,
    urlParamKey,
    clickedValue,
  }) {
    if (currentActiveState === clickedValue) {
      stateUpdater("");
      setSearchParams((prev) => {
        return { ...Object.fromEntries(prev), [urlParamKey]: "" };
      });
    } else {
      stateUpdater(clickedValue);
      setSearchParams((prev) => {
        return { ...Object.fromEntries(prev), [urlParamKey]: clickedValue };
      });
    }
  }

  return (
    <StiledContainer className={className} onClick={onClick}>
      <div className="filter-options-container">
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeFilter,
              stateUpdater: setActiveFilter,
              urlParamKey: "filter",
              clickedValue: "Highest price",
            })
          }
          data-active={activeFilter === "Highest price"}
        >
          Highest price
        </button>
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeFilter,
              stateUpdater: setActiveFilter,
              urlParamKey: "filter",
              clickedValue: "Lowest price",
            })
          }
          data-active={activeFilter === "Lowest price"}
        >
          Lowest price
        </button>
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeFilter,
              stateUpdater: setActiveFilter,
              urlParamKey: "filter",
              clickedValue: "Best rating",
            })
          }
          data-active={activeFilter === "Best rating"}
        >
          Best rating
        </button>
      </div>
      <div className="categorie-options-container">
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeCategorie,
              stateUpdater: setActiveCategorie,
              urlParamKey: "categorie",
              clickedValue: "Smartphones",
            })
          }
          data-active={activeCategorie === "Smartphones"}
        >
          Smartphones
        </button>
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeCategorie,
              stateUpdater: setActiveCategorie,
              urlParamKey: "categorie",
              clickedValue: "Tablets",
            })
          }
          data-active={activeCategorie === "Tablets"}
        >
          Tablets
        </button>
        <button
          className="button-primary"
          onClick={() =>
            handleClick({
              currentActiveState: activeCategorie,
              stateUpdater: setActiveCategorie,
              urlParamKey: "categorie",
              clickedValue: "Laptops",
            })
          }
          data-active={activeCategorie === "Laptops"}
        >
          Laptops
        </button>
      </div>
      <select
        name="autos"
        className="button-primary"
        onChange={(event) =>
          handleClick({
            currentActiveState: activeBrand,
            stateUpdater: setActiveBrand,
            urlParamKey: "brand",
            clickedValue: event.target.value,
          })
        }
        value={activeBrand}
        data-active={activeBrand !== ""}
      >
        <option value="">No brand</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Oppo">Oppo</option>
        <option value="Realme">Realme</option>
        <option value="Vivo">Vivo</option>
        <option value="Asus">Asus</option>
        <option value="Huawei">Huawei</option>
        <option value="Lenovo">Lenovo</option>
        <option value="Dell">Dell</option>
      </select>
    </StiledContainer>
  );
}

const StiledContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 10px;
  flex-direction: column;

  .filter-options-container,
  .categorie-options-container {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  button {
    color: rgb(125, 125, 125);
    width: auto;
  }

  button[data-active="true"] {
    outline: none;
    border-color: var(--primary-button-border-color);
    background-color: var(--primary-button-hover-color);
    color: var(--primary-focus-text-color);
  }

  select {
    color: rgb(125, 125, 125);
  }

  select[data-active="true"] {
    outline: none;
    border-color: var(--primary-button-border-color);
    background-color: var(--primary-button-hover-color);
    color: var(--primary-focus-text-color);
  }

  select:focus,
  textarea:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    align-items: start;

    button,
    select {
      font-size: 0.8rem;
    }

    .filter-options-container,
    .categorie-options-container {
      justify-content: left;
    }
  }
`;
