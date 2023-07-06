// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
},

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
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

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, n){
    //output
    let output = [];
    if(!Array.isArray(array)){
        return output;//if array is not an array, return output
    }
    if(isNaN(n)){
        return array[0];//if num is not a number, return first value in array
    }
    if(n < array.length){//if num is positive in and num is less than array length
        for(let i = 0; i < n; i++){
            output.push(array[i]);//push first n items of array to output
        }
        return output;//return output
    } else {
        return array;
    }
        return output;//return output
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, n){
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //loop
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;// if value is at index, return index
        }
    }
    return -1;// else return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //loop
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;//if value is at index, return true
        }
    }
    return false;//else return false
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
    //if collection is array
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);//pass values to func
        }
    } else {//else obj
        for (var key in collection) {
            action(collection[key], key, collection);//pass properties to func
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //storage
    let unique = [];
    //loop
    for(let i = 0; i < array.length; i++){
        if(!unique.includes(array[i])){
            unique.push(array[i]);//if unique does not include value, push value to unique
        }
    }
    return unique;// return unique
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, action){
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

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, action){
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


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action){
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


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action){
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


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop){
    return _.map(arr, (obj) => obj[prop]);
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    if(Array.isArray(collection)){
        //determine if function wasn't provided
        if(!func){
            //loop
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;//if item is falsey, return false
                } else{
                    return true;//else true
                }
            }
        } else{//else it was 
            //loop
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i , collection)){
                    return false;//if result of invoking func is falsey, return false
                }
            }
          return true;//else return true
        }
    } else {//else it is an object
        //determine if function wasn't provided
        if(!func){
            //loop
            for(let key in collection){
                if(!collection[key] || !key){//if
                    return false;
                } else{
                    return true;//else true
                }
            }
        }else{//else it was
            //loop
            for(let key in collection){
                if(func(key, collection[key], collection)){
                    return false;//if result of invoking is falsey, return false
                }
            }
            return true;//else true
        }
    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, action){
    if(Array.isArray(collection)){
        //determine if function wasn't provided
        if(!action){
            //loop
            for(let i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;//if item is truthy, return true
                }
                return false;//else false
            }
        } else{//else it was 
            //loop
            for(let i = 0; i < collection.length; i++){
                if(action(collection[i], i , collection)){
                    return true;//if result of invoking func is truthy, return true
                }
            }
            return false;//else false
        }
    } else {//else it is an object
        //determine if function wasn't provided
        if(!action){
            //loop
            for(let key in collection){
                if(collection[key] || key){//if item is truthy, return true
                    return true;
                }
                return false;// else false
            }
        }else{//else it was
            //loop
            for(let key in collection){
                if(!action(key, collection[key], collection)){
                    return true;//if result of invoking is truthy, return true
                }
            }
            return false;// else false
        }
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, action, seed) {
    //assign true to first
    let result;
    if (seed === undefined) {//seed is undefined
        result = array[0];//assign first array element to result
        //loop from index 1
        for (let i = 1; i < array.length; i++) {
            result = action(result, array[i], i, array);//else assign result value of passing action
          }
    } else {
        result = seed;// else assign result to seed
        //loop
        for (let i = 0; i < array.length; i++) {
        result = action(result, array[i], i, array);//else assign result value of passing action
      }
    }
    return result;// return final result
}
  

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(target, ...sources) {
    //loop
    for(let i = 0; i < sources.length; i++){
        Object.assign(target, sources[i]);//copy all values from sources to target
    }
    return target;//return target
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
   }
