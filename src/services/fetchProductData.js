import { useCallback } from "react";

export function useFetchProductData() {
  const fetchAllProductData = useCallback(() => {
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
  }, []);

  const fetchCategoryData = useCallback((categoryName) => {
    return fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => response.json())
      .then((data) => data.products)
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }, []);

  const fetchProduct = useCallback((productId) => {
    return fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }, []);

  const fetchProductSearch = useCallback((productName) => {
    return fetch(`https://dummyjson.com/products/search?q=${productName}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products.filter(
          (product) =>
            product.category === "smartphones" ||
            product.category === "tablets" ||
            product.category === "laptops",
        );
        return filteredProducts;
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        throw error;
      });
  }, []);

  return {
    fetchAllProductData,
    fetchCategoryData,
    fetchProductSearch,
    fetchProduct,
  };
}
