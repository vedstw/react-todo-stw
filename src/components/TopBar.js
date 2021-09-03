import React, {useState} from 'react'
import {Button, Form, FormControl, Navbar} from 'react-bootstrap'

function TopBar({addTask}) {
	const [text, setText] = useState('');
		return (
			<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
				<Navbar.Brand href="#home">Stefans To Do App</Navbar.Brand>
				<Form inline>
					<FormControl type="text" className="mr-sm-2"
								 value={text}
								 placeholder="enter new To Do"
								 onChange={e => setText(e.target.value)}
					/>
					<Button variant="outline-success" onClick={() => addTask(text)}>Add</Button>
				</Form>
			</Navbar>
		)
	}


export default TopBar;