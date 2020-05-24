const greet = require('./../app');

it('The function greets', () => {
    expect(greet('Cristian')).toBe('Hello Cristian');
});