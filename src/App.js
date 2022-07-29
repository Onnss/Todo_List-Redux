import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import AddList from './Component/addList'
import { useDispatch, useSelector } from 'react-redux';
import {AddTodo,filteredByDone,filteredByUndone,filteredByAll} from './Redux/todoSlice'
function App() {
  let todoo=useSelector(state=>state.todos.todos)
  let filter=useSelector(state=>state.todos.filtered)
  const dispatch = useDispatch()
  //reading user input
  const [todo,setTodo]=useState('')
  //text todo
  const handleTodo=(e)=>{
    let r=e.target.value
    setTodo(r)
  }
  //button add
  const handleAdd=()=>{
    todo.trim() && dispatch(AddTodo({id:uuidv4(),description:todo,done:false,updated:false}))
    setTodo("")
    document.getElementById('myInput').value = ''
  }
  //filtering todo tasks
  const task=(filter==='Done')? todoo.filter(el=>el.done===true):(filter==='Undone')? todoo.filter(el=>el.done===false):todoo
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id='myInput' onChange={handleTodo} type="text" />
        <button onClick={handleAdd}><span>+</span></button>
      </div>
      {task.map(el=><AddList key={el.id} id={el.id} description={el.description} donee={el.done} update={el.updated}  />)}
      <button onClick={()=>dispatch(filteredByAll())} ><span>All</span></button>
      <button onClick={()=>dispatch(filteredByDone())} ><span>Done</span></button>
      <button onClick={()=>dispatch(filteredByUndone())} ><span>Undone</span></button> 
    </div>
  );
}

export default App;
