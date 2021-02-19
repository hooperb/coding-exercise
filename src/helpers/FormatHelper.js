/**
 * Takes the input from the user and returns it in an JSON array
 *
 * @param input - the user input
 * @param strToReplace - an array of strings to replace in the object
 *
 * @returns {boolean|any} if conversion is successful, returns a JSON array of the user input,
 * 			false otherwise.
 */
export const JSONFormatter = (input, strToReplace) => {
	try {
		strToReplace.forEach((n) => {
			input = replaceStrings(input, n, '"' + n + '"');
		});

		// also format the ''s around the date
		input = replaceStrings(input, '\'', '"');
		return JSON.parse(input)
	} catch (err) {
		return false;
	}
}

/**
 * Had to build this function for testing as Node doesn't support replaceAll JS function that browsers do
 *
 * @param input - string
 * @param find - find this in input
 * @param replace - replace find with this
 */
function replaceStrings(input, find, replace) {
	return input.split(find).join(replace)
}

/**
 * Compare function used to sort array data by atDate variable
 */
export function compare( a, b ) {
	if ( a.atDate < b.atDate ){
		return -1;
	}
	if ( a.atDate > b.atDate ){
		return 1;
	}
	return 0;
}
