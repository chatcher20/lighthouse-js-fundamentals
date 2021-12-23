let age=12
const whichSchool = function(age) {
  if(age<13) {
    console.log("Elementary School")
  } else if(age <=18) {
    console.log("Secondary School")
  } else console.log("Lighthouse Labs")
}


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(77));

// const square = function(number) { return number * number }
// var x = square(4) // x gets the value 16



/* The function returns one of the following strings, based on the value of age:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

const whichSchool  = function (age) {
  // Your code in here ...
}

*/




const temperature = -5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const raining = false

if (!raining) {
  console.log("Leave your umbrella at home!");
}



if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}




let x = 1; // when to start

while (x <= 20) { // when to stop
    if((x % 3 === 0) && (x % 5 === 0)) {console.log("JuliaJames");}
        else if(x % 5 === 0) {console.log("James");}
        else if(x % 3 === 0) {console.log("Julia");}
        else if((x % 5 !== 0) && (x % 3 !== 0)) {console.log(x);}

        x = x + 1; // how to get to the next item
}
// check divisibility
// print Julia, James, or JuliaJames
// increment x



let num = 5; // when to start

while (num > 0) { // when to stop
    if (num > 2) {console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");}
    else if (num == 2) {console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");}
    else {console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");}
    
    num = num - 1; //how to get to the next item

}

n = 5 // when to start

while (n >= 0) { //when to stop
    if(n === 0) {console.log("BLAST-OFF!!!");}
    else {console.log("T-" + n + " seconds");}
    
    n = n - 1; // how to get to next item
}




