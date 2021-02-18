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
			input = input.replaceAll(n, '"' + n + '"')
		});

		// also format the ''s around the date
		input = input.replaceAll('\'', '"');

		return JSON.parse(input)
	} catch (err) {
		// fail silently
		return false;
	}
}
