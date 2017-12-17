//we can ask an object if it has a certain property

var myObject = {a:2};

console.log(("a" in myObject));
console.log(("b" in myObject));

console.log(myObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("b"));

