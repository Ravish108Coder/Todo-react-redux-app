import {useDispatch, useSelector} from 'react-redux';
import { handleFilter } from '../store/todos/todoSlice';
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import TodoSearchBox from './TodoSearchBox';
uuidv4();

export const TodoWrapperLocalStorage = () => {

    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch = useDispatch();
      

      
    return (
        <div className='TodoWrapper'>
            <h1>React Task Tracker</h1>
            <TodoForm />
            <TodoSearchBox />
            <div className="filterButtons">
                <button onClick={()=>{dispatch(handleFilter("all"))}}>All</button>
                <button onClick={()=>{dispatch(handleFilter("Complete"))}}>Complete</button>
                <button onClick={()=>{dispatch(handleFilter("Incomplete"))}}>Incomplete</button>
            </div>
            {todos?.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm key={index} task={todo} />
                ) : (
                    <Todo task={todo} key={index} />
                )

            ))}

        </div>
    )
}
