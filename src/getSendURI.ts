import getQueryString from './util/getQueryString';

/**
 * Generates a URI for sending.
 *
 * @param {string} address The address to send to.
 * @param {number | string} [amount] The amount to send (in raw).
 * @param {string} [label] The label of the transaction.
 * @param {string} [message] The message of the transaction.
 *
 * @throws {Error} Address must be defined.
 *
 * @returns {string} The URI for sending.
 */
export default function getSendURI(
	address: string,
	amount?: number | string,
	label?: string,
	message?: string,
): string {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = getQueryString({
		amount,
		label,
		message,
	});

	return `nano:${address}${queryString}`;
}
