import moment from "moment";

import {compare} from "./FormatHelper";

/**
 * Ensures that the incoming data object has the correct data types
 *
 * @param input - the data to be verified
 * @returns [] - an empty array if successful, an array of error messages otherwise
 *
 */
export const AnalyseInputData = (input) => {
	let outcome = [];
	try {
		input.forEach((current) => {
			if(typeof(current.eGFR) !== 'number') {
				outcome.push(current.eGFR + " is not a valid eGFR reading!");
			}
			if(!moment(current.atDate, 'YYYY/MM/DD',true).isValid()){
				outcome.push(current.atDate + " is not a valid Date!");
			}
		})
	} catch (err) {
		return ["There's an issue with the data you input. Please make sure it's in the correct input format, detailed below."]
	}
	return outcome;
}

/**
 * A function that loops through the input array and returns a new object if classified properly, false otherwise
 *
 * @param input - the user input data
 * @returns {AnalyseKidneyDiseaseData.props|boolean}
 * @constructor
 */
export const AnalyseKidneyDiseaseData = (input) => {
	try {
		//sort the input by date
		input.sort(compare);

		let last = 0;

		input.forEach((n) => {
			let percent = getPercentageChange(last, n.eGFR);
			percent >= 20 ? n.dropflag = percent.toFixed(2) + '% drop detected since previous test' : n.dropflag = '';
			n.classification = calculateKidneyDiseaseClassification(n.eGFR);

			last = n.eGFR;
		});

		return input
	} catch (err) {
		return false;
	}
}

/**
 * Calculates in percent, the change between 2 numbers.
 * e.g from 1000 to 500 = 50%
 *
 * @param oldNumber The initial value
 * @param newNumber The value that changed
 */
function getPercentageChange(oldNumber, newNumber){
	var decreaseValue = oldNumber - newNumber;

	return (decreaseValue / oldNumber) * 100;
}

/**
 * Takes the eGFR value and returns a classification
 *
 * @param eGFR - The eGFR classification to be determined
 * @returns {string} - The classification
 */
export const calculateKidneyDiseaseClassification = (eGFR) => {
	if(eGFR >= 90) {
		return "Normal";
	} else if (89 >= eGFR && eGFR >= 60) {
		return "Mildly Decreased"
	} else if (59 >= eGFR && eGFR >= 45 ) {
		return "Mild to Moderate";
	} else if (44 >= eGFR && eGFR >= 30) {
		return "Moderate to Severe";
	} else if (29 >= eGFR && eGFR >= 15) {
		return "Severely Decreased"
	} else {
		return "Kidney Failure";
	}
}
