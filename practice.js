
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




