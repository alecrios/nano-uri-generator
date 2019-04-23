import {expect} from 'chai';
import {getImportPrivateKeyURI} from '../lib/nano-uri-generator';

describe('getImportPrivateKeyURI', () => {
	it('should throw an error for missing private key', () => {
		expect(() => { getImportPrivateKeyURI(); }).to.throw(Error);
	});

	it('should generate a URI with only private key', () => {
		const input = '18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91';
		const output = 'nanokey:18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91';

		expect(getImportPrivateKeyURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'nanokey:18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91?label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getImportPrivateKeyURI(...input)).to.eql(output);
	});
});
