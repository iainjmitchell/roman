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

	describe('When they enter 4', function(){
		it('Then IV is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			romanNumerialGenerator.generate(4).should.equal('IV');
		});
	});

	describe('When they enter 0', function(){
		it('Then error is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			expect(function(){
				romanNumerialGenerator.generate(0);
			}).to.throw(InvalidNumberError);
		});
	});

	describe('When they enter -1', function(){
		it('Then error is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			expect(function(){
				romanNumerialGenerator.generate(-1);
			}).to.throw(InvalidNumberError);
		});
	});

	describe('When they enter 4000', function(){
		it('Then error is returned', function(){
			var romanNumerialGenerator = new RomanNumerialGenerator();
			expect(function(){
				romanNumerialGenerator.generate(4000);
			}).to.throw(InvalidNumberError);
		});
	});
});

var RomanNumerialGenerator = function(){
	var validNumber = new ValidNumberSpecification(),
		romanNumerials = new RomanNumerialRepository();

	this.generate = function(number){
		if (!validNumber.isSatisfiedBy(number)){
			throw new InvalidNumberError();
		}
		return generateNumerial(number);
	};

	function generateNumerial(number){
		var romanNumerial = romanNumerials.findHighestFor(number);
		if (romanNumerial){
			var nextNumber = number - romanNumerial.number;
			return romanNumerial.symbol + generateNumerial(nextNumber);
		}
		return '';
	}
};

var RomanNumerialRepository = function(){
	var ROMAN_NUMERIALS = [
			{ number : 10, symbol : 'X'},
			{ number : 5, symbol : 'V'},
			{ number : 4, symbol : 'IV'},
			{ number : 1, symbol : 'I'}
		];

	this.findHighestFor = function(number){
		var count = 0;
		for(count; count < ROMAN_NUMERIALS.length; count++){
			var romanNumerial = ROMAN_NUMERIALS[count];
			if (romanNumerial.number <= number){
				return romanNumerial;
			}
		}
	}
};

var ValidNumberSpecification = function(){
	this.isSatisfiedBy = function(number){
		return (number > 0 && number < 4000);
	};
};

var InvalidNumberError = function(){
};



