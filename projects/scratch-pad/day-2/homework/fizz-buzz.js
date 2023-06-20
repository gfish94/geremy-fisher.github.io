// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //


  //loop 1-100
  for (var x = 1; x < 101; x++) {
    if(x % 3 == 0 && x % 5 == 0){//if x is a multiple of 3 and 5
      console.log("FizzBuzz");//print fizzbuzz
    } else if (x % 3 == 0){//if x is a multiple of 3
      console.log("Fizz");//print fizz
    } else if (x % 5 == 0){// if x is a multiple of 5
      console.log("Buzz");//print buzz
    } else{
      console.log(x);//else print x
    }
  }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}