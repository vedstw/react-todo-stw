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
								 placeholder="enter new to do item"
								 onChange={e => {
									 setText(e.target.value);
									 console.log(text);
								 }
								 }/>
					<Button variant="outline-success" onClick={() => addTask(text)}>Add</Button>
				</Form>
			</Navbar>
		)
	}


export default TopBar;