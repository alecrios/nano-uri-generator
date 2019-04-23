import {expect} from 'chai';
import {getChangeRepURI} from '../lib/nano-uri-generator';

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
