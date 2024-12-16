import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onDelete, onToggle})=> {
    return (
        <div className="bg-white shadow-md rounded-lg">
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TodoList