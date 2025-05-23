/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function laugh(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "ha";
  }
  return result !== "" ? result + "!" : "";
}

function emotions(emotion, emotionResult) {
  return `I am ${emotion}, ${emotionResult}`;
}

console.log(emotions("happy", laugh(2)));
console.log(emotions("happy", laugh(3)));
