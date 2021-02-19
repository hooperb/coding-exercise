// This class extends the BaseCalculator
import BaseCalculator from '../BaseCalculator/BaseCalculator';

//helpers
import {JSONFormatter} from '../../helpers/FormatHelper';
import {AnalyseInputData, AnalyseKidneyDiseaseData} from "../../helpers/KidneyDiseaseHelper";

class KidneyDiseaseCalculator extends BaseCalculator {

	constructor(props) {
		super(props);
		this.state = {
			componentName: 'kidneydisease',
			userInput: '',
			inputData: [],
			processedData: [],
			errorMessages: [],
			displayData: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({
			displayData: false,
			inputData: [],
			errorMessages: [],
			processedData: []
		});

		let inputData = JSONFormatter(this.state.userInput, ['eGFR', 'atDate']);
		let errorMessages = AnalyseInputData(inputData);
		let processedData = AnalyseKidneyDiseaseData(inputData);

		this.setState({
			inputData: inputData,
			errorMessages: errorMessages,
			processedData: processedData
		}, () => {
			if(this.state.errorMessages.length === 0){
				this.setState({
					displayData: true
				})
			}
		});
	}

	// Used as an input for the Display Table
	columns = [
		{field: 'eGFR', headerName: 'eGFR', width: 70},
		{field: 'atDate', headerName: 'Date', width: 70},
		{field: 'classification', headerName: 'Classification', width: 70},
		{field: 'dropflag', headerName: 'Drop Detected', width: 70},
	];

	render() {
		return this.generateBody();
	}
}

export default KidneyDiseaseCalculator;
