import { useEffect } from 'react';
import { useTasks } from '../context/TasksContext.jsx';
import TaskCard from '../components/TaskCard.jsx';

import '../styles/pagesStyles/TaskPage.css'

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if(tasks.length === 0) return (<h1>You don't have tasks</h1>)
    
    return (
        <div className='taskContainer'>
            {tasks.map((task) => (
                <TaskCard task={task} key={task._id}/>
            ))
            }
        </div>
    )
    
    
}

export default TasksPage