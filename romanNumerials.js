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
	var ROMAN_NUMERIALS = [
			{ number : 10, symbol : 'X'},
			{ number : 5, symbol : 'V'},
			{ number : 1, symbol : 'I'}
		];

	this.generate = function(number){
		var romanNumerial = findHighestRomanNumerial(number);
		if (romanNumerial){
			var nextNumber = number - romanNumerial.number;
			return romanNumerial.symbol + this.generate(nextNumber);
		}
		return '';
	};

	function findHighestRomanNumerial(number){
		var count = 0;
		for(count; count < ROMAN_NUMERIALS.length; count++){
			var romanNumerial = ROMAN_NUMERIALS[count];
			if (romanNumerial.number <= number){
				return romanNumerial;
			}
		}
	}
};



