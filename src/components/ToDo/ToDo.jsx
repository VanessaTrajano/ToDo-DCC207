import { useState } from 'react';
import Task from '../Task/Task'
import "./ToDo.css";

function ToDo() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);

  const removerTarefa = (id) =>{
    setLista(lista.filter((item) => (
      item.id != id
    )))
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
        {lista.map(item => {
          return <Task key={item.id} titulo={item.task} funcaoCheck={handleCheck} funcaoClick={() => removerTarefa(item.id)}/>
        })}
      </div>
    </div>
  );
}

export default ToDo;
