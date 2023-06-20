// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //loop over array
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);//print values
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //reverse loop over array
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);//print values
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //create array
  var array = [];

  //for in loop over object
  for(var key in object){
    array.push(key);//push key values into array
  }

  return array;//return array
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop over object
  for(var key in object){
    console.log(key);//print keys
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //create array
  var array = [];

  //for in loop over object
  for(var key in object){
    array.push(object[key]);//push values to array
  }
  
  return array;//return array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop over object
  for(var key in object){
    console.log(object[key]);//print values
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //create count
  var count = 0;

  //for in loop over object
  for(var key in object){
    count++;//increment count
  }

  return count;//return count
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

  //create array
  var array = [];

  //create reverseObj
  var reverseObj = {};

  //loop over object
  for(var key in object){
    array.push(key);//push keys and values to array
  }

  //loop in reverse through array
  for (var i = array.length - 1; i >= 0; i--){
    reverseObj[array[i]] = object[array[i]];//add array values to reverseObj
  }

  //loop over reverseObj
  for(var key in reverseObj){
    console.log(reverseObj[key]);//print values
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
