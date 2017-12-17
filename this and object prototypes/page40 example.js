var myObject = {};

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

//my own version of it
console.log(myObject.true);
// console.log(myObject.3);   this syntax is wrong
console.log(myObject["[object Object]"]);
console.log(myObject["true"]);
console.log(myObject["3"]);