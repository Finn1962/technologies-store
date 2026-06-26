export function useSortProducts() {
  function sortByHighestPrice(array) {
    return array.toSorted((a, b) => b.price - a.price);
  }

  function sortByLowestPrice(array) {
    return array.toSorted((a, b) => a.price - b.price);
  }

  function sortByBestRating(array) {
    return array.toSorted((a, b) => b.rating - a.rating);
  }

  function filterByCategorie(array, categorie) {
    return array.filter((product) => product.category === categorie);
  }

  function filterByBrand(array, brand) {
    return array.filter((product) => product.brand === brand);
  }

  return {
    sortByHighestPrice,
    sortByLowestPrice,
    sortByBestRating,
    filterByCategorie,
    filterByBrand,
  };
}
