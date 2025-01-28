import "./Header.css";

function Header({funcaoToDo, funcaoDone}) {
  return (
    <div className="header-container">
      <h1>To Do Web</h1>
      <nav className="header-nav">
        <ul>
            <li onClick={funcaoToDo}>Bloco de Tarefas</li>
            <li onClick={funcaoDone}>Tarefas Concluídas</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
