import React from 'react'
import { useContext } from "react";
import { todoContext } from "../Context/context.js";

const TaskCounter = () => {
    const { taskNumber,isComplete} = useContext(todoContext);




  return (
 <div className='conterWraper'>
        <p>You have {taskNumber} tasks</p>
        <p>{isComplete} tasks is completed</p>
        </div>
  )
}

export default TaskCounter