import getQueryString from './util/getQueryString';

/**
 * Generates a URI for changing the representative.
 *
 * @param {string} address The address to change the representative to.
 * @param {string} [label] The label of the representative change.
 * @param {string} [message] The message of the representative change.
 *
 * @throws {Error} Address must be defined.
 *
 * @returns {string} The URI for changing the representative.
 */
export default function getChangeRepURI(
	address: string,
	label?: string,
	message?: string,
): string {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = getQueryString({
		label,
		message,
	});

	return `nanorep:${address}${queryString}`;
}
