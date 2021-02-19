import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {JSONFormatter} from "../../helpers/FormatHelper";
import {AnalyseHypertensionData, AnalyseInputData} from "../../helpers/HypertensionHelper";

// As most of the functionality for the Hypertension Calculator is a combination of
// helper functions, this class primarily tests them using the same data structures and input formats
const inputFormatTests = [
	// Incorrect input data (won't get past JSONFormatter function return, so false expected)
	{input: '[{SysBP:twenty, DiaBP:110}]', expectedOutput: false},
	{input: '[{SysBP:120, DiaBP:41, atDate:2020/04/21}, {SysBP:110, DiaBP:105, atDate:\'2019/04/21\'}]', expectedOutput: false},
	{input: '[{SysBP:120, atDate:\'yesterday\'}, {SysBP:110, DiaBP:105, atDate:2019/04/21}]', expectedOutput: false},
];

test.each(inputFormatTests)('Hypertension Incorrect Format Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['SysBP', 'DiaBP', 'atDate']);
	expect(convertedInput).toEqual(expectedOutput);
});

const incorrectDataTypesTests = [
	// Correct input data with invalid single data types
	{input: "[{SysBP: 4.1, DiaBP:110, atDate:'2020/04/21'}]", expectedOutput: ['4.1 is not a valid SysBP reading!']},
	{input: '[{SysBP: 90, DiaBP:4.1, atDate:\'2020/04/21\'}]', expectedOutput: ['4.1 is not a valid DiaBP reading!']},
	{input: '[{SysBP: 90, DiaBP:110, atDate:\'yesterday\'}]', expectedOutput: ['yesterday is not a valid Date!']},
];

test.each(incorrectDataTypesTests)('Hypertension Incorrect Data Types Tests', ({ input, expectedOutput }) => {
	const convertedInput = JSONFormatter(input, ['SysBP', 'DiaBP', 'atDate']);
	let errorMessages = AnalyseInputData(convertedInput);
	expect(errorMessages).toEqual(expectedOutput);
});

const correctDataTests = [
	// Correct input data format with correct data
	{input: '[{SysBP:120, DiaBP:110, atDate:\'2020/04/21\'}]',
		expectedOutput: [{SysBP: 120, DiaBP: 110, atDate: "2020/04/21", classification: "No Hypertension"}]
	},
	{input: '[{SysBP:120, DiaBP:110, atDate:\'2020/04/21\'}, {SysBP:110, DiaBP:105, atDate:\'2019/04/21\'}]',
		expectedOutput: [
			{SysBP: 110, DiaBP: 105, atDate: "2019/04/21", classification: "No Hypertension"},
			{SysBP: 120, DiaBP: 110, atDate: "2020/04/21", classification: "No Hypertension"}
		]
	},
];

test.each(correctDataTests)('Hypertension Correct Data Tests', ({input, expectedOutput}) => {
	const convertedInput = JSONFormatter(input, ['SysBP', 'DiaBP', 'atDate']);
	const processedData = AnalyseHypertensionData(convertedInput);
	expect(processedData).toEqual(expectedOutput);
});
