import {expect} from 'chai';
import {getSendURI} from '../lib/nano-uri-generator';

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
