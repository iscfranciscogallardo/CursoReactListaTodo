import { useState } from "react";

const useTodo = () =>{
    const [taskList, setTask] = useState([]);

    const addTask = (task) =>{
        setTask([...taskList, {description:task, done:false}]);
    };
    
    const removeTask = (index) =>{
        setTask(taskList.filter((_,i)=> i !== index));
    };
    
    const updateTask = (index, checked) =>{
        setTask(
            taskList.map((task, i) =>{
                if(i=== index){
                    return {...task, done: checked === "on"};
                }else{
                    return task;                    
                }
            })
        );
    };

    return {taskList, addTask, removeTask, updateTask};
}

export default useTodo;