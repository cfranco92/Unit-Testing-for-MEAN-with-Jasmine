const greet = name => `Hello {name}`;

console.log(greet('Cristian'));

const result = greet('Cristian');
const expected = 'Hello Cristian';

if (result === expected) {
    console.log('Successful test');
} else {
    throw new Error('Unsuccesful test');
    console.error('Unsuccesful test');
}

function expect(actual) {

    return {
        toBe(expect) {
            if (actual !== expect) {
                throw new Error ('Unsuccesful test');
            }
        }
    }
}

function it(title, callback) {
    try {
        callback();
        console.log('Succesful test');
    } catch {

    }
}