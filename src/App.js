import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import data from './Component/data';
import AddList from './Component/addList'
function App() {
  const [add,setAdd]=useState(data)
  const [todo,setTodo]=useState('')
  const [donee,setDone]=useState(false)
  const [update,setUpdate]=useState(true)
  const handleTodo=(e)=>{
    let r=e.target.value
    setTodo(r)
  }
  const handleAdd=()=>{
    setAdd([{id:uuidv4(),description:todo,done:donee,updated:update},...add])
    // setTodo("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTodo} type="text" />
        <button onClick={handleAdd}>
          <span>+</span>
        </button>
      </div>
      {add.map(el=><AddList key={el.id} id={el.id} description={el.description} donee={el.done} update={el.updated} add={add} setAdd={setAdd} setDone={setDone}  setUpdate={setUpdate} />)}
    </div>
  );
}

export default App;
