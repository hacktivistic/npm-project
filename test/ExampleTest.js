'use strict'

var expect = require('chai').expect;

var exampleFunction = require('../src/Example')

describe('Example Test', () => {

	it('should test example function', () => {

		var expected = 'This is an example function'
		expect(exampleFunction()).to.equal(expected);

	});

});
