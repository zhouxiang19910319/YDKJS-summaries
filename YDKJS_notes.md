#YDKJS
##Up and going

* `toFixed()` Only works on numbers.
* [when you get the value of something in Javascript, it automatically is set to a string type](https://stackoverflow.com/questions/14059201/why-does-firebug-say-tofixed-is-not-a-function)
* To convert a string to number, use `parseFloat()` or `parseInt()` , this will make sure that `toFixed()`function will work.


####Chapter 2 Into Javascript
* JavaScript has typed values, not typed variables. **What does this mean???**
* The return of `typeof`operator is always a **string**. So, the return of `typeof a="hello";`is `"hello"`.



==Means what?==

1. Briefly, there is a String (capital S) object wrapper form, typically called a "native," that pairs with the primitive string type; it's this object wrapper that defines the toUpperCase() method on its prototype.

2. When you use a primitive value like "hello world" as an object by referencing a property or method (e.g., a.toUpperCase() in the previous snippet), JS automatically "boxes" the value to its object wrapper counterpart (hidden under the covers).

3. A string value can be wrapped by a String object, a number can be wrapped by a Number object, and a boolean can be wrapped by a Boolean object. For the most part, you don't need to worry about or directly use these object wrapper forms of the values -- prefer the primitive value forms in practically all cases and JavaScript will take care of the rest for you.


###Primitive Values
* All types except objects define immutable values (values, which are incapable of being changed). For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values".


* In JavaScript there are 5 primitive types: `undefined`, `null`, `boolean`, `string` and `number`. Everything else is an **object**. 
* ==**The primitive types boolean, string and number can be wrapped by their object counterparts.**==
* ==**These objects are instances of the Boolean, String and Number constructors respectively.**==

```
typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"
 
typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"
 
typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"



