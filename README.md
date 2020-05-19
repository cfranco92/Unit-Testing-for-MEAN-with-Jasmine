# Unit-Testing-for-MEAN-with-Jasmine
Unit Testing for MEAN with Jasmine

# What are unit tests?
Unit tests or Unit testing are part of the different procedures that can be carried out within the agile methodology; code that is used to test other code. Small tests created specifically to cover all the requirements of the code and verify its results.

## What are unit tests for?
* Safety net: Prevent unexpected changes in our applications by members of our team or even ourselves.
* Code quality: Continuous improvement of our code. We can review and improve old code or contemplate use cases that we did not take into account when starting development.
* Reduce costs: Prevention and detection of errors at an early age, before they can get out of control.

# Why do unit tests?
Productivity, value generated, budget, time, are considered the most important variables in any type of project. If you ask the business owner, the budget will be the main thing. If you talk to the product owner, productivity and value added will be his focus. If you talk to the client, time is probably the most important thing. That is why it is worth asking ourselves, should we reserve a space for creating unit tests?

Creating unit tests involves creating a parallel application that allows us to run and test our base code. That is, depending on the skills of the programmer, the time dedicated to its creation can be equal to or in some cases greater than the time spent writing the solution.

Let's see this with an example. Imagine that a company is tasked with creating a form to register conference attendees. As the budget is tight, the development group decides to create the solution without a test system. The first phase of the project was a "success". The testing team encounters a problem with the form validations and a console error due to a data type. The development team solves the problem and the product can finally be delivered.

From the previous situation we can analyze the following:

1. Although the first delivery of the product was successful, the lack of an alert system during development time meant that errors related to data types were only detected during quality tests.

2. The application required a new development cycle to fix the problem.

3. Due to the size of the application, making changes will be quite fast.

Now, suppose that same system is used for another client, but this time an authentication system must be added. A person from the team decides to leave the company. The development process was successful. The estimated time was increased. Again, no test system was created. Two rounds of additional testing and development were required to deliver the product.

Let's analyze the previous situation:

1. The project was delayed due to the departure and learning process of the new developer.

2. Again, there was no testing system in the application.

3. Two rounds of testing and development were carried out in addition to what was planned.

What can you conclude from these situations? How could you improve the development process of this application? As you can imagine, one of the things that could be improved would be the implementation of a test system. However, how can unit tests help you in your development?

## Unit tests
Let's start with the definition. Unit tests are nothing more than a program that allows us to test our base code. In other words, unit testing involves the creation of small code extracts that will execute all the lines within a function, so that its behavior can be verified.

The time spent creating the unit tests should be included during the development phase, so that the solution and tests related to the problem can be created at the same time.

## What are unit tests for?
Unit tests serve to:
1. Safety Net: Every time you create a unit test, you analyze the code in small parts, therefore, it is possible to create an alert system for future changes in the code.

2. Documentation: Because we have an application that will execute the lines of code in our program, it is the perfect time to document and verify what we hope will happen. That is, we are going to explain our code, showing how they should be used.

3. Code quality: During the process of creating unit tests, in addition to detecting errors, it is the ideal time to improve the solution or apply better design patterns to our code.

4. Cost reduction: All of the above points will help with cost reduction. Having adequate documentation will help us with future modifications to the code or the incorporation of new developers to the project. The safety net and the quality in the code will allow early error detection, therefore, it will prevent you from falling behind in deliveries.

## Conclusions
Incorporating unit tests into a project is one of the best decisions you can make. You should bear in mind that the tests will not only help you reduce costs, they are created with the purpose of helping us between developers during the code creation process.

Counting a test set can take time at first, but with practice it will be intuitive and fast. The concepts learned during this course will be useful to you not only for tests created using Jasmine.

# First unit test in JavaScript
Unit testing features:
* Although the results must be specific to each unit test developed, the results can be automated, so that we can do the tests individually or in groups.
* Small constant process test on part of the code, but in the end, it must be verified in its entirety.
* In the case of repeating the tests individually or in groups, the result must always be the same, giving the same order in which the tests are performed, the tests are stored to be able to perform these repetitions or to be able to use them on other occasions.
* It is an isolated code that has been created with the mission of verifying other very specific code, it does not interfere with the work of other developers.
* Despite what many developers think, unit testing code should take no more than 5 minutes to create, they are meant to get the job done faster.

# The expect() and it() functions
Runtime errors also result in a new Error object being created and launched.

Error objects are normally created with the intention of throwing them using throw. It is possible to handle the error using try catch:
```javascript
try {
     throw new Error ("Something went wrong!");
} catch (e) {
     alert ("Well done");
}
```
The it () function defines a jasmine test. It's called that because its name makes reading tests almost like reading in English.

The second argument to the it () function is itself a function, which when executed will probably execute a number of _expect () functions.

The expect () functions are used to actually test the things you "expect" to be true.

# Organizing the code to run on the web
The term refactoring is often used to describe modifying source code without changing its behavior, which is informally known for cleaning code.

Refactoring is the part of code maintenance that doesn't fix bugs or add functionality. The objective, on the contrary, is to improve the ease of understanding the code or change its structure and design and eliminate dead code, to facilitate future maintenance.

Adding new behavior to a program can be difficult with the given program structure, so a developer can refactor it first to facilitate this task and then add the new behavior.

# Organizing code to run using nodejs
Node.js is an open source, cross-platform, runtime environment for the server layer (but not limited to it) based on the ECMAScript programming language

It was created with the focus of being useful in creating highly scalable network programs, such as web servers.

Example of a hello world of an HTTP server written in Node.js:
```javascript
const http = require ('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer ((req, res) => {
   res.writeHead (200, {'Content-Type': 'text / plain'});
   res.end ('Hello World \ n');
}). listen (port, hostname, () => {
   console.log (`Server running at http: // $ {hostname}: $ {port} /`);
});
```

# Static code analysis tools
* Linters: Alert tools. They help us to follow the rules or conventions of our teams without having to memorize the entire rule book; we just need to program and make sure these tools check our code.

For example: ESLint, JSHint, CSSComb or scsslint.

* Automatic correction: Tools that help us review and fix our code regardless of whether we use one code editor or another; they work for all cases and tastes of the community. For example: Prettier.

* Typing: JavaScript is a dynamic typing language, we can change the type of variables whenever we want or need. But, we can use different tools to implement strong typing, that is, we can use variables with different types than the one we initially defined (unless we do a conversion).

The most popular typing tool in JavaScript is TypeScript but there are also some alternatives like Flow and React PropTypes.

# ESLint: Adding alerts to our code with ECMA Script
ESLint is a tool that identifies and reports patterns and errors in ECMAScript / JavaScript code. It is similar to JS-Lint and JSHint with some differences:

ESLint uses Espree to parse JavaScript.
ESLint uses an AST to evaluate patterns in code.
ESLint supports plugins, each rule is a plugin and you can add more in development.

Documentation:
```https
https://eslint.org/docs/user-guide/configuring
```

NPM:
```terminal
$ npm install -g eslint
```

# Style correction tools
Documentation:
```https
https://prettier.io/
```

Prettier is an opinionated code formatter. Apply a consistent style when parsing your code and reprinting it with your own rules that take into account the maximum line length, wrapping the code when necessary.

It can be run in your editor when saving, on a pre-commit hook, or in CI environments to ensure your codebase is consistent in style without developers having to post a thorough comment on a code review.

It offers support for:
* JavaScript, including ES2017
* JSX
* Angular
* Go
* Flow
* TypeScript
* CSS, Less, and SCSS
* HTML
* JSON
* GraphQL
* Markdown, including GFM and MDX
* YAML

For example we have this malformed JavaScript code:
```javascript
foo (reallyLongArg (), omgSoManyParameters (), IShouldRefactorThis (), isThereSeriouslyAnotherOne ());
```

Passing Prettier leaves us in a more readable way:
```javascript
foo (
  reallyLongArg (),
  omgSoManyParameters (),
  IShouldRefactorThis (),
  isThereSeriouslyAnotherOne ()
);
```

NPM:

```terminal
$ npm install -g prettier
$ prettier --write [DOCUMENT NAME]
```

# Typing tools
TypeScript is a free and open source javascript programming language superset developed and maintained by Microsoft.

It is a JavaScript superset, which essentially adds static typing and class-based objects.

TypeScript extends JavaScript syntax, so any existing JavaScript code should work fine.

It is intended for large projects, which through a TypeScript compiler are translated into original JavaScript code.