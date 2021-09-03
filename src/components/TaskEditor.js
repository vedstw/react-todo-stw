import {useState} from 'react'
import {BsCheck, FaRegThumbsDown} from "react-icons/all";

function TaskEditor({task, setEdit, onUpdate}) {
    const [text, setText] = useState(task.beschreibung)
    const update = ()=> {
        setEdit(false)
        onUpdate(task.id, text)
    }
    return (
          <form className='task'>
              <input type='text' className='wide' value={text} onChange={e=>setText(e.target.value)}/>
              <div className='icons'>
                  <FaRegThumbsDown className='red' onClick={()=>setEdit(false)}>Revert</FaRegThumbsDown>
                  <BsCheck className='green' onClick={update}>Save</BsCheck>
              </div>
          </form>
    );
}

export default TaskEditor;