import {useState} from 'react'
import TaskViewer from "./TaskViewer";
import TaskEditor from "./TaskEditor";

function Task({task, toggleImportant, onUpdate, onDelete}) {
    const [editMode, setEditMode] = useState(false)
    return (
      <div>
          {editMode ?
              <TaskEditor task={task} setEdit={setEditMode} onUpdate={onUpdate}/> :
              <TaskViewer task={task} setEdit={setEditMode} onDelete={onDelete} toggleImportant={toggleImportant}/>}
      </div>
    );
}

export default Task;