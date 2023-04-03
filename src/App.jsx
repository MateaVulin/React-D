import "./App.css";
import FunKomponenta from "./components/FunKomponenta";
import ManjeFunKomponenta from "./components/ManjeFunKomponenta";
import KlasKomponenta from "./components/KlasKomponenta";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <FunKomponenta />
      <ManjeFunKomponenta jasamklikizkomponente={handleButtonClick} />
      <KlasKomponenta />
    </div>
  );
}

export default App;
