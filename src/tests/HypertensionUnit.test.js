import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {calculateHypertensionClassification} from '../helpers/HypertensionHelper'

const hypertensionClassificationTests = [
	// Stage 3 Boundaries
	{input: [180, 120], expectedOutput: 'Stage 3'},
	{input: [181, 121], expectedOutput: 'Stage 3'},
	{input: [200, 140], expectedOutput: 'Stage 3'},

	// Stage 2 Boundaries (SysBP between 160 - 179, DiaBP between 100-109)
	{input: [160,100], expectedOutput: 'Stage 2'},
	{input: [179,109], expectedOutput: 'Stage 2'},
	{input: [170,104], expectedOutput: 'Stage 2'},

	// Stage 1 Boundaries (SysBP between 140 - 159, DiaBP between 90-99)
	{input: [140,90], expectedOutput: 'Stage 1'},
	{input: [159,99], expectedOutput: 'Stage 1'},
	{input: [150,94], expectedOutput: 'Stage 1'},

	// Defaults
	{input: [0,0], expectedOutput: 'No Hypertension'},
	{input: [100,100], expectedOutput: 'No Hypertension'},
	{input: [50,50], expectedOutput: 'No Hypertension'}
];

test.each(hypertensionClassificationTests)('Hypertension Classification', ({ input, expectedOutput }) => {
	const classification = calculateHypertensionClassification(input[0], input[1]);
	expect(classification).toEqual(expectedOutput);
});
