import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {JSONFormatter} from "../../helpers/FormatHelper";
import {AnalyseKidneyDiseaseData, AnalyseInputData} from "../../helpers/KidneyDiseaseHelper";

// As most of the functionality for the Kidney Disease Calculator is a combination of
// helper functions, this class primarily tests them using the same data structures

const inputFormatTests = [
	// Incorrect input data
	{input: '[{eGFR 85.2, atDate: \'2020/02/01\' }]', expectedOutput: false},
	{input: '[{eGFR 85.2, atDate: 2020/01/25 }]', expectedOutput: false},
];

test.each(inputFormatTests)('Kidney Disease Incorrect Format Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
	expect(convertedInput).toEqual(expectedOutput);
});

const incorrectDataTypesTests = [
	// Correct input data with invalid data types
	{input: '[{eGFR: 91, atDate: \'yesterday\' }]', expectedOutput: ['yesterday is not a valid Date!']},
	{input: '[{eGFR: \'44\'\, atDate: \'2020/02/01\' }]', expectedOutput: ['44 is not a valid eGFR reading!']},
];

test.each(incorrectDataTypesTests)('Kidney Disease Incorrect Data Types Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
	let errorMessages = AnalyseInputData(convertedInput);
	expect(errorMessages).toEqual(expectedOutput);
});

const correctDataTests = [
	{input: '[{eGFR: 65, atDate: \'2020/04/05\' }]',
		expectedOutput: [{eGFR: 65, atDate: "2020/04/05", dropflag: "", classification: "Mildly Decreased"}]
	},
	{input: '[{eGFR: 91, atDate: \'2020/04/05\' },{eGFR: 35, atDate: \'2020/08/01\' }]',
		expectedOutput: [
			{eGFR: 91, atDate: "2020/04/05", dropflag: "", classification: "Normal"},
			{eGFR: 35, atDate: "2020/08/01", dropflag: "20%+ Drop Detected since previous test", classification: "Moderate to Severe"}
		]
	},
	{input: '[{eGFR: 86, atDate: \'2020/04/05\' },{eGFR: 67.0, atDate: \'2020/08/01\' }, {eGFR: 66, atDate: \'2020/09/01\' }]',
		expectedOutput: [
			{eGFR: 86, atDate: "2020/04/05", dropflag: "", classification: "Mildly Decreased"},
			{eGFR: 67, atDate: "2020/08/01", dropflag: "20%+ Drop Detected since previous test", classification: "Mildly Decreased"},
			{eGFR: 66, atDate: "2020/09/01", dropflag: "", classification: "Mildly Decreased"}
		]
	},
];
test.each(correctDataTests)('Kidney Disease Correct Data Tests', ({input, expectedOutput}) => {
	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
	const processedData = AnalyseKidneyDiseaseData(convertedInput);
	expect(processedData).toEqual(expectedOutput);
});
