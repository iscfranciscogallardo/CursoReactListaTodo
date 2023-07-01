const TaskItem = ({task, index, removeTask, updateTask}) =>{
    return (
        <li key={index.toString()} className="py-2 hover:bg-slate-200 flex justify-between ...">
           <input className="mx-8 px8 ..." type="checkbox" defaultChecked={task.done} onChange={({target})=>updateTask(index, target.value)}></input>
           <span className="mx-8 text-blue-600 font-bold">{task.description}</span>
           <button className="mx-8 py-1 px-3 bg-red-500 hover:bg-red-600 text-neutral-50 rounded-full ..." onClick={()=>removeTask(index)}>Eliminar</button>
        </li>
    );
};

export default TaskItem;