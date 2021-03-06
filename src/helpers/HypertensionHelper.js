import _ from 'lodash';
import moment from "moment";
import {compare} from "./FormatHelper";

/**
 * Validates the input data for a Hypertension classification
 *
 * Notes: SysBP & and DiaBP both must be integers (numbers), and atDate must a be valid date
 *
 * @param input - An array of objects in the form [{sysBP: 00, diaBP: 00, atData: YYYY/MM/DD}]
 *
 * @returns {array} - empty array if successful, error messages if unsuccessful
 *
 */
export const AnalyseInputData = (input) => {
	let outcome = [];
	try {
		input.forEach((current) => {
			// Check SysBP is an integer
			if(!_.isInteger(current.SysBP)) {
				outcome.push(current.SysBP + " is not a valid SysBP reading!");
			}
			// Check DiaBP is an integer
			if(!_.isInteger(current.DiaBP)) {
				outcome.push(current.DiaBP + " is not a valid DiaBP reading!");
			}
			// Check date is valid and in the form YYYY/MM/DD
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
 *
 * @param input
 * @returns {boolean|AnalyseHypertensionData.props}
 * @constructor
 */
export const AnalyseHypertensionData = (input) => {
	try {
		input.sort(compare);

		input.forEach((n) => {
			n.classification = calculateHypertensionClassification(n.SysBP, n.DiaBP);
		});
		return input
	} catch (err) {
		return false;
	}
}

/**
 * Takes the SysBP and DiaBP variables from the user input and returns a classification based on these values.
 *
 * @param SysBP - The SysBP for the current record
 * @param DiaBP - The SysBP for the current record
 *
 * @returns {string} - Returns the Hypertension classification for the given SysBP and DiaBP fields
 */
export const calculateHypertensionClassification = (SysBP, DiaBP) => {
	if((SysBP >= 180) && (DiaBP >= 120)) {
		return "Stage 3";
	} else if (((180 > SysBP) && (SysBP >= 160)) && ((110 > DiaBP) && (DiaBP >= 100))) {
		return "Stage 2";
	} else if (((160 > SysBP) && (SysBP  >= 140)) && ((100 > DiaBP) && (DiaBP >= 90))) {
		return "Stage 1";
	} else {
		return "No Hypertension";
	}
}
