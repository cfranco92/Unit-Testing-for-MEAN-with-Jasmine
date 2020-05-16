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