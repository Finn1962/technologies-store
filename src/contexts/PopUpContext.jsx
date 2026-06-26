//Libarys
import { createContext, useState } from "react";

const PopUpContext = createContext();
export { PopUpContext };

export default function PopUpProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  function showPopUp() {
    setIsVisible(true);
  }

  function hidePopUp() {
    setIsVisible(false);
  }

  return (
    <PopUpContext.Provider value={{ isVisible, showPopUp, hidePopUp }}>
      {children}
    </PopUpContext.Provider>
  );
}
