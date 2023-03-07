import React from 'react'
import { useContext } from "react";
import { todoContext } from "../Context/context.js";

const TaskCounter = () => {
    const { taskNumber,isComplete} = useContext(todoContext);




  return (
 <div className='conterWraper'>
        <p>You have {taskNumber} {taskNumber <= 1 ?"task" :"tasks"}</p>
        <p>{isComplete} {isComplete <= 1 ?"task is completed " :"tasks are completed"}</p>
        </div>
  )
}

export default TaskCounter

