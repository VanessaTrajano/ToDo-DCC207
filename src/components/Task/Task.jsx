import './Task.css'

function Task({titulo, funcaoCheck, funcaoClick}) {
    return (
      <div className='task-container'>
        <input type="checkbox" name="concluido" id="concluido-taskX" onClick={funcaoCheck}/>
        <span>{titulo}</span>
        <button onClick={funcaoClick}>🗑</button>
      </div>
    )
}

export default Task
  