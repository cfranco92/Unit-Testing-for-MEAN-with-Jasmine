const greet = require('./../app');

var x = true;
var a = {};
var b = {};

describe('Verify that the variable is true', () => {
    it('The function greets', () => {
        expect(greet('Cristian')).toBe('Hello Cristian');
    });

    it('X is true', () => {
        expect(x).toBeTruthy();
    });

    it('Equal objects', () => {
        expect(a).toEqual(b);
    });
})