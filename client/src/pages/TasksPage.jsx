import { useEffect } from 'react';
import { useTasks } from '../context/TasksContext.jsx';
import { Link } from 'react-router-dom'
import TaskCard from '../components/TaskCard.jsx';

import '../styles/pagesStyles/TaskPage.css'

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if(tasks.length === 0) return (
        <>
            <Link to='/add-task' className='addTaskButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="addTaskIcon" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add task
            </Link>
            <h1>You don't have tasks</h1>
        </>
        )
    
    return (
        <>
            <div className='addTaskContainer'>
                <Link to='/add-task' className='addTaskButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="addTaskIcon" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Add task
                </Link>
            </div>
            <div className='taskContainer'>
                {tasks.map((task) => (
                    <TaskCard task={task} key={task._id}/>
                ))
                }
            </div>
        </>
    )
    
    
}

export default TasksPage