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

/**
 * 
 * 
 * 
 * 
 */
function last(array, n){
    if(!Array.isArray(array)){
        return [];// if array is not an array return empty array
    }
    if(isNaN(n)){
        let lastElement = array[array.length -1];
        return lastElement;//if n is not a number, return last element
    }
    if(n < 0){
        return [];//if n is negative, return empty array
    }
    if(n < array.length){
        return array.slice(-n);//if n is less than array length, return the last n elements of array
    } else{
        return array;//else return array
    }
}
module.exports.last = last;

/**
 * 
 * 
 * 
 * 
 */
function indexOf(array, value){
    //loop
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;// if value is at index return, index
        }
    }
    return -1;// else return -1
}
module.exports.indexOf = indexOf;

/**
 * 
 * 
 * 
 * 
 */
function filter(array, action){
    //output
    let output = [];
    //loop
    for(let i = 0; i < array.length; i++){
        if(action(array[i], i, array)){//if calling func is truthy
            output.push(array[i]);// push value
        }
    }
    return output;//return output
}
module.exports.filter = filter;

/**
 * 
 * 
 * 
 * 
 */
function reject(array, action){
    //output
    let output = [];
    //loop
    for(let i = 0; i < array.length; i++){
        if(!action(array[i], i, array)){//if calling is falsey
            output.push(array[i]);// push value
        }
    }
    return output;// return output
}
module.exports.reject = reject;

/**
 * 
 * 
 * 
 * 
 */
function partition(array, action){
    //output
    let output = [];
    //filtered
    let filtered = _.filter(array, action);
    //rejects
    let rejected = _.reject(array, action);
    //push
    output.push(filtered, rejected);
    return output;// return output
}
module.exports.partition = partition;

/**
 * 
 * 
 * 
 * 
 */
function map(collection, action){
    //output
    let output = [];
    //if collection is array
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            output.push(action(collection[i], i, collection));//push func pass to output
        }
    } else {//else obj
        for (var key in collection) {
            output.push(action(collection[key], key, collection));//push func past to output
        }
    }
    return output;// return output
}
module.exports.map = map;

/**
 * 
 * 
 * 
 * 
 */
function pluck(arr, prop){
    return _.map(arr, (obj) => obj[prop]);
}
module.exports.pluck = pluck;
