import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {calculateKidneyDiseaseClassification} from '../helpers/KidneyDiseaseHelper';

const kidneyDiseaseClassificationTests = [
	// Normal (90+)
	{input: 90, expectedOutput: 'Normal'},
	{input: 91.2, expectedOutput: 'Normal'},

	// Mildly Decreased (89 >= eGFR >= 60)
	{input: 89, expectedOutput: 'Mildly Decreased'},
	{input: 60, expectedOutput: 'Mildly Decreased'},
	{input: 70.1, expectedOutput: 'Mildly Decreased'},

	// Mild to Moderate (59 >= eGFR >= 45)
	{input: 59, expectedOutput: 'Mild to Moderate'},
	{input: 45, expectedOutput: 'Mild to Moderate'},
	{input: 52.5, expectedOutput: 'Mild to Moderate'},

	//Moderate to Severe (44 >= eGFR >= 30)
	{input: 44, expectedOutput: 'Moderate to Severe'},
	{input: 30, expectedOutput: 'Moderate to Severe'},
	{input: 37.6, expectedOutput: 'Moderate to Severe'},

	//Severely Decreased (29 >= eGFR >= 15)
	{input: 29, expectedOutput: 'Severely Decreased'},
	{input: 15, expectedOutput: 'Severely Decreased'},
	{input: 22.5, expectedOutput: 'Severely Decreased'},

	// Kidney Failure (less than 15)
	{input: 14, expectedOutput: 'Kidney Failure'},
	{input: 7.2, expectedOutput: 'Kidney Failure'},
	{input: 0, expectedOutput: 'Kidney Failure'}
];

test.each(kidneyDiseaseClassificationTests)('Kidney Disease Classification', ({ input, expectedOutput }) => {
	const classification = calculateKidneyDiseaseClassification(input);
	expect(classification).toEqual(expectedOutput);
});
