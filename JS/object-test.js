"use strict";

//


//  you can add arrays in to objects //

// arrays of objects //

var users = [
    {
        age: 12,
        name: "kyle"
    },
    {
        age: 33,
        name: "fred"
    },
    {
        age: 25,
        name: "zach"
    }
    ];
    // console.log(users[0].name);
    // console.log(users[1].age);
    //
    // console.log(users[0].name);
    function convertYearsToMonths(year){
        return year * 12;
    }
    function updateUsers(usersObjects){
        for (var i = 0; i < usersObjects.length; i += 1) {
            usersObjects[i].age = convertYearsToMonths(usersObjects[i].age);
        }
    }
    updateUsers(users);
    console.log(users);