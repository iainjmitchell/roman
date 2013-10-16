require('chai').should();
expect = require('chai').expect;

describe('Someone wants to convert a number into Roman numerial', function(){
	describe('When they enter 1', function(){
		it('Then I is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(1).should.equal('I');
		});
	});

	describe('When they enter 5', function(){
		it('Then V is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(5).should.equal('V');
		});
	});

	describe('When they enter 10', function(){
		it('Then X is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(10).should.equal('X');
		});
	});

	describe('When they enter 2', function(){
		it('Then II is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(2).should.equal('II');
		});
	});
});

var RomanNumerialGenerator = function(){
	var NUMERIALS = {
			1 : 'I',
			2 : 'II',
			5 : 'V',
			10 : 'X'
		};

	this.generate = function(number){
		if (number === 2){
			return NUMERIALS[1] + this.generate(1);
		}
		return NUMERIALS[number];
	};
};

