(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    // var names = ['ryan', 'benny', 'stephen', 'matthew'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log('There are ' + names.length + ' names in the array');

    // console.log('The first name is: ' + names[0]);
    // console.log(names[0]);
    // console.log('The second name is: ' + names[1]);
    // console.log(names[1]);
    // console.log('The third name is: ' + names[2]);
    // console.log(names[2]);
    // console.log('The fourth name is: ' + names[3]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for (var i = 0; i < names.length; i += 1){
    //     console.log(names[i]);
    // }
    // for (var i = 0; i >= 0; i -= 1){
    //     console.log(names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach(function(element, index, array) {
    //     console.log(element);
    //     console.log(index);
    //     console.log(array);
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    // function first (array) {
    //     return array[0];
    // }
    //
    // function second (array) {
    //      return array[1]
    // }
    // second();
    //
    // function last (array) {
    //      return array[array.length -1]
    // }

})();

// ================================= ARRAY BONUSES
// 1. Create a function that returns a random day of the week
// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// someFunction("a") // returns 1
// someFunction("z") // returns 26
// 3. Create a function that returns the longest string in a given array of string elements
// 4. Create a function that takes in two arrays of number inputs. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true



// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
//
//
//
// function randomDay () {
//     console.log(days[5])
// }
// randomDay();

//
// var ticTacToe = [
//     [0, 1, 2],
//     [0, 1, 2],
//     [0, 1, 2]
// ];
//
// ticTacToe [1] [1] = "x";
// // first set of [] determines



/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */
var numbers [];
// Exercise 0. Write a function named first() that returns only the first element of an array

// Exercise 1. Write a function named secondToLast() that returns the second to last element

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays ([1, 2, 3], [4, 5, 6]){
    return addTwoArrays
}
// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays
