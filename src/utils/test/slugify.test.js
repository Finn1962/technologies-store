import { describe, it, expect } from "vitest";
import { createSlug } from "../slugify.js";

describe("Produktnamen in Slugs umwandeln", () => {
  const produktTitle = "T-Shirt Blau & Groß!";
  it("Soll den Produktnamen in Slug umwandeln", () => {
    const slug = createSlug(produktTitle);
    expect(slug).toBe("t-shirt-blau-gross");
  });
});
