import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import { motion } from 'framer-motion'
import './taskForm.css'

const buttonsVariants = {
    hover: {
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(108,163,246)"
    }
}

const TaskForm = () => {
    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext)
    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    }, [editItem])
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
            onChange={handleChange}
            value={title}
            type="text" 
            className='task-input'
            placeholder='Add task'
            required/>
            <div className='buttons'>
                <motion.button type='submit'
                className='btn add-task-btn'
                variants={buttonsVariants}
                whileHover='hover'>
                        {editItem ? 
                        'Update' : 
                        'Add Task'}
                        </motion.button>
                <motion.button 
                onClick={clearList}
                className='btn clear-btn'
                variants={buttonsVariants}
                whileHover='hover'>Clear All</motion.button>
            </div>
            
        </form>
    )
}

export default TaskForm
