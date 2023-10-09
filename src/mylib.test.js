const chai = require('chai');
const mylib = require('./mylib');
const expect = chai.expect;

describe('mylib', () => {
    it('should add two numbers', () => {
        expect(mylib.addition(5, 3)).to.equal(8);
    });

    it('should subtract two numbers', () => {
        expect(mylib.subtraction(5, 3)).to.equal(2);
    });

    it('should multiply two numbers', () => {
        expect(mylib.multiplication(5, 3)).to.equal(15);
    });
    
    it('should divide two numbers', () => {
        expect(mylib.division(16, 8)).to.equal(2);
    });
        
    it('should throw an error for zero division', () => {
        expect(() => mylib.division(5, 0).to.throw('ZeroDivisionError'));
    });
});
    

    
    
        
    
