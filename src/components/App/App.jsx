import ToDo from "../ToDo/ToDo";
import Header from "../Header/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [paraFazer, setParaFazer] = useState(true)

  const mudaParaDone = () => {
    setParaFazer(false);
  }

  const mudaParaToDo = () => {
    setParaFazer(true)
  }

  return (
    <>
      <Header funcaoToDo={mudaParaToDo} funcaoDone={mudaParaDone} />
      <ToDo mostraMenu={paraFazer} />
    </>
  );
}

export default App;
