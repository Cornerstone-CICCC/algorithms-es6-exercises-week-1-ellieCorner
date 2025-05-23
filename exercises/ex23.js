/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

let counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

let reverseCounter = ingredients.length - 1;
while (reverseCounter > 0) {
  console.log(ingredients[reverseCounter]);
  reverseCounter--;
}
