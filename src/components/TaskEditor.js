import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import {BiPencil} from "react-icons/bi";

function TaskEditor({task, onToggle, onDelete}) {
    return (
      <div className={`task ${task.wichtig ? 'alert' : ''}`} onDoubleClick={() => onToggle(task.id)}>
          {task.beschreibung}
          <div className='icons'>
            <BiPencil/>
            <FaTimes />
          </div>
      </div>
    );
}

export default TaskEditor;