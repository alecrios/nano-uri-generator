import queryStringConverter from 'js-query-string';

/**
 * Generates a URI for importing a seed.
 * @param {String} seed The seed to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @param {Number|String} [lastIndex] The last index to import.
 * @throws {Error} Seed must be defined.
 * @returns {String} The URI for importing a seed.
 */
export default function (seed, label, message, lastIndex) {
	if (seed === undefined) {
		throw Error('Seed must be defined.');
	}

	const queryString = queryStringConverter.convert({
		label,
		message,
		lastindex: lastIndex,
	});

	return `nanoseed:${seed}${queryString}`;
}
