import React, { useState } from 'react'
import { observer } from 'mobx-react'

import createTodoStore from '../stores/createTodoStore'

import TodoListItem from './TodoListItem'
import './TodoList.css'


function TodoList() {
    const [ store ] = useState(createTodoStore);

    return (
        <div className="todo-list">
            <header>
                <h1 className="todo-list-title">In Progress</h1>
            </header>
            <section>
                <ul>
                    {store.activeItems.map(item => (
                        <TodoListItem
                            key={item.id}
                            name={item.name}
                            isComplete={item.isComplete}
                            onComplete={() => store.setCompleted(item.id)}
                            onChange={(e) => store.setItemName(item.id, e.target.value)}
                            onDelete={() => store.delete(item.id)}
                        />
                    ))}
                </ul>
                <button onClick={store.createItem}>
                    Add New Item
                </button>
            </section>
            <footer>
                <h2 className="todo-list-title">Completed Items</h2>
                <ul>
                    {store.completedItems.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    )
}

export default observer(TodoList);
