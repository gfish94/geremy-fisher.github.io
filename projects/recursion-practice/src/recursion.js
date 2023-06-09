// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n < 0){
    return null;//if n is negative, return null
  } else if(n === 0){
    return 1;// if n is 0, return 1
  }
  return n * factorial(n - 1);// else return n * factorial recurring
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, result=0) {
  if(array.length === 0){
    return result;// if array is empty, return result
  }
  result += array[0];// add first index to result
  return sum(array.slice(1), result);// return sum without first element
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n < 0){
    n = Math.abs(n);// force n to equal a postive number
  } else if(n === 0){
    return true;// if even, return true
  } else if(n === 1){
    return false;// if odd, return false
  } else{
    n = n - 2;// else decrement n
  }
  return isEven(n);//recall n
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;// if n = 0, return 0
  }
  //if n is greater than 0, decrement n and add it to func call with n decremented
    //else increment n and add it to func call with n incremented
    return n > 0 ? n-1 + sumBelow(n-1) : n+1 + sumBelow(n+1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  if(x + 1 === y || x === y){
    return output;// no range, return empty

  } else if(x < y){// x < y
    // base
    if(x + 1 === y){
      return output;
    }
    //recursion
    output.push(x + 1);
    return range(x + 1, y, output);

  } else if(x > y){// x > y
    // base
    if(x - 1 === y){
      return output;
    }
    //recursion
    output.push(x - 1);
    return range(x - 1, y, output);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  if(exp === 0){
    return 1;
  }
  //recursion
  if(exp < 0){
    return 1 / exponent(base, - exp);// if exp is negative, return 1 divided by func call with positive exp
  }

  if(exp > 0){
  return base * exponent(base, --exp);//if exp is pos, return base time func call with exponent decremented
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if(n === 1){
    return true;// if n is 1, return true
  }
  if(n < 1){
    return false;// if n is less than 1, return false
  }
  //recursion
  return powerOfTwo(n / 2);// return func call with n divided by 2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base
  if(string.length <= 1){
    return string;//if string.lenght <= 1, return string
  }
  //recursion
  //return last char of string + func call with substring of string without the last char
  return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  //force case
  let str = string.toLowerCase();

  //force alphabet
  str = str.replace(/\s/g, '');

  //base
  if (str.length <= 1){
    return true;
  }
  if (str[0] !== str[str.length -1]){
    return false;
  }
  //recursion
  //call func with sliced string
  return palindrome(str.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y > 0) {
    return (x + multiply(x, y - 1))
  }
  if (y < 0) {
    return -multiply(x, -y)
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0){
    return true;// if strings are emty return true
  }

  if(str1[0] === str2[0]){//if first char is equal
  return compareStr(str1.substring(1), str2.substring(1));//return func call with substrings
  } else{
    return false;// else return false
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array=[]){
  //base
  if(str.length === 0){
    return array;// if string is empty return array
  }
  //recursion
  array.push(str.charAt(0))//push char to array
  return createArray(str.substring(1), array);// return func call with substring and array
};

// 17. Reverse the order of an array
var reverseArr = function (array, rev=[]) {
  //base
  if(array.length === 0){
    return rev;//if arr is empty, return rev
  }
  //recursion
  rev.unshift(array[0]);//unshift first element to rev
  return reverseArr(array.slice(1), rev);// return func call with sliced array and rev
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array=[]) {
  //base
  if(array.length === length){
    return array;//if array.length === length, return array
  }
  //recursion
  array.push(value);//push value
  return buildList(value, length, array);//return func call with value, length and array
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
  //base
  if(array.length === 0){
    return count;// if array is empty, return count
  }
  //recursion
  if(array[0] === value){
    count ++;// if first element is equal to value, increment count
  }
  return countOccurrence(array.slice(1), value, count)// return func call with sliced array, value and count
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, mapped=[]) {
  //base
  if(array.length === 0){
    return mapped;//if array is empty, return mapped
  }
  //recursion
  mapped.push(callback(array[0]));//push callback with first array element to mapped
  return rMap(array.slice(1), callback, mapped);// return func call with sliced array, callback and mapped
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base
  if(n < 0){
    return null;// if n is neg, return null
  }
  if(n <= 1){
    return n;// if n <= 1, return n
  }
  //recursion
  return nthFibo(n -1) + nthFibo(n -2);// return func call with n-1 + func call with n-2 
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  //base
  if(input.length === 0){
    return output;// if input is empty, return output
  }
  //recursion
  output.push(input[0].toUpperCase());//push first element of input capitalized
  return capitalizeWords(input.slice(1), output);// return func call with input sliced and output
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  //base
  if(array.length === 0){
    return output;// if array is empty, return output
  }
  //recursion
  output.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));//push first element with first char capitalized
  return capitalizeFirst(array.slice(1), output);//return func call with sliced array and output
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  let current = str.charAt(0);
  //base
  if(str.length === 0){
    return obj;//if str is empty return obj
  }
  //recursion
  if(obj.hasOwnProperty(current)){
    obj[current] ++;//if object has prop, increment
  } else{
    obj[current] = 1;//else assign prop to 1
  }
  return letterTally(str.substring(1), obj);//return func call with substrin and obj
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[], i=0) {
  //base
  if(i === list.length){
    return output;//if i = list.length, return output
  }
  //recursion
  if(list[i] !== list[i -1] || i === 0){
    output.push(list[i]);//if list at index is not the same as last index or index is 0, push list value at index
  }
  i++;//increment index
  return compress(list, output, i);//return func call with list, output, and index
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(list, output=[], i=0) {
  //base
  if(i === list.length){
    return output;//if i = list.length, return output
  }
  //recursion
  if(list[i] !== 0 || i === 0){
    output.push(list[i]);//if list at index is not the same as last index or index is 0, push list value at index
  } else if(list[i] !== list[i -1]){
    output.push(list[i]);//else if list at index is 0 and not the same as last index, push list value
  }
  i++;//increment index
  return minimizeZeroes(list, output, i);//return func call with list, output, and index
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[], i=0) {
  //base
  if(i === array.length){
    return output;//if i = array length, return output
  }
  //recursion
  if(i % 2 === 0){
    output.push(Math.abs(array[i]));//if i is even, push pos element at array index
  } else{
    output.push(- Math.abs(array[i]));// if i is odd, push neg element at array index
  }
  i++;// increment
  return alternateSign(array, output, i);// return func call with array, output and i
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output=[]) {
  //nums
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  //base
  if(str.length === 0){
    return output.join('');//if string is empty, return output joined
  }
  //recursion
  if(isNaN(str.charAt(0)) || str.charAt(0) === ' '){
    output.push(str.charAt(0));//if first char is not a number or a space, push value
  } else{
    output.push(nums.at(parseInt(str.charAt(0))));// if char is num, push value at index of number
  }
  return numToText(str.substring(1), output);//return func call with substring and output
};



// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
