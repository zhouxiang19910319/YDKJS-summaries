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


####Primitive Values
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
```

##Scope and Closure
JavaScript is an interpreted language, not a compiled language. ==A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute.== ==**In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.**==

####How does chrome V8 engine works?

Answer:

V8 is a JavaScript engine built at the google development center, in Germany. It is open source and written in C++. It is used for both client side (Google Chrome) and server side (node.js) JavaScript applications.

V8 was first designed to increase the performance of the JavaScript execution inside web browsers. In order to obtain speed, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. It compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler like a lot of modern JavaScript engines such as SpiderMonkey or Rhino (Mozilla) are doing. The main difference with V8 is that it doesn’t produce bytecode or any intermediate code.



####YDKJS quote about js compiling:
Let’s meet the cast of characters that interact to process the program var a = 2;, so we understand their conversations that we’ll listen in on shortly:

1. Engine: responsible for start-to-finish compilation and execution of our JavaScript program.
2. Compiler: one of Engine’s friends; handles all the dirty work of parsing and code-generation (see previous section).
3. Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

[About this check this forum post](https://forum.freecodecamp.org/t/how-is-javascript-compiled-ydkjs-scope-and-closure/146498/3)

#### 