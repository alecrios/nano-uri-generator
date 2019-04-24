import getQueryString from './util/getQueryString';

/**
 * Generates a URI for importing a private key.
 * @param {String} privateKey The private key to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @throws {Error} Private key must be defined.
 * @returns {String} The URI for importing a private key.
 */
export default function (privateKey, label, message) {
	if (privateKey === undefined) {
		throw Error('Private key must be defined.');
	}

	const queryString = getQueryString({
		label,
		message,
	});

	return `nanokey:${privateKey}${queryString}`;
}
