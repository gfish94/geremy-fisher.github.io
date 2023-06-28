/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, name){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].name === name){
        return arr[i];
      }
    }
  return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arr, name, replacement){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            arr[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr, name){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            arr.splice(arr[i]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(arr, obj){
    if(obj.name.length < 0 || obj.species.length < 0){
        return;//check name and species for length
    }
    let unique = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === obj.name){
            unique = true;
            break;
        }
    }
    if(unique){
        return;
    }//check name for uniqueness 
    arr.push(obj);// if all test pass push obj to arr
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
