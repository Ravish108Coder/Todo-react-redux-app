import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todoSlice";

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        todos: todosReducer,
    },
    });