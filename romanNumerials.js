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
			5 : 'V',
			10 : 'X'
		},
		ROMAN_NUMERIALS = [
			{ number : 10, symbol : 'X'},
			{ number : 5, symbol : 'V'},
			{ number : 1, symbol : 'I'}
		];

	this.generate = function(number){
		var count = 0;
		for(count; count < ROMAN_NUMERIALS.length; count++){
			var roman_numerial = ROMAN_NUMERIALS[count];
			if (roman_numerial.number <= number){
				var nextNumber = number - roman_numerial.number;
				return roman_numerial.symbol + this.generate(nextNumber);
			}
		}
		return '';
	};
};

