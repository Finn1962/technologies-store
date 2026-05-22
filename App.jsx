import Home from "./Pages/Home.jsx";

import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return <>{currentPage === "home" && <Home />}</>;
}

export default App;
