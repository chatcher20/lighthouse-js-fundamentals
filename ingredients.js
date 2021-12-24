const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:


console.log("Contents of ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("Contents of ingredients:");
for (i=0; i< ingredients.length; i = i+1) {
  console.log(ingredients[i])
}

let reversed = ingredients.reverse();
console.log(reversed);







