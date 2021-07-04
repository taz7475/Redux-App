import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { filterTodo } from './actions/todoActions';



function App() {
  const todos= useSelector(state=>state.todos)
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <div className="buttons">
      <button onClick={() =>dispatch(filterTodo('All'))}>All</button>
      <button onClick={() =>dispatch(filterTodo(true))}>Done</button>
      <button onClick={() =>dispatch(filterTodo(false))}>UnDone</button>
      </div>
    <div className="todos">
      <TodoList todos={filter==='All'? todos : todos.filter(el=>el.isDone===filter)}  /></div>
      <hr></hr>
      <br></br>
      <div className="add">
        <AddTodo /></div>
      

    </div>
  );
}

export default App;
