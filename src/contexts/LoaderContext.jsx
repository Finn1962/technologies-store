//Libarys
import { createContext, useState } from "react";

const LoaderContext = createContext();
export { LoaderContext };

export default function LoaderProvider({ children }) {
  const [isLoaderVisible, setIsVisible] = useState(false);

  function showLoader() {
    setIsVisible(true);
  }

  function hideLoader() {
    setIsVisible(false);
  }

  return (
    <LoaderContext.Provider value={{ isLoaderVisible, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
}
