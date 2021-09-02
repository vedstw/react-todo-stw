import React from 'react'
import {Alert, Button} from 'react-bootstrap'
import CONFIGURATION from "./ConfigStore";

class VersionPanel extends React.Component {

	constructor(props) {
		super(props);
		this.key = props.key;
		this.url = CONFIGURATION.baseUrl + "/" + props.data.version;
		this.state = props.data;
		this.updateParent = props.update;
	}


	render() {
		console.log("VersionPanel.render(" + this.key + ")");
		return (
			<Alert variant={this.state.blocked ? "danger" : "success"}>
				{this.state.version}
				&nbsp;
				<Button variant="secondary" onClick={() => this.invoke("cancel")}
						disabled>{this.state.releaseDate}</Button>
				&nbsp;
				{!this.state.blocked
					? <Button variant="danger" onClick={() => this.invoke("block")}>Block</Button>
					: <Button variant="success" onClick={() => this.invoke("unblock")}>Unblock</Button>
				}
				&nbsp;
				<Button variant="primary" onClick={() => this.invokeAndUpdate("releaseNow")}>Release now</Button>
			</Alert>
		);
	}


	invoke(action) {
		var target = this.url + '/' + action;
		fetch(target, {
			method: 'POST'
		})
			.then(response => response.json())
			.then(data => this.setState(data));
	}


	invokeAndUpdate(action) {
		var target = this.url + '/' + action;
		fetch(target, {
			method: 'POST'
		})
			.then(response => response.json())
			.then(data => {
				this.setState(data);
				this.updateParent();
			});
	}

}

export default VersionPanel;
