

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// console.log(makeLine(5)); //prints 5 asterisks




// your code goes here.  Make sure you call makeLine() in your own code.


function buildTriangle(length) {
  let triangle = ""
  let x = 1
  for (x = 1; x <= length; x++) {
    triangle = triangle + makeLine(x)
  }
  return triangle;
}


console.log(buildTriangle(10));



/*

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));

*/





let cry = function tears() {
  let x = "boohoo!"
  return x
}

console.log(cry())

