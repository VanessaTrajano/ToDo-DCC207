import Task from '../Task/Task'
import './ToDo.css'

function ToDo() {

  const handleClick = () =>{
    window.alert("Clicou")
  }

  const handleCheck = () => {
    window.alert("Check!")
  }

    return (
      <>
        <Task titulo={"Task 1"} funcaoCheck={handleCheck} funcaoClick={handleClick}/>
      </>
    )
}

export default ToDo
  