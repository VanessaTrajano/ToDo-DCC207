import './Task.css'

function Task({titulo, funcaoCheck, funcaoClick}) {
    return (
      <div className='task-container'>
        <input type="checkbox" name="concluido" id="concluido-taskX" onClick={funcaoCheck}/>
        <p>{titulo}</p>
        <button onClick={funcaoClick}>🗑</button>
      </div>
    )
}

export default Task
  