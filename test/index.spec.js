const { expect } = require('chai');
const {
	getChangeRepURI,
	getImportPrivateKeyURI,
	getImportSeedURI,
	getSendURI,
} = require('../dist/nano-uri-generator');

describe('getChangeRepURI', () => {
	it('should throw an error for missing address', () => {
		expect(() => { getChangeRepURI(); }).to.throw(Error);
	});

	it('should generate a URI with only address', () => {
		const input = 'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3';
		const output = 'nanorep:nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3';

		expect(getChangeRepURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'nanorep:nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3?label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getChangeRepURI(...input)).to.eql(output);
	});
});

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

describe('getSendURI', () => {
	it('should throw an error for missing address', () => {
		expect(() => { getSendURI(); }).to.throw(Error);
	});

	it('should generate a URI with only address', () => {
		const input = 'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3';
		const output = 'nano:nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3';

		expect(getSendURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
			'1000000000',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'nano:nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3?amount=1000000000&label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getSendURI(...input)).to.eql(output);
	});
});
