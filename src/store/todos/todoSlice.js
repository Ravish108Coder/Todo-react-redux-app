import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: JSON.parse(localStorage.getItem('todos')) || [],
    reducers: {
        addTodo: (state, action) => {
            const newDate = new Date().toLocaleString();
            state.push({ id: uuidv4(), date: newDate, task: action.payload.task, completed: false, isEditing: false });
            localStorage.setItem('todos', JSON.stringify(state));
        },
        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state));
            }
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(state));
            }
        },
        editTask: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.task = action.payload.task;
                todo.isEditing = !todo.isEditing;
                localStorage.setItem('todos', JSON.stringify(state));
            }
        },
        editTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.date = new Date().toLocaleString();
                todo.isEditing = !todo.isEditing;
                localStorage.setItem('todos', JSON.stringify(state));
            }
        },
        handleFilter: (state, action) => {
            const { payload } = action;
            const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            if (payload === 'all') {
                return storedTodos;
            } else if (payload === 'Complete') {
                return storedTodos.filter(todo => todo.completed === true);
            } else if (payload === 'Incomplete') {
                return storedTodos.filter(todo => todo.completed === false);
            }
            return state;
        },
        filterSearch: (state, action) => {
            const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            return storedTodos.filter(todo => todo.task.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo, handleFilter, filterSearch, editTask } = todoSlice.actions;

export default todoSlice.reducer;
