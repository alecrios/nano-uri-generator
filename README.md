# Nano URI Generator

Nano URI Generator is a simple library for generating URIs for the Nano cryptocurrency. It currently supports URIs for sending to an address, changing the representative to an address, importing a private key, and importing a seed.

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

TODO.

## QR Code Generation

TODO.
