////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  return(Math.min(x, y));
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(x) {
  let pos = Math.abs(x);//force positive
  if(pos % 2 === 0){
    return true;//is even
  }else {
    return false;//is not even
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
  //count
  let count = 0;
  //loop
  for(let i = 0; i < str.length; i++){
    str.toLowerCase();//force case
    if(str.charAt(i) === char){
      count++;//if char is at str index, increment count
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  //count
  let count = 0;
  //loop
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === 'B'){
      count++;//if char at str index is B, increment count
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
