import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import {useDispatch} from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../store/todos/todoSlice';

export const Todo = ({ task}) => {
  const dispatch = useDispatch();
  return (
    <div className="Todo">
      <div className='TodoFlexBox'>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => dispatch(toggleComplete(task.id))}>{task.task}</p>
        <div>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => dispatch(editTodo(task.id))} />
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => dispatch(deleteTodo(task.id))} />
        </div>
      </div>
      {/* <p>{date}</p> */}
      <div className='date-status'>
        <span>{task.date}</span>
        <span>{task.completed? "Complete" : "Incomplete"}</span>
      </div>
    </div>
  )
}


// Search and drag remaining