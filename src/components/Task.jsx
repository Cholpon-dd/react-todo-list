import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { motion } from 'framer-motion'
import './task.css'

const listVariants = {
    hidden: {
        y: -250
    },
    visible: {
        y: -10,
        transition: {
            delay: 0.2, 
            type: 'tween'
        } 
    }
}

const taskTitleVariants = {
    hover: {
        scale: 1.3, 
        originX:0, 
        color:'#660066'
  }
}


const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext)
    return (
        <motion.li className='list-item'
        variants={listVariants}
        initial='hidden'
        animate='visible'
        >
            <motion.span
            variants={taskTitleVariants}
            whileHover='hover'
            >{task.title}</motion.span>
            <motion.div className='icons'
            whileHover={{scale: 1.2}}>
                <AiOutlineCloseCircle
                 onClick={() => removeTask(task.id)}
                className='delete-icon'
                 />
                <AiOutlineEdit
                 onClick={() => findItem(task.id)}
                 className='edit-icon'/>
            </motion.div>
        </motion.li>
    )
}

export default Task
