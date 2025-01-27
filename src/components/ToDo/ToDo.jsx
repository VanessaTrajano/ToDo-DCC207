import Task from '../Task/Task'
import "./ToDo.css";

function ToDo() {

  const handleClick = () =>{
    window.alert("Clicou")
  }

  const handleCheck = () => {
    window.alert("Check!")
  }

  return (
    <div>
      <div>
        <input type="text" name="input-tarefa" id="input-tarefa" />
        <button>➕</button>
      </div>
      <div>
        <Task titulo={"Task 1"} funcaoCheck={handleCheck} funcaoClick={handleClick}/>
      </div>
      
    </div>
  );
}

export default ToDo;
