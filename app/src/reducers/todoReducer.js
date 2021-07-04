import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from "../actions/todoTypes";

const initState= {
    filter:'All',
    todos : [
        {
            id:'1' ,
            description:'hello world' ,
            isDone: true
        } ,
        {
            id:'2' ,
            description:'learn redux' ,
            isDone: false
        }
    ]
}
const todoReducer = (state=initState,{type,payload}) =>{
    switch (type) {
        case ADD_TODO:
            
            return{
                ...state,
                todos:[...state.todos,payload]
            };
    case DELETE_TODO:
        return{
            ...state,
            todos:state.todos.filter(elm=>elm.id!==payload)
        }
        case TOGGLE_TODO:
        return{
            ...state,
            todos:state.todos.map(elm=>elm.id===payload? {...elm,isDone:!elm.isDone} : elm)
        }
        case EDIT_TODO:
            return{
                ...state,
                todos: state.todos.map(el=>el.id===payload.id? payload :el)
            }
            case TOGGLE_FILTER :
                return{
                    ...state,
                    filter:payload

                }
        default:
            return state;
    }
}
export default todoReducer