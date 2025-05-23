/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laugh(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "ha";
  }
  return result !== "" ? result + "!" : "";
}

console.log(laugh(0));
console.log(laugh(1));
console.log(laugh(2));
console.log(laugh(3));
console.log(laugh(10));
