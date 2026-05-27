export async function fetchProductData() {
  return fetch("https://api.escuelajs.co/api/v1/products")
    .then((data) => {
      //console.log(data);
    })
    .catch((error) => {
      //console.error("Error fetching product data:", error);
    });
}

fetchProductData();
