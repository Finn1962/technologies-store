// Provider
import CartProvider from "../contexts/CartContext.jsx";
import PopUpProvider from "../contexts/PopUpContext.jsx";
import LoaderProvider from "../contexts/LoaderContext.jsx";

export default function AppProvider({ children }) {
  return (
    <LoaderProvider>
      <PopUpProvider>
        <CartProvider>{children}</CartProvider>
      </PopUpProvider>
    </LoaderProvider>
  );
}
