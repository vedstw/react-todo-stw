import {useState} from 'react'
import TaskViewer from "./TaskViewer";

function Task({task, onToggle, onUpdate, onDelete}) {
    const [editMode, setEditMode] = useState(false)
    return (
      <div className={`task ${task.wichtig ? 'alert' : ''}`} onDoubleClick={() => toggle(task.id)}>
          {editMode ?
              <TaskEditor task={task} toggleEdit={setEditMode} onUpdate={onUpdate}/> :
              <TaskViewer task={task} toggleEdit={setEditMode} onDelete={onDelete}/>}
      </div>
    );
}

export default Task;