
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //string
  let hash = '#';
  //while loop to num
  while(hash.length <= num){
    console.log(hash);//print string
    hash += '#';//add to string
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //loop to 15
  for (let i = 0; i < 15;){
    /*increment i, then if i is divisible by 3 => fizz
    if i is divisible by 5 => buzz
    if i is divisible by both => fizz+buzz
    or print i */
    console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function drawChessboard(num){
  //storage str
  let board = '';
  //outer loop
  for (let i = 0; i < num; i++) {
    //inner loop
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2 == 0){
        board += " ";//if i + j is even, add space
      }else{
      board += "#";//else add #
      }
    }
  board += "\n";//end of line break
  }
  return board;//return board
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
