"use strict";
// Object type
const userDetails = {
    name: 'Rachel',
    age: 21,
    hobbies: ['violin', 'volleyball'],
};
console.log(typeof userDetails);
const UserName = userDetails.name;
console.log(UserName);
// Array type - same type
// Syntax: let arr: string[]
const stringArray = ['burger', 'pizza', 'starbucks'];
console.log(stringArray instanceof Array);
// Array type - different types
// Syntax: let arr: (string | number)[]
const mixedArray = ['rush', 7, 'queen', 90];
console.log(mixedArray instanceof Array);
// Tuple - fixed collection of elements
// Syntax: let arr: [number, string]
const tupleArray = ['Happy', 100];
console.log(tupleArray);
// Enum type - used for defining constant elements
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let direction;
console.log(Direction.Up);
// Any type - used when the type of the variable is not yet decided
let anything;
console.log(typeof anything);
// Void type - used in functions that don't return anything
function displayDetails() {
    console.log('Currently working on it');
}
displayDetails();
