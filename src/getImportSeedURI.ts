import getQueryString from './util/getQueryString';

/**
 * Generates a URI for importing a seed.
 *
 * @param {string} seed The seed to import.
 * @param {string} [label] The label of the import.
 * @param {string} [message] The message of the import.
 * @param {number | string} [lastIndex] The last index to import.
 *
 * @throws {Error} Seed must be defined.
 *
 * @returns {string} The URI for importing a seed.
 */
export default function getImportSeedURI(
	seed: string,
	label?: string,
	message?: string,
	lastIndex?: number | string,
): string {
	if (seed === undefined) {
		throw Error('Seed must be defined.');
	}

	const queryString = getQueryString({
		label,
		message,
		lastindex: lastIndex,
	});

	return `nanoseed:${seed}${queryString}`;
}
