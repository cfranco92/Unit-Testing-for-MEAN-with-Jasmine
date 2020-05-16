const it = require('./framework').it;
const expect = require('./framework').expect;
const greet = require('./app');

it('The function greets', () => {
    expect(greet('Cristian')).toBe('Hello Cristian');
});