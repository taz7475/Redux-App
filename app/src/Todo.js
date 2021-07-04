import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from './actions/todoActions'

const Todo = ({todo}) => {
    const  [input, setInput] = useState(todo)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{textDecoration:todo.isDone? "line-through" : "none"}} onClick={() => dispatch(toggleTodo(todo.id))}>{todo.description}</h1>
            <input value={input.description} onChange={(e) =>setInput({...input,description:e.target.value  })} type="text"></input>
            <button onClick={() =>dispatch(deleteTodo(todo.id))}>delete</button>
            <button onClick={() =>dispatch(editTodo(input))}>edit</button>
        </div>
    )
}

export default Todo
