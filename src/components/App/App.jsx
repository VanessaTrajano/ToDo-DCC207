import Task from '../Task/Task'
//import ToDo from '../ToDo/ToDo'
import './App.css'

function App() {

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

export default App
