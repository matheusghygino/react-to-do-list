import React from "react";

const todoItem = ( { todo, onDelete, onToggle } ) => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span></span>
        </div>
    )
};

export default todoItem;