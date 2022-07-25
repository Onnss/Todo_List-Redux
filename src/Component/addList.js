import React, { useState } from 'react'

const AddList = ( {id,description,donee,update,add,setAdd,setDone,setUpdate}) => {

  const [textChange,setText]=useState(description)
//delete button
  const handleDEl = () => {
    const v=add.filter(el=>el.id!==id)
    setAdd(v.map(el=>el))
}
//done button
const handleDone=()=>{
  setDone(!donee)
  setAdd(prev=>prev.map(el=> el.id===id? {...el,done:!donee} :el))
}
//update button
const handleUpdate=()=>{
  setUpdate(!update)
  setAdd(prev=>prev.map(el=> el.id===id? {...el,updated:!update} :el))
}
//text updated
const handleTextUpdate = (e) => {
  const t=e.target.value
  setText(t)
  setAdd(prev=>prev.map(el=> el.id===id? {...el,description:t} :el))
}

  return (
    <div className='ms-5 d-flex justify-content-between'> 
      <div className='ms-5 d-flex '>
        <input type="checkbox" onChange={handleDone} style={{width:'30px',height:'40px',marginInlineStart:'60px',marginInlineEnd:'20px'}}/>
        {update ? <p className={donee? 'text-decoration-line-through':''}>{description} </p> : <input type="text" placeholder={textChange} onChange={handleTextUpdate}/>}
      </div>
      <div style={{marginInlineEnd:'145px'}}>
        {/* <button className='mx-1' onClick={handleDone}>{donee? 'Undone' :'Done' }</button> */}
        <button className='mx-1' onClick={handleUpdate} >{update? "🖍":"Save"}</button>
        <button className='mx-1' onClick={handleDEl} >X</button>
      </div>
    </div>
  )
}
export default AddList