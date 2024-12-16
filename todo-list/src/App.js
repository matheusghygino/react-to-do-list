import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  const todo = { id:1, text: 'Aprender react', completed: false };

  const handleDelete = (id) => {
    console.log("Excluir tarefa com ID: ", id)
  };

  const handleToggle = (id) => {
    console.log('Alterar tarefa com ID: ', id)
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Minha lista de Tarefas</h1>
    <TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
