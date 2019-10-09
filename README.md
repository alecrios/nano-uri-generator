# Nano URI Generator

Nano URI Generator is a simple library for generating URIs for the Nano cryptocurrency. It currently supports URIs for sending to an address, changing the representative to an address, importing a private key, and importing a seed.

## URI Specifications

See the official [URI Specifications](https://docs.nano.org/integration-guides/the-basics/#uri-and-qr-code-standards) on the Nano documentation website.

## Installation

```
npm install nano-uri-generator
```

## API

``` ts
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
export declare function getChangeRepURI(address: string, label?: string, message?: string): string;
```

``` ts
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
export declare function getImportPrivateKeyURI(privateKey: string, label?: string, message?: string): string;
```

``` ts
/**
 * Generates a URI for importing a seed.
 *
 * @param {string} seed The seed to import.
 * @param {string} [label] The label of the import.
 * @param {string} [message] The message of the import.
 * @param {number | string} [lastIndex] The last index to import.
 *
 * @throws {Error} Seed must be defined.
 *
 * @returns {string} The URI for importing a seed.
 */
export declare function getImportSeedURI(seed: string, label?: string, message?: string, lastIndex?: number | string): string;
```

``` ts
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
export declare function getSendURI(address: string, amount?: number | string, label?: string, message?: string): string;
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
