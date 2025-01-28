import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <h1>To Do Web</h1>
      <nav className="header-nav">
        <ul>
            <li>Bloco de Tarefas</li>
            <li>Tarefas Concluídas</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
