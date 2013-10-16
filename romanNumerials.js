require('chai').should();
expect = require('chai').expect;

describe('Someone wants to convert a number into Roman numerial', function(){
	describe('When they enter 1', function(){
		it('Then I is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(1).should.equal('I');
		});
	});
});

var RomanNumerialGenerator = function(){
	var NUMERIAL_ONE = 'I';

	this.generate = function(){
		return NUMERIAL_ONE;
	};
};

