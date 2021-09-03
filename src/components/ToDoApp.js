import {useState} from 'react'
import Page from './Page'
import Section from "./Section";
import Task from './Task'

const initialTasks = [
		{
			id: 1,
			beschreibung: 'Überweisung abholen',
			wichtig: true
		},
		{
			id: 2,
			beschreibung: 'Kuchen backen für Almutes Geburtstag',
			wichtig: true
		},
		{
			id: 3,
			beschreibung: 'Kaffee kaufen',
			wichtig: false
		}
	];

function ToDoApp() {
	const [tasks, setTasks] = useState(initialTasks)
	const [maxID, setMaxID] = useState(tasks.length)
	const toggleWichtig = (clicked) => setTasks(tasks.map(task => task.id === clicked ? {...task, wichtig: !task.wichtig} : task))
	const deleteTask = (clicked) => setTasks(tasks.filter((task => task.id !== clicked)))
	const createID = () => {
		const newID = maxID+1
		setMaxID(newID)
		return newID
	}
	const addTask = (beschreibung) =>  {
		console.log('new task: ' + beschreibung)
		tasks.push({
			id: createID(),
			beschreibung: beschreibung,
			wichtig: false
		})
		setTasks(tasks)
	}
	const updateTask = (changedID, newText) => {
		console.log('update ' + changedID + ': ' + newText)
		setTasks(tasks.map(task => task.id === changedID ? {...task, beschreibung: newText} : task))
	}
	return (
		<Page addTask={addTask}>
			<Section title="To Do">
				{tasks.length > 0 ? tasks.map(task =>
					<Task key={task.id} task={task} toggleImportant={toggleWichtig} onUpdate={updateTask} onDelete={deleteTask}/>)
					: "No tasks."}
			</Section>
		</Page>
	);
}







export default ToDoApp;