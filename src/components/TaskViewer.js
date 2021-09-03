import {BiEdit, ImBin} from "react-icons/all";

function TaskViewer({task, toggleImportant, onDelete, setEdit}) {
    const erase = () => {
        console.log('delete ' + task.id)
        onDelete(task.id)
    }
    return (
        <div className={`task ${task.wichtig ? 'alert' : ''}`} onDoubleClick={() => toggleImportant(task.id)}>
            {task.beschreibung}
            <div  className='icons'>
                <BiEdit className='gray' onClick={()=>setEdit(true)}/>
                <ImBin  className='gray' onClick={erase}/>
            </div>
        </div>
    );
}

export default TaskViewer;