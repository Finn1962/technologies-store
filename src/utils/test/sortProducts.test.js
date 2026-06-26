import { describe, it, expect } from "vitest";
import { useSortProducts } from "../sortProducts.js";

describe("Sortieren von Produkten", () => {
  const { sortByHighestPrice, sortByLowestPrice, sortByBestRating } =
    useSortProducts();

  const unsortedArray = [
    { price: 199.99, availabilityStatus: "In Stock", rating: 2.83 },
    { price: 1099.99, availabilityStatus: "In Stock", rating: 4.4 },
    { price: 299.99, availabilityStatus: "Out of Stock", rating: 4.68 },
  ];

  it("Soll von groß nach klein sortieren", () => {
    const sortedArray = sortByHighestPrice(unsortedArray);
    expect(sortedArray).toEqual([
      { price: 1099.99, availabilityStatus: "In Stock", rating: 4.4 },
      { price: 299.99, availabilityStatus: "Out of Stock", rating: 4.68 },
      { price: 199.99, availabilityStatus: "In Stock", rating: 2.83 },
    ]);
  });

  it("Soll von klein nach groß sortieren", () => {
    const sortedArray = sortByLowestPrice(unsortedArray);
    expect(sortedArray).toEqual([
      { price: 199.99, availabilityStatus: "In Stock", rating: 2.83 },
      { price: 299.99, availabilityStatus: "Out of Stock", rating: 4.68 },
      { price: 1099.99, availabilityStatus: "In Stock", rating: 4.4 },
    ]);
  });

  it("Soll alle Elemente nach Bewertung sortieren", () => {
    const sortedArray = sortByBestRating(unsortedArray);
    expect(sortedArray).toEqual([
      { price: 299.99, availabilityStatus: "Out of Stock", rating: 4.68 },
      { price: 1099.99, availabilityStatus: "In Stock", rating: 4.4 },
      { price: 199.99, availabilityStatus: "In Stock", rating: 2.83 },
    ]);
  });
});
