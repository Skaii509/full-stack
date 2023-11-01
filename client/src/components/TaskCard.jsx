import { useTasks } from "../context/TasksContext";
import { Link } from 'react-router-dom'

import '../styles/components/TaskCard.css'

function TaskCard ({ task }) {

    const { deleteTask } = useTasks();

    return (
        <div className="card">
            <h1 className="cardTitle">{task.title}</h1>
            <div className="cardDescription">
                <p className="cardDescriptionTitle">Description:</p>
                <p className="cardDescriptionText">{task.description}</p>
            </div>
            <div className="cardFooter">
                <p className="cardDate">{new Date(task.date).toLocaleDateString()}</p>
                <div className="cardFooterButtons">
                    <Link className='cardFooterButtonEdit' to={`/tasks/${task._id}`}>Edit</Link>
                    <button className='cardFooterButtonDelete' 
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