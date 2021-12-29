import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'
import Loader from './Loader'

const TaskList = () => {
   const {tasks}= useContext(TaskListContext)
    return (
        <div>
            {tasks.length ? (
            <ul className='list'>
                {tasks.map((task) => {
                    return <Task task={task} key={task.id}/>
                })}
            </ul>
            ) : (
            <Loader/>
            )}
        </div>
    )
}

export default TaskList
