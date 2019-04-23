import queryStringConverter from 'js-query-string';

/**
 * Generates a URI for sending.
 * @param {String} address The address to send to.
 * @param {Number|String} [amount] The amount to send (in raw).
 * @param {String} [label] The label of the transaction.
 * @param {String} [message] The message of the transaction.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for sending.
 */
export default function (address, amount, label, message) {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = queryStringConverter.convert({
		amount,
		label,
		message,
	});

	return `nano:${address}${queryString}`;
}
