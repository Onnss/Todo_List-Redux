import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import AddList from './Component/addList'
function App() {
  const [add,setAdd]=useState([])
  const [todo,setTodo]=useState('')
  const [don,setDone]=useState(false)
  const [uptodate,setUpdate]=useState(false)
  //text todo
  const handleTodo=(e)=>{
    let r=e.target.value
    setTodo(r)
  }
  //button add
  const handleAdd=()=>{
    todo.trim() && setAdd([{id:uuidv4(),description:todo,done:false,updated:false},...add])
    setTodo("")
    document.getElementById('myInput').value = ''
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id='myInput' onChange={handleTodo} type="text" />
        <button onClick={handleAdd}><span>+</span></button>
        <button onClick={()=>setAdd([])}><span>Delete all</span></button>
      </div>
      {add.map(el=><AddList key={el.id} id={el.id} description={el.description} donee={el.done} update={el.updated} add={add} setAdd={setAdd} setDone={setDone}  setUpdate={setUpdate} don={don} uptodate={uptodate}/>)}
      <button onClick={()=>{setAdd(add.filter(el=>el.done!==true))}}><span>Delete done tasks X</span></button>
    </div>
  );
}

export default App;
