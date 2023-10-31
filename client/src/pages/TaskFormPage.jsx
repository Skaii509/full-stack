import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

import '../styles/pagesStyles/TaskFormPage.css'

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navegate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask () {
            if(params.id){
                const task = await getTask(params.id);
                setValue('title', task.title)
                setValue('description', task.description)
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            updateTask(params.id, data)
        } else {
            createTask(data);
        }

        navegate('/tasks');
    })

    return (
        <div className='divTaskForm'>
            <div className='taskFormContainer'>
                <form onSubmit={onSubmit}>
                    <h1 className='newTaskTitle'>New Task</h1>
                    <input type="text" placeholder="Title" 
                        {... register('title')}
                        className='titleInput'
                        autoFocus
                    />
                    <textarea rows="3" placeholder="Description"
                        {... register('description')}
                        className='descriptionInput'
                    ></textarea>
                    <div className='buttonsDiv'>
                        <button className='taskSendButton'>
                            Save
                        </button>
                        <Link className='taskCancelButton' to='/tasks'>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage