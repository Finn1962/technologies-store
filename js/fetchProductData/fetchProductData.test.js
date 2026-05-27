import { describe, it, expect } from "vitest";
import { useFetchProductData } from "./fetchProductData.js";

describe("Abrufen der Daten von DummyJSON", () => {
  const { fetchAllProductData, fetchCategoryData, fetchProductSearch } =
    useFetchProductData();

  it("Sollten drei Kategorien für Smartphones, Tablets, und Laptops sein", async () => {
    const data = await fetchAllProductData();
    expect(data.length).toBe(3);
  });

  it("Die Kategorie sollte iPhone beinhalten und keine iPad", async () => {
    const data = await fetchCategoryData("smartphones");
    expect(data.products[0].title).toBe("iPhone 5s");
    expect(data.products[0].title).not.toBe("iPad Mini 2021 Starlight");
  });

  it("Das erste Produkt sollte ein iPhone 5s", async () => {
    const data = await fetchProductSearch("iPhone 5s");
    expect(data.products[0].title).toBe("iPhone 5s");
  });
});
