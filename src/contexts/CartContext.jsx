//Libarys
import { useState, useEffect, createContext } from "react";

const CartContext = createContext();
export { CartContext };

function addProduct(cart, newData) {
  const existingData = cart.find(
    (data) => data.product.id === newData.product.id,
  );
  if (existingData) {
    const index = cart.indexOf(existingData);
    return cart.with(index, {
      product: newData.product,
      quantity: existingData.quantity + newData.quantity,
    });
  } else {
    return [...cart, newData];
  }
}

function removeProduct(cart, newData) {
  const existingData = cart.find(
    (data) => data.product.id === newData.product.id,
  );
  if (!existingData) return cart;
  const index = cart.indexOf(existingData);

  const newQuantity = existingData.quantity - newData.quantity;

  if (newQuantity < 0) {
    console.error("The shopping cart must not contain negative values.");
    return cart;
  } else if (newQuantity > 0) {
    return cart.with(index, {
      product: existingData.product,
      quantity: newQuantity,
    });
  } else if (newQuantity === 0) {
    return cart.toSpliced(index, 1);
  }
}

function changeQuantity(cart, newData) {
  const existingData = cart.find(
    (data) => data.product.id === newData.product.id,
  );
  if (!existingData) return;
  const index = cart.indexOf(existingData);

  if (newData.quantity < 0) {
    console.error("The quantity of a product must not be less than 1.");
    return cart;
  } else if (newData.quantity > 0) {
    return cart.with(index, {
      product: existingData.product,
      quantity: newData.quantity,
    });
  } else {
    return cart;
  }
}

function resetCart() {
  return [];
}

export default function CartProvider({ children }) {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(
    dataFromLocalStorage ? dataFromLocalStorage : [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addProductToCart: (data) => {
          setCart((prev) => addProduct(prev, data));
        },
        removeProductFromCart: (data) => {
          setCart((prev) => removeProduct(prev, data));
        },
        changeQuantityInCart: (data) => {
          setCart((prev) => changeQuantity(prev, data));
        },
        resetCart: () => {
          setCart(resetCart());
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
