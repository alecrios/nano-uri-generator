import getQueryString from './util/getQueryString';

/**
 * Generates a URI for importing a private key.
 *
 * @param {string} privateKey The private key to import.
 * @param {string} [label] The label of the import.
 * @param {string} [message] The message of the import.
 *
 * @throws {Error} Private key must be defined.
 *
 * @returns {string} The URI for importing a private key.
 */
export default function getImportPrivateKeyURI(
	privateKey: string,
	label?: string,
	message?: string,
): string {
	if (privateKey === undefined) {
		throw Error('Private key must be defined.');
	}

	const queryString = getQueryString({
		label,
		message,
	});

	return `nanokey:${privateKey}${queryString}`;
}
