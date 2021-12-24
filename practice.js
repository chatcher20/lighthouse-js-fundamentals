
/*
function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2021));



function howManyHundreds(x) {
  let y = x / 100
  return Math.floor(y)
}

console.log(howManyHundreds(894));

*/



function calculateRectangleArea(length, width) {
  let rectarea = length * width;
  if (length < 0 || width < 0) { 
    return undefined;
  } else {
    return rectarea;
  }
}
console.log(calculateRectangleArea(2, 4));

function calculateTriangleArea(base, height) {
  let triarea = base * height / 2;
  if (base < 0 || height < 0) { 
    return undefined;
  } else {
  return (triarea);
  }
}
console.log(calculateTriangleArea(3, 3));

function calculateCircleArea(radius) {
  let circarea = Math.PI * radius**2 ;       // note that you have to type two asterisks to signify "to the power of" in javascript
  if (radius < 0) { 
    return undefined;
  } else {
  return circarea
  }
}
console.log(calculateCircleArea(5));







/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(item, index) {  // up to three parameters but call them whatever you like
if (item % 3 === 0) {
test[index] = test[index] + 100;
}
});
console.log(test);


/*
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(elem) {
  console.log(elem);
});

/*
Map function: similar to forEach, you can define a call back function
that performs an operation on each element in the array.
The difference here is, map returns a new array, with the new values your function calculated.
*/

var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.map(function(elem) {
  elem = elem + 100;
  return elem;
});

console.log(newArray)

// returns: [ 101, 102, 103, 104, 105 ]

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(bill) {
  bill = bill*1.15
  bill = bill.toFixed(2)
  bill = Number(bill)
  return bill;
});

console.log(totals);




/*

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);

 */




    var numbers = [
      [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
      [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
      [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
      [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
      [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
      [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
      [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
      [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
      [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
      [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
  ];



// Let i represents a sub-array
for(var i=0; i<numbers.length; i++){

  // Let j represents the length of a sub-array 
  for(var j=0; j<numbers[i].length; j++){
      if(numbers[i][j]%2===0)
          numbers[i][j]="even";
      else
          numbers[i][j]="odd";
  }
}

// Print the final array
console.log(numbers);

