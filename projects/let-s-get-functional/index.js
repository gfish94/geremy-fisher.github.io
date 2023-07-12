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

var averageBalance = function(array){

    let sum = array.reduce((acc, current)=>{
        acc += parseFloat(current.balance.replace(/[$,]/g, ''));
        return acc;
    }, 0)// find sum of all balances

    let num = array.filter((current)=>{
        if(current.balance){
            return true;
        }//find num of elements with balances
    })

    return sum / num.length;// return avg
};

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
    //count
    let count = 0;
    //friends
    let friends = [];
    _.each(array, (current) => {
        if(current.name === customer){
            friends = current.friends;//assign customer friends array to friends
        }
    });
    
    _.each(friends, (current) =>{
        if(current.name.charAt(0).toUpperCase() === letter.toUpperCase()){// if first letter in friends is letter
            count++;// increment count
        }
    });
    return count;// return count
};

var friendsCount = function(array, name){
    let arr = array.map(customer => {
        return {name: customer.name, friends: customer.friends.map(friend => friend.name)}
    });// map customers
    
    let friends = arr.filter(customer => customer.friends.includes(name));//filter for friends with names

    return friends.map(friend => friend.name);//return array of all customers with name in friends
};


var topThreeTags = function(array){
    //get flat map of tags
    let tags = array.map(customer => customer.tags).flat();
  
    //init counter obj
    let counter = {};
  
    //for each tag, add a key to counter with count of the occurences in tags array
    tags.forEach(tag => {
      if(counter[tag]){
        counter[tag] += 1;
      } else{
          counter[tag] = 1;
      }
    });
    
  return Object.keys(counter).filter(x => {
        return counter[x] === Math.max.apply(null, Object.values(counter));});//filter through counter object and return an array of the keys with the highest values
  };
  
var genderCount = function(array){
    
};

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
