import { useState } from 'react';
import Task from '../Task/Task'
import "./ToDo.css";

function ToDo() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const handleClick = () =>{
    window.alert("Clicou")
  }

  const handleCheck = () => {
    window.alert("Check!")
  }

  const handleChange = (e) => {
    setTarefa(e.target.value)
  }

  const adicionaTarefa = (e) => {
    setLista(lista.concat({
      task: tarefa,
      id: Date.now(),
      done: false
    }))
    setTarefa("")

    e.preventDefault()
  }

  return (
    <div>
      <div>
        <input type="text" value={tarefa} onChange={handleChange}/>
        <button onClick={adicionaTarefa}>➕</button>
      </div>
      <div>
        <Task titulo={"Task 1"} funcaoCheck={handleCheck} funcaoClick={handleClick}/>
      </div>
    </div>
  );
}

export default ToDo;
