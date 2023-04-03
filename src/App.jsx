import "./App.css";
import FunKomponenta from "./components/FunKomponenta";
import ManjeFunKomponenta from "./components/ManjeFunKomponenta";
//import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState(" ");
  const handleButtonClick = () => {
    setMessage("Button clicked!");
  };
  return (
    <div>
      <FunKomponenta />
      <ManjeFunKomponenta onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
