import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../store/todos/todoSlice';

export const TodoForm = () => {
    const [value, setValue] = useState('');

    // const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          // addTodo(value);
          dispatch(addTodo({
            task: value
          }));
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
