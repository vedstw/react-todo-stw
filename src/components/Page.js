import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import TopBar from './TopBar'

function Page({children, addTask}) {
	return (
		<>
			<TopBar addTask={addTask}/>
			<br/>
			<Container>
				<Row>
					<Col/>
					<Col md={10}>{children}</Col>
					<Col/>
				</Row>
			</Container>
		</>
	);
}

export default Page;