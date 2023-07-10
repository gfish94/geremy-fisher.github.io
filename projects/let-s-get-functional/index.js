// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./geremy-fisher.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });// filter male customer objects into array

    return males.length;//return length of array
};

var femaleCount = function(array){
    let females = _.reduce(array, (acc, current) => {
        //if current object is female
        if(current.gender === 'female'){
            acc ++;//increment count
        }
        return acc;//return count
    }, 0);
    return females;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, (acc, current) => {
        if (acc.age > current.age){// if acc.age is greater than current
            return acc;// return acc to oldest
        } else{
            return current;// else return current
        }
    });

    return oldest.name;// return oldest name
};



var youngestCustomer = function(array){
    let youngest = _.reduce(array, (acc, current) => {
        if(acc.age < current.age){// if acc.age is less than current
            return acc;// return acc to youngest
        } else{
            return current;// else return current
        }
    });

    return youngest.name;// return youngest name
};

var averageBalance;// SKIP

var firstLetterCount = function(array, letter){
    //count
    let count = 0;
    //forEach
    _.each(array, (current) => {
        if(current.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            count ++;//if first letter is letter, increment count
        }
    });
    return count;// return count
};

var friendFirstLetterCount = function(array, customer, letter){
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
