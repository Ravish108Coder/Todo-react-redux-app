import { useState } from "react";
import {useDispatch} from 'react-redux';

import { filterSearch } from "../store/todos/todoSlice";

const TodoSearchBox = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    // const filterSearch = (e) => {
    //     var query = e.target.value;
    //     console.log(query)
    //     const storedTodos = JSON.parse(localStorage.getItem('todos'))
    //     const newTodos = storedTodos.filter((todo) => (todo.task.toLowerCase().indexOf(query.toLowerCase()) !== -1))
    //     setTodos(newTodos)
    // }
    return (
        <div>
            <div className="TodoForm">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyUp={(e)=>dispatch(filterSearch(e.target.value))} className="todo-input" placeholder='Search Task here' />
            </div>
        </div>
    )
}

export default TodoSearchBox
