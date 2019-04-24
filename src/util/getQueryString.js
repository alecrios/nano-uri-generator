/**
 * Generates a query string from an object.
 * @param {Object} payload The object to generate a query string from.
 * @returns {String} The query string.
 */
export default function (payload) {
	const parameters = [];

	Object.keys(payload).forEach((key) => {
		if (payload[key] === undefined) return;

		parameters.push(`${key}=${encodeURI(payload[key])}`);
	});

	return parameters.length ? `?${parameters.join('&')}` : '';
}
