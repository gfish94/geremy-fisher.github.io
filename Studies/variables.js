/**
 * Variables:
 * 
 * 0:
 * 1:Declaration and Assignment:
 * 2:var, let, const:
 * 3:Hoisting:
 */
// 1. Declaration and Assignment //

// Declaration
// At declaration phase, the variable color is undefined because it has NOT been intialized
var color;
console.log(color);//prints => undefined

// Assignment
// When you assign a value to a variable to a declared variable
color = 'green';
console.log(color);//prints => green

// Initialization
//  When you declare a variable and assign it a value
var newColor = 'red';
console.log(newColor);//prints => red

// Reassignment
// Changing the value of a previously assigned variable
color = 'blue';
console.log(color);//prints => blue
newColor = 'purple';
console.log(newColor);//prints => purple