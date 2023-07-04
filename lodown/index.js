'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes in a value and returns it unchanged
 * 
 * @param {*} value : Function takes in any input value
 * @returns {*} value: Function returns input unchanged 
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeof: takes in a value and returns a string of its datatype
 * 
 * @param {*} value : Function takes in any input value
 * @returns {string} :Function returns a string of the values datatype
 */

function typeOf(value) {
    if(typeof value !== 'object'){
        return typeof value;//if typeof does not return object, return typeof
    } else if(Array.isArray(value)){
        return 'array';//if array, return array
    } else if(value === null){
        return 'null';//if null, return null
    } else{
        return 'object';//else return object
    }
}
module.exports.typeOf = typeOf;

/**
 * 
 * 
 * 
 */

function first(array, n){
    //output
    let output = [];
    if(!Array.isArray(array)){
        return output;//if array is not an array, return output
    }
    if(isNaN(n)){
        return array[0];//if num is not a number, return first value in array
    }
    if(Number.isInteger(n) && n < array.length){//if num is positive in and num is less than array length
        for(let i = 0; i < n; i++){
            output.push(array[i]);//push first n items of array to output
        }
        return output;//return output
    } else {
        for(let i = 0; i < array.length; i++){
            output.push(array[i]);//else push all items in array to output
        }
        return output;//return output
    }
}
module.exports.first = first;
