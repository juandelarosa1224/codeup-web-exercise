(function(){
    "use strict";

/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */
var colors = ['red', 'orange', 'black', 'purple', 'blue', 'green'];
// Exercise 0. Write a function named first() that returns only the first element of an array
    function first (colors) {
        return colors[0];
    }
// Exercise 1. Write a function named secondToLast() that returns the second to last element
     secondToLast (colors);
    return colors[colors.length - 1];
// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
    getLongestString (colors);
        return arr.Max(x => x.Length);

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
    getShortestString (colors);
        Math.min(arr[0].length,arr[1].length,arr[2].length);

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
    addTwoArrays ()

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
//         colors.reverse (){
//         console.log(colors);
//     }
// Exercises 7. Write a function named getRandomQuote().
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


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
})();