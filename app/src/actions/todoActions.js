import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from './todoTypes'
import {v4 as uuid} from 'uuid'
export const addTodo =(newTodo)=> {

    return {
        type: ADD_TODO,
        payload:{...newTodo,id:uuid() , isDone:false} 
    }
}
export const deleteTodo =(id)=> {

    return {
        type: DELETE_TODO,
        payload:id 
    }
}
export const toggleTodo =(id)=> {

    return {
        type: TOGGLE_TODO ,
        payload:id 
    }
}
export const editTodo =(editedtodo)=> {

    return {
        type: EDIT_TODO ,
        payload:editedtodo 
    }
}
export const filterTodo =(filter)=> {

    return {
        type: TOGGLE_FILTER,
        payload:filter 
    }
}