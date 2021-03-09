// Code your solution here!
let myString = 'Algorithm';

// Set 'myString' equal to a substring of itself minus the last letter...
myString = myString.substring(0, myString.length - 1) +
// ...and then add the last letter back:
myString[myString.length - 1];

// myString still contains 'Algorithm'!
myString;
// => "Algorithm"
