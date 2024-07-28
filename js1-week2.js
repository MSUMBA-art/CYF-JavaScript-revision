// ===== Booleans ===
/*let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
console.log(codeYourFutureIsGreat, thisIsATerribleClass);*/

/*let num1 = 45;
let num2 = 45;
let num3 = 30;
console.log(num1 === num2); // false
console.log(num1 === num3); // false

let firstNumber = 10;
let secondNumber = 10;

let checkIfTrue = firstNumber === secondNumber;

console.log(typeof checkIfTrue);*/

// ====== Conditionals ========


function numberChecker(num) {
  if (num === "happy") {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :`;
  }
}
console.log(numberChecker("happy"));
 
/*EXERCISE
Create a function that gives you a message depending on your mood! It should:

take one input
return "Good job, you're doing great!" if you pass in "happy"
return "Every cloud has a silver lining" if you pass in "sad"
return "Beep beep boo" if you pass in a number
return "I'm sorry, I'm still learning about feelings!" if you pass in anything else*/

function message(mode) {
  if (mode === "happy") {
    return ` Good job, you're doing great!`;
  } else if (mode === "sad") {
    return ` Every cloud has a silver lining`;
  } else if (mode >= 0) {
    return ` Beep beep boo`;
  } else {
    return `I'm sorry, I'm still learning about feelings!`;
  }
}
console.log(message());


