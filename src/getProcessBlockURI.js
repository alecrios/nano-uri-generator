/**
 * Generates a URI for processing a block.
 * @param {String} block The block to process.
 * @throws {Error} Block must be defined.
 * @returns {String} The URI for processing a block.
 */
export default function (block) {
	if (block === undefined) {
		throw Error('Block must be defined.');
	}

	return `nanoblock:${encodeURI(JSON.stringify(block))}`;
}
