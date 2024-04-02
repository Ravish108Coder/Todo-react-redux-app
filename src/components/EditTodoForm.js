import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { editTask } from '../store/todos/todoSlice';

export const EditTodoForm = ({task}) => {
    const [value, setValue] = useState(task.task);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        dispatch(editTask({
          task: value,
          id: task.id
        }));
        // editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
