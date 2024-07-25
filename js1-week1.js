// console.log('Hello World!');

// console.log(3 + 8);

// ===== VARIABLES ======
/*let greetings = "Hello World"
console.log(greetings);

const myName = "Alexander";
console.log(myName);*/

// Exercise;
// 1. Add a variable greeting to js1-week1.js and assign a greeting of your choice to the variable

// 2. Print your greeting to the console 3 times. You should see your greeting 3 times on the console, one on each line.

// let greeting = "Good Morning";
// console.log(greeting, greeting, greeting );

// ======= STRINGS  =======
/*EXERCISE
Write a program that:
creates a variable called colors
assigns colors "blue" and "yellow" as a comma separate string to colors
logs the type colors using typeof.
What is the typeof a number?*/

// let colors = 'blue, yellow';
// console.log(typeof colors);

// ======= String concatenation =======
// Here is an example using the plus operator to concat strings
/*const greetingStart = "Hello, my name is ";
const name = "Daniel";

const greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"*/

// Here is example using the String interpolation to concat strings
/*const greetingStart = "Hello";
const name = "Daniel";

const greeting = `${greetingStart}, my name is ${name}`;

console.log(greeting); // Logs "Hello, my name is Daniel"*/

//EXERCISE
/*Write a program that logs a message with a greeting and your name using the two concatenation methods we used*/
/*const greeting = "Good morning ";
const myName = "Alexander";
const greetingYou = greeting + myName;
console.log(greetingYou);*/

// const greetings = 'Good Morning';
// const myName = 'Alexander';
// const lastName = 'Msumba';

// const message = `${greetings}, my name is ${myName} ${lastName}`;

// console.log(message);

// ====== Numbers ======
// const sum = 10 + 2; // 12
// const product = 10 * 2; // 20
// const quotient = 10 / 2; // 5
// const difference = 10 - 2; // 8

// Numbers with decimals can be rounded to the nearest whole number using the Math.round function:
// EXAMPLE
// const preciseAge = 30.612437;
// const roughAge = Math.round(preciseAge); // 31

// const decimalNumber = 99.88;
// console.log(Math.round(decimalNumber));

/*EXERCISE
1. Create two variables numberOfTrainees and numberOfMentors

2. Log a message that displays the total number of trainees and mentors*/
// const numberOfTrainees = 15;
// const numberOfMentors = 8;
// const total = numberOfTrainees + numberOfMentors;
// console.log(`Number of trainees: ${numberOfTrainees}`);
// console.log(`Number of mentors: ${numberOfMentors}`);
// console.log(`Total number of trainees and mentors: ${total}`);

// ==== EXPECTED RESULTS ===
// Number of trainees: 15
// Number of mentors: 8
// Total number of trainees and mentors: 23

// let percentage = (numberOfTrainees - numberOfMentors) / (numberOfTrainees) * 100;
// console.log(percentage);
// const unit = "%"

// let percentageOfTrainees = Math.round((100 / total) * (numberOfTrainees))

// console.log(`Percentage of trainees: ${percentageOfTrainees}${unit}`);

// let percentageOfMonitors = Math.round((100 / total) * numberOfMentors);

// console.log(`Percentage of monitors: ${percentageOfMonitors}${unit}`);

// =====Statements and expressions ======

// ======FUNCTIONS ======

function double(number) {
  return number * 2;
}

const result = double(2);
console.log(result); // 4

// A function can have one or more parameters, check out the example below:

function add(a, b) {
  return a + b;
}

const sum = add(10, 4.993);
console.log(sum);








