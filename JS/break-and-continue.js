"use strict";

var userNumber;
do {
    userNumber = parseFloat(prompt("Please input an odd number between 1 and 50."));
    if (userNumber % 2 !==0 && userNumber <50 && userNumber > 1) {
        break;
    }
    } while (true);
    console.log(userNumber);



for (var i = 1; i < 50; i+=2) {

    if (i === userNumber) {
        console.log('YIKES! Skipping number: ' + userNumber);
        continue;
    }
    console.log('Here is an odd number: ' + i);
}









    //
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
//     for (var i = 1; i < 50; i++) {
//
//         if (i % 2 === 0) {
//             // number isn't even
//             // odd numbers aren't as cool
//             // skip the rest of the loop and continue with the next iteration
//             continue;
//         }
//
//         console.log('Here is an odd number: ' + i);
//     }
// }