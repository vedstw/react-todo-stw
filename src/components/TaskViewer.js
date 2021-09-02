import {FaTimes} from 'react-icons/fa'
import {BiPencil} from "react-icons/all";

function TaskViewer({task, toggleEdit, onDelete}) {
    return (
      <>
          {task.beschreibung}
          <div className='icons'>
            <BiPencil/>
            <FaTimes onClick={()=>onDelete(task.id)}/>
          </div>
      </>
    );
}

export default TaskViewer;