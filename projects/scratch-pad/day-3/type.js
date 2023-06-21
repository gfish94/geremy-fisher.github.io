// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //if value passes isArray and passes typeof as object, return true
    if(Array.isArray(value) && typeof value === 'object'){
        return true;
    } else {// else return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //if value passes typeof as an object, is not null, an array or an instance of date
    if(typeof value === 'object' && value !== null && !(Array.isArray(value)) && !(value instanceof Date)){
        return true;// return true
      } else {
        return false;// else return false
      }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //


    //if value passes typeof as an object, is not null or an instance of date
    if(typeof value === 'object' && value !== null && !(value instanceof Date)){
        return true;// return true
    } else {
        return false;// else return false
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //if value passes type of as anything other than an object
    if(typeof value !== 'object'){
        return typeof value;//return typeof
    } else if(isArray(value) === true){//if it passes isArray function
        return 'array';//return array
    } else if(isObject(value) === true){//if it passes isObject function
        return 'object';//return object
    } else if(value === null){//if null
        return 'null';//return null
    } else if(value instanceof Date){//if instance of Date
        return 'date'//return date
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
