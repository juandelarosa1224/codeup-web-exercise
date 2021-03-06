"use strict";

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// /* ########################################################################## */

var confirmed = confirm("Would you like to enter a number? ");
if (confirmed === true) {
    var stringNumber = prompt("What number would you like to enter? ");
    var newNumber = Number(stringNumber);
    if (isNaN(stringNumber)) {
        alert("This is not a number... no information will be displayed!");
    } else if (newNumber%2 == 0) {
        alert("Your number is even!");
        alert("Your number plus 100 is " + (newNumber + 100));
        if (newNumber >= 0) {
            alert("Your number is positive!");
        } else {
            alert("Your number is negative!");
        }
    } else {
        alert("Your number is odd!");
        alert("Your number plus 100 is " + (newNumber + 100));
        if (newNumber >= 0) {
            alert("Your number is positive!");
        } else {
            alert("Your number is negative!");
        }
    }
} else {
    alert("Exiting program");
}
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(outputColor) {
    if (outputColor === "blue" || outputColor === "Blue") {
        alert("Blue is the color of the sky");
    } else if (outputColor === "red" || outputColor === "Red") {
        alert("Strawberries are red");
    } else if (outputColor === "cyan" || outputColor === "Cyan") {
        alert("I don't know anything about cyan")
    } else {
        alert("This was not a color in my function...");
    }
}
var outputColor = prompt("Pick your favorite color: ");
console.log(analyzeColor(outputColor));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/*
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function analyzeColor(outputColor) {
    if (outputColor === "blue" || outputColor === "Blue") {
        alert("Blue is the color of the sky");
    } else if (outputColor === "red" || outputColor === "Red") {
        alert("Strawberries are red");
    } else if (outputColor === "cyan" || outputColor === "Cyan") {
        alert("I don't know anything about cyan")
    } else {
        alert("This was not a color in my function...");
    }
}
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var switchColor = prompt("Pick a color?");
switch (switchColor) {
    case "blue":
        alert("Blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
        break;
    default:
        alert("This wasn't blue, red, or cyan!");
        break;
}
console.log(switchColor);
/*
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// Done above in my function.
/* ########################################################################## */

/*
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var numbers = [0, 1, 2, 3, 4, 5];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomNumbers);

function calculateTotal(luckyNumber, totalNum) {
    var discount1 = parseFloat(0.1);
    var discount2 = parseFloat(0.25);
    var discount3 = parseFloat(0.35);
    var discount4 = parseFloat(0.50);
    var discount5 = parseFloat(0);
    var applied1 = totalNum - (discount1*totalNum);
    var applied2 = totalNum - (discount2*totalNum);
    var applied3 = totalNum - (discount3*totalNum);
    var applied4 = totalNum - (discount4*totalNum);
    var applied5 = discount5*totalNum;
    var dollar1 = applied1.toFixed(2);
    var dollar2 = applied2.toFixed(2);
    var dollar3 = applied3.toFixed(2);
    var dollar4 = applied4.toFixed(2);
    var dollar5 = applied5.toFixed(2);

    switch (luckyNumber) {
        case 0:
            alert("No discount applied to order");
            break;
        case 1:
            alert("Discount applied of 10 percent, new total: " + dollar1);
            break;
        case 2:
            alert("Discount applied of 25 percent, new total: " + dollar2);
            break;
        case 3:
            alert("Discount applied of 35 percent, new total: " + dollar3);
            break;
        case 4:
            alert("Discount applied of 50 percent, new total: " + dollar4);
            break;
        case 5:
            alert("Discount applied and item is FREE, new total: " + dollar5);
            break;
        default:
            console.log("not working");
            break;
    }
}
var askPrice = prompt("How much did it cost?");
var totalNum = parseFloat(askPrice);
console.log(calculateTotal(randomNumbers, askPrice));

