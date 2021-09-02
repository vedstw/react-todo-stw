import {Jumbotron} from 'react-bootstrap'


function Section(props) {
	return (
		<Jumbotron>
			<h2>{props.title}</h2>
			{props.children}
		</Jumbotron>
	);
}

export default Section;
