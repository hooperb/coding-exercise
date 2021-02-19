// This class extends the BaseCalculator
import BaseCalculator from '../BaseCalculator/BaseCalculator';

//helpers
import {JSONFormatter} from '../../helpers/FormatHelper';
import {AnalyseInputData, AnalyseHypertensionData} from '../../helpers/HyperTensionHelper'

class HypertensionCalculator extends BaseCalculator {

	constructor(props) {
		super(props);
		this.state = {
			componentName: 'hypertension',
			userInput: '',
			inputData: [],
			processedData: [],
			errorMessages: [],
			displayData: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		console.log(this.state.userInput);

		this.setState({
			displayData: false,
			inputData: [],
			errorMessages: [],
			processedData: [],
		});

		let inputData = JSONFormatter(this.state.userInput, ['SysBP', 'DiaBP', 'atDate']);
		let errorMessages = AnalyseInputData(inputData);
		let processedData = AnalyseHypertensionData(inputData);

		this.setState({
			inputData: inputData,
			errorMessages: errorMessages,
			processedData: processedData
		}, () => {
			if(this.state.errorMessages.length === 0){
				this.setState({
					displayData: true
				});
			}
		});
	}

	// Used as an input for the Display Table
	columns = [
		{ field: 'SysBP', headerName: 'SysBP', width: 70 },
		{ field: 'DiaBP', headerName: 'DiaBP', width: 70},
		{ field: 'atDate', headerName: 'Date', width: 70},
		{ field: 'classification', headerName: 'Classification', width: 70}
	];

	render() {
		return this.generateBody();
	}
}

export default HypertensionCalculator;
