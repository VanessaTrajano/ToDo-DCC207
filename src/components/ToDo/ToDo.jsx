import { useState } from "react";
import Task from "../Task/Task";
import TaskConcluida from "../TaskConcluida/TaskConcluida";
import "./ToDo.css";

function ToDo({ mostraMenu }) {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);

  const removerTarefa = (id) => {
    setLista(lista.filter((item) => item.id != id));
  };

  const marcarComoConcluida = (id) => {
    setListaConcluida(
      listaConcluida.concat(lista.filter((item) => item.id == id))
    );
    setLista(lista.filter((item) => item.id != id));
  };

  const handleChange = (e) => {
    setTarefa(e.target.value);
  };

  const adicionaTarefa = (e) => {
    setLista(
      lista.concat({
        task: tarefa,
        id: Date.now(),
      })
    );
    setTarefa("");

    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      adicionaTarefa();
    }
  };

  return (
    <div className="todo-container">
      {mostraMenu ? (
        <>
          <div className="input-container">
            <input
              type="text"
              value={tarefa}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={adicionaTarefa}>➕</button>
          </div>
          <div className="tasks-container">
            {lista.map((item) => {
              return (
                <Task
                  key={item.id}
                  titulo={item.task}
                  funcaoCheck={() => marcarComoConcluida(item.id)}
                  funcaoClick={() => removerTarefa(item.id)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="tasks-container">
          <h1>Tarefas Concluídas</h1>
          {listaConcluida.map((item) => {
            return <TaskConcluida key={item.id} titulo={item.task} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ToDo;
