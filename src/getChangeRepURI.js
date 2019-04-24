import getQueryString from './util/getQueryString';

/**
 * Generates a URI for changing the representative.
 * @param {String} address The address to change the representative to.
 * @param {String} [label] The label of the representative change.
 * @param {String} [message] The message of the representative change.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for changing the representative.
 */
export default function (address, label, message) {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = getQueryString({
		label,
		message,
	});

	return `nanorep:${address}${queryString}`;
}
