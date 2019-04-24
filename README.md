# Nano URI Generator

Nano URI Generator is a simple library for generating URIs for the Nano cryptocurrency in compliance with the official [URI and QR Code Standard](https://github.com/nanocurrency/nano-node/wiki/URI-and-QR-Code-Standard). It currently supports URIs for sending to an address, changing the representative to an address, importing a private key, and importing a seed.

## Installation

```
npm install nano-uri-generator
```

## Examples

Generate a URI for sending Nano to an address:

```js
import { getSendURI } from 'nano-uri-generator';

const nanoAddress = 'nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est';
const amount = '10000000000000000000000000000';
const label = 'Developer Fund';

getSendURI(nanoAddress, amount, label);
// nano:nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est?amount=10000000000000000000000000000&label=Developer%20Fund
```

Generate a URI for changing the representative to an address:

```js
import { getChangeRepURI } from 'nano-uri-generator';

const nanoAddress = 'nano_1x7biz69cem95oo7gxkrw6kzhfywq4x5dupw4z1bdzkb74dk9kpxwzjbdhhs';
const label = 'Nano Crawler Representative';

getSendURI(nanoAddress, label);
// nano:nano_1x7biz69cem95oo7gxkrw6kzhfywq4x5dupw4z1bdzkb74dk9kpxwzjbdhhs?label=Nano%20Crawler%20Representative
```

## API

### `getChangeRepURI(address[, label[, message]])`

```js
/**
 * Generates a URI for changing the representative.
 * @param {String} address The address to change the representative to.
 * @param {String} [label] The label of the representative change.
 * @param {String} [message] The message of the representative change.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for changing the representative.
 */
```

### `getImportPrivateKeyURI(privateKey[, label[, message]])`

```js
/**
 * Generates a URI for importing a private key.
 * @param {String} privateKey The private key to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @throws {Error} Private key must be defined.
 * @returns {String} The URI for importing a private key.
 */
```

### `getImportSeedURI(seed[, label[, message[, lastIndex]]])`

```js
/**
 * Generates a URI for importing a seed.
 * @param {String} seed The seed to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @param {Number|String} [lastIndex] The last index to import.
 * @throws {Error} Seed must be defined.
 * @returns {String} The URI for importing a seed.
 */
```

### `getSendURI(address[, amount[, label[, message]]])`

```js
/**
 * Generates a URI for sending.
 * @param {String} address The address to send to.
 * @param {Number|String} [amount] The amount to send (in raw).
 * @param {String} [label] The label of the transaction.
 * @param {String} [message] The message of the transaction.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for sending.
 */
```

## QR Code Generation

To convert a URI to a QR code, I recommend using a library such as [qrcode](https://github.com/soldair/node-qrcode). See the example below:

```js
import { getSendURI } from 'nano-uri-generator';
import QRCode from 'qrcode';

const uri = getSendURI('nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est');
const svg = QRCode.toString(uri, {type: 'svg'});
```

## See Also

- [Nano Address Validator](https://github.com/alecrios/nano-address-validator) - Validates Nano addresses for syntax and checksum integrity.
- [Nano Unit Converter](https://github.com/alecrios/nano-unit-converter) - Converts Nano amounts from one unit to another.
