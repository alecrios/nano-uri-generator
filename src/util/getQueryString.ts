/**
 * Generates a query string from an object.
 *
 * @param {object} payload The object to generate a query string from.
 *
 * @returns {string} The query string.
 */
export default function getQueryString(payload: object): string {
	const parameters = [];

	Object.keys(payload).forEach((key) => {
		if (payload[key] === undefined) return;

		parameters.push(`${key}=${encodeURI(payload[key])}`);
	});

	return parameters.length ? `?${parameters.join('&')}` : '';
}
