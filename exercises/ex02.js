/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

function printTeamName(num) {
  switch (num) {
    case 0:
      return console.log("not a group");
    case 1:
      return console.log("solo");
    case 2:
      return console.log("duet");
    case 3:
      return console.log("trio");
    case 4:
      return console.log("quartet");
    default:
      return console.log("this is a large group");
  }
}

printTeamName(3);
