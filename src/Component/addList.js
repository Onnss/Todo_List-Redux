import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {DeleteTodo,toggleDone,toggleUpdated,UpdateTodo} from '../Redux/todoSlice'
const AddList = ( {id,description,donee,update}) => {

 const dispatch=useDispatch()
  const [textChange,setText]=useState(description)

//delete button
  const handleDEl = () => {
    dispatch(DeleteTodo(id))
}
//done button
const handleDone=()=>{
  dispatch(toggleDone(id))
}
//update button
const handleUpdate=()=>{
  dispatch(toggleUpdated(id))
  
}
//text updated
const handleTextUpdate = (e) => {
  const t=e.target.value
  setText(t)
  dispatch(UpdateTodo({id:id,description:t}))
}

  return (
    <div className='ms-5 d-flex justify-content-between'> 
      <div className='d-flex ' style={{marginLeft:'150px'}}>
        {update ?  <input type="text" className="form-control"  value={textChange} onChange={handleTextUpdate}/> : <li className={donee? 'text-decoration-line-through':''}>{description} </li>}
      </div>
      <div style={{marginInlineEnd:'145px'}}>
        <button className='mx-1' onClick={handleUpdate} >{update? "Save": "🖍"}</button>
        <button className='mx-1' onClick={handleDone} >{donee? 'Undone':'Done'}</button>
        <button className='mx-1' onClick={handleDEl} >X</button>
      </div>
    </div>
  )
}
export default AddList