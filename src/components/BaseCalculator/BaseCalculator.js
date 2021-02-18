import React from 'react';

//Styles
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

//Data display
import DataStructure from '../DataStucture/DataStructure';
import DisplayTable from '../DisplayTable/DisplayTable'


class BaseCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			inputData: [],
			processedData: [],
			errorMessages: [],
			displayData: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.clearTable = this.clearTable.bind(this);
	}

	handleChange(event) {
		this.setState({
			userInput: event.target.value
		});
	}

	clearTable() {
		this.setState({
			userInput: '',
			inputData: [],
			processedData: [],
			errorMessages: [],
			displayData: false
		});
	}

	generateBody() {
		return (
			<div className="calculator-content-container">
				<div className="left">
					<div className="data-input">
						<form className="input-form" onSubmit={this.handleSubmit}>
							<FormControl variant="outlined" className="input-container">
								<TextField
									label='Input Data'
									id='inputArray'
									type='text'
									value={this.state.userInput}
									onChange={this.handleChange}
									variant="outlined"
									multiline
									rows={6}
								/>
							</FormControl>
							<Button type='submit'>
								Submit
							</Button>
							<Button onClick={this.clearTable}>
								Clear
							</Button>
						</form>
					</div>

					{
						this.state.errorMessages.length > 0 || this.state.userInput === false ?
							<div className="error-message-container">
								<Card className="error-messages" variant="outlined">
									{
										this.state.errorMessages.map((message) =>
											<span>{message}</span>
										)
									}
								</Card>
							</div> : ''
					}

					<div className="data-structure">
						<DataStructure definition={this.state.componentName}/>
					</div>
				</div>

				<div className="right">
					{
						this.state.displayData !== false ?
							<div className="results-container">
								<DisplayTable columns={this.columns} rows={this.state.processedData}/>
							</div> :
							''
					}
				</div>
			</div>
		);
	}
}

export default BaseCalculator;
