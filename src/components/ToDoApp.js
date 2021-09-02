import {useState} from 'react'
import Page from './Page'
import Section from "./Section";
import TaskEditor from './TaskEditor'

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
	const [maxID, setMaxID] = useState(3)
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
	return (
		<Page addTask={addTask}>
			<Section title="To Do">
				{tasks.length > 0 ? tasks.map(task =>
					<TaskEditor key={task.id} task={task} onToggle={toggleWichtig} onDelete={deleteTask}/>)
					: "No tasks."}
			</Section>
		</Page>
	);
}







export default ToDoApp;