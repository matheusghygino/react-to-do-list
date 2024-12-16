import './App.css';
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id:1, text: 'Aprender react', completed: false },
    {id:2, tex: 'Fazer uma lista de tarefas', completed: true}
  ]

  const handleDelete = (id) => {
    console.log("Excluir tarefa com ID: ", id)
  };

  const handleToggle = (id) => {
    console.log('Alterar tarefa com ID: ', id)
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Minha lista de Tarefas</h1>
    <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
