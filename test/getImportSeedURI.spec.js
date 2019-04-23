import {expect} from 'chai';
import {getImportSeedURI} from '../lib/nano-uri-generator';

describe('getImportSeedURI', () => {
	it('should throw an error for missing seed', () => {
		expect(() => { getImportSeedURI(); }).to.throw(Error);
	});

	it('should generate a URI with only seed', () => {
		const input = '18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91';
		const output = 'nanoseed:18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91';

		expect(getImportSeedURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91',
			'Lorem Ipsum',
			'Dolor sit amet',
			'15',
		];

		const output = 'nanoseed:18AB9B2C12E37DA692FDF7491C24D0E7799518248E8DDD1B0C4BF5FFBA2FBC91?label=Lorem%20Ipsum&message=Dolor%20sit%20amet&lastindex=15';

		expect(getImportSeedURI(...input)).to.eql(output);
	});
});
