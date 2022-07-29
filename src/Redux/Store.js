import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice'

export const Store = configureStore({
    reducer:{
        todos:todoSlice

    }
})