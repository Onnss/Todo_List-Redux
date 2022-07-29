import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[{id:uuidv4(),
        description:'Learning Redux',
        done:false,
        updated:false,
    }],
        filtered:'All'
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.todos.unshift(action.payload)
        },
        DeleteTodo:(state,action)=>{
           let del=state.todos.filter(el=>el.id!==action.payload)
           state.todos=del
        },
        toggleDone:(state,action)=>{
            state.todos.map(el => (el.id === action.payload) ? el.done=!el.done : el)
        },
        toggleUpdated:(state,action)=>{
            state.todos.map(el => (el.id === action.payload) ? el.updated=!el.updated : el)
        },
        UpdateTodo:(state,action)=>{
            state.todos.map(el=> (el.id === action.payload.id) ? el.description=action.payload.description : el)
        },
        filteredByDone:(state)=>{
            state.filtered='Done'
        },
        filteredByUndone:(state)=>{
            state.filtered='Undone'
        },
        filteredByAll:(state)=>{
            state.filtered='All'
        }

    }

})

export default todoSlice.reducer
export const {AddTodo,DeleteTodo,toggleDone,toggleUpdated,UpdateTodo,filteredByDone,filteredByUndone,filteredByAll}=todoSlice.actions
