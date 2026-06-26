export function createSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-");
}

//Erstellt Slug aus Produktnamen für URL
