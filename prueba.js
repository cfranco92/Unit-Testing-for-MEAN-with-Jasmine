const greet = name => `Hello ${name}`;

console.log(greet('Cristian'));

const result = greet('Cristian');
const expected = 'Hello Cristian';

if (result === expected) {
    console.log('Successful test');
} else {
    console.log('Unsuccesful test');
}