/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

function printSize(shirtWidth, shirtLength, shirtSleeve) {
  let size = "N/A";

  if (
    shirtWidth >= 17 &&
    shirtWidth <= 19 &&
    shirtLength >= 27 &&
    shirtLength <= 29 &&
    shirtSleeve >= 8.0 &&
    shirtSleeve <= 8.25
  ) {
    size = "S";
  } else if (
    shirtWidth >= 19 &&
    shirtWidth <= 21 &&
    shirtLength >= 28 &&
    shirtLength <= 30 &&
    shirtSleeve >= 8.26 &&
    shirtSleeve <= 8.5
  ) {
    size = "M";
  } else if (
    shirtWidth >= 21 &&
    shirtWidth <= 23 &&
    shirtLength >= 29 &&
    shirtLength <= 31 &&
    shirtSleeve >= 8.51 &&
    shirtSleeve <= 8.75
  ) {
    size = "L";
  } else if (
    shirtWidth >= 23 &&
    shirtWidth <= 25 &&
    shirtLength >= 30 &&
    shirtLength <= 32 &&
    shirtSleeve >= 8.76 &&
    shirtSleeve <= 9.0
  ) {
    size = "XL";
  } else if (
    shirtWidth >= 25 &&
    shirtWidth <= 27 &&
    shirtLength >= 32 &&
    shirtLength <= 34 &&
    shirtSleeve >= 9.5 &&
    shirtSleeve <= 9.75
  ) {
    size = "2XL";
  } else if (
    shirtWidth >= 27 &&
    shirtWidth <= 29 &&
    shirtLength >= 33 &&
    shirtLength <= 35 &&
    shirtSleeve >= 10.0 &&
    shirtSleeve <= 10.25
  ) {
    size = "3XL";
  }

  return size;
}

console.log(printSize(23, 30, 8.71));
console.log(printSize(18, 29, 8.47));
