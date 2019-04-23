import {expect} from 'chai';
import {getProcessBlockURI} from '../lib/nano-uri-generator';

describe('getProcessBlockURI', () => {
	it('should throw an error for missing block', () => {
		expect(() => { getProcessBlockURI(); }).to.throw(Error);
	});

	// TODO
});
