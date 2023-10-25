import { useTasks } from "../context/TasksContext";
import { Link } from 'react-router-dom'

function TaskCard ({ task }) {

    const { deleteTask } = useTasks();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-4 rounded-md">
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <div className="flex h-20 text-ms">
                <p className="text-slate-400 me-2">Description:</p>
                <p>{task.description}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-400">{new Date(task.date).toLocaleDateString()}</p>
                <div className="flex gap-x-4 items-center">
                    <Link className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md' to={`/tasks/${task._id}`}>Edit</Link>
                    <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md' 
                        onClick={() => {
                            deleteTask(task._id)
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard