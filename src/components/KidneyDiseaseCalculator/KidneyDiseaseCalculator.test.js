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

test.each(inputFormatTests)('Incorrect Format Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
	expect(convertedInput).toEqual(expectedOutput);
});

const incorrectDataTypesTests = [
	// Correct input data with invalid data types
	{input: '[{eGFR: 91, atDate: \'yesterday\' }]', expectedOutput: ['yesterday is not a valid Date!']},
	//{input: '[{eGFR: NaN, atDate: \'2020/02/01\' }]', expectedOutput: ['91.3.3 is not a valid eGFR reading!']},
];

test.each(incorrectDataTypesTests)('Incorrect Data Types Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
	let errorMessages = AnalyseInputData(convertedInput);
	expect(errorMessages).toEqual(expectedOutput);
});

const correctDataTests = [
	{input: '', expectedOutput: ''},
	{input: '', expectedOutput: ''},
];

// test.each(correctDataTests)('Correct Data Tests', ({input, expectedOutput}) => {
// 	const convertedInput = JSONFormatter(input, ['eGFR', 'atDate']);
// 	const processedData = AnalyseKidneyDiseaseData(convertedInput);
//
// 	expect(processedData).toEqual(expectedOutput);
// });
