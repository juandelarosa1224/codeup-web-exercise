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


var ticTacToe = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
];

ticTacToe [1] [1] = "x";
// first set of [] determines