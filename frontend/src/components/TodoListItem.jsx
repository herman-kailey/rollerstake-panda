import React from 'react';

import './TodoListItem.css';


export default function TodoListItem({ name, onComplete, onDelete, onChange }) {
    return (
        <li className="todo-list-item">
            <input onChange={onChange} value={name} />
            <button onClick={onComplete}>Complete</button>
            <button onClick={onDelete}>DELETE</button>
        </li>
    )
}
