import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState ([

  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Minha lista de Tarefas</h1>
      <AddTodo onAdd={addTodo}/>
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
