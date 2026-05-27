export function useFetchProductData() {
  async function fetchAllProductData() {
    return Promise.all([
      fetch("https://dummyjson.com/products/category/smartphones"),
      fetch("https://dummyjson.com/products/category/tablets"),
      fetch("https://dummyjson.com/products/category/laptops"),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            if (!response.ok)
              throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
          }),
        );
      })
      .then((data) => {
        return [...data[0].products, ...data[1].products, ...data[2].products];
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }

  async function fetchCategoryData(categoryName) {
    return fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }

  async function fetchProductSearch(productName) {
    return fetch(`https://dummyjson.com/products/search?q=${productName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }

  return {
    fetchAllProductData,
    fetchCategoryData,
    fetchProductSearch,
  };
}
