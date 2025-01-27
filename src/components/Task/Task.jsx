import './Task.css'

function Task() {
    return (
      <div className='task-container'>
        <input type="checkbox" name="concluido" id="concluido-taskX" />
        <span>Titulo da task X</span>
        <button>🗑</button>
      </div>
    )
}

export default Task
  