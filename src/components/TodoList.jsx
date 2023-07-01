import { useState, useEffect } from 'react';
import useTodo from '../hooks/useTodo';
import TaskItem from './TaskItem';

const TodoList = ()=>{

    const [inputValue, setTask] = useState('');
    const { taskList, addTask, removeTask, updateTask } = useTodo();
    const [numberOfTasks, setNumberOfTasks] = useState(0);

    const newTask=()=>{
        addTask(inputValue);
    }

    useEffect(()=>{setNumberOfTasks(taskList?.length)}, [
        taskList
     ]);

    return (
        <div className="bg-white w-screen h-screen">
            <div className="bg-slate-100 w-screen py-8" > 
                <span className='mx-8 font-bold'>Inserte la nueva tarea: </span>
                <input className='mx-8 px-8 ...' type="text" placeholder="Ingresar..." onChange={({target})=>{setTask(target.value);}} ></input>
                <button className='px-8 bg-sky-500 ...' onClick={newTask}>Guardar</button>
                <span className='mx-8 font-bold'>Total de tareas: {numberOfTasks} </span>
            </div>
            <br />
            <div className='w-100 ...'> 
                <ul className='p-8'>
                    { taskList?.map((task, index) => (
                        <TaskItem task={task} index={index} removeTask={removeTask} updateTask={updateTask} ></TaskItem> 
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoList;