# Types and Grammars

## Chapter 1 Types

### 1. A type by any other name

### 2. Built in Types

* Here is the 7 built in types in js:

  * null
  * undefined
  * boolean
  * number
  * string
  * object
  * symbol   /* Added in CS6*/

* the 1st 5 types are so called : "primitive values", primitive values in js cannot be changed or altered in anyway. for example if we have a number 42, we want to apply methods to it, we need to change it to object then change the object.

* the only type of value that can be altered is object 

* ```javascript
  typeof undefined;                   //"undefined"   primitive value
  typeof true;                        //"boolean"     primitive value
  typeof 42;                          //"number"      primitive value
  typeof "42";                        //"string"      primitive value 
  typeof { life: 42 };                //"object"

  typeof null;                        //"object" !!! primitive value
  typeof function a(){/*...*/}        //"function"

  // added in ES6!
  typeof Symbol();                    //"symbol"
  ```

* `typeof` operator returns your result in  `string` 

* `typeof null;   //"object"` this original bug in JS has persisted for nearly 20 years. Just remember this special case. 

* `function a()` in js is not a stand alone type of value, understand it as a "sub-type" of object. 

* Again, just to reemphasize my last point, functions are just objects in JS.

* array in functions are object as well. 

  * `typeof [1,2,3]; //"object"` 

### 3. Values as Types

* In js, variables don't have types. the values that got assign to it has types.

* the engine does not insist that a variable always hold values of the same initial type that it starts out with. (a.k.a coercion can happen)

* Variables that do not have a current value will be assigned to the value of `undefined` 

  * ```javascript
    var a;
    typeof a; //undefined
    ```

* **`undefined` is different than undeclared.**

* **`undefined` is the initial state of a variable before you assign any value into it**

  * Confusing browser error message 1: (below snippet)

  * ```javascript
    var a;

    a;//undefined
    b;//Reference Error: b is not defined (this is the error message chrome will give you, however b is not undefined, b is not being declared at all. Do not get confused with this.)
    ```

  * Confusing browser error message 2: (below snippet)

  * ```javascript
    var a;

    typeof a;  //undefined
    typeof b;  //undefined 

    //again, b is not undefined, b is un-declared....
    ```

  * the `typeof` operator returns "undefined" even for a un-declared value, this is a special safety guard in the behavior of `typeof`

  * ​

  * A few ways of using `typeof` operator. 

    1. global variable (''DEBUG'') check: 

       * ```javascript
         // oops, this would throw an error!
         if (DEBUG) {
         	console.log( "Debugging is starting" );
         }

         // this is a safe existence check
         if (typeof DEBUG !== "undefined") {
         	console.log( "Debugging is starting" );
         }
         ```

    2. feature check for built-in API

       * ```javascript
         if (typeof atob === "undefined") {
         	atob = function() { /*..*/ };
         }
         ```

    3. another ways of doing all these checks against global variables but without the safety guard feature of `typeof` are: 

       * ```javascript
         if (window.DEBUG) {
         	// ..
         }

         if (!window.atob) {
         	// ..
         }
         ```

    4. check if the program you are working on has defined a certain variable, so that you can use it

       * ```javascript
         function doSomethingCool() {
         	var helper =
         		(typeof FeatureXYZ !== "undefined") ?
         		FeatureXYZ :
         		function() { /*.. default feature ..*/ };

         	var val = helper();
         	// ..
         }
         ```

       * if someone includes this utiliti into their module/progam, it safely checks if they've defined the FeatureXYZ or not

         * ```
           // an IIFE (see "Immediately Invoked Function Expressions"
           // discussion in the *Scope & Closures* title of this series)
           (function(){
           	function FeatureXYZ() { /*.. my XYZ feature ..*/ }

           	// include `doSomethingCool(..)`
           	function doSomethingCool() {
           		var helper =
           			(typeof FeatureXYZ !== "undefined") ?
           			FeatureXYZ :
           			function() { /*.. default feature ..*/ };

           		var val = helper();
           		// ..
           	}

           	doSomethingCool();
           })();

           ```

       * or you can use "dependency injection method" 

         * ```javascript
           function doSomethingCool(FeatureXYZ) {
           	var helper = FeatureXYZ ||
           		function() { /*.. default feature ..*/ };

           	var val = helper();
           	// ..
           }
           ```




## Chapter 2 Values 

### 4. Arrays

* array container can contain any types of value, string, number, object even another array

  * ```javascript
    var a = [ 1, "2", [3] ];

    a.length;		// 3
    a[0] === 1;		// true
    a[2][0] === 3;	// true
    ```

* you dont need to presize array

  * ```javascript
    var a = [ ];

    a.length;	// 0

    a[0] = 1;
    a[1] = "2";
    a[2] = [ 3 ];

    a.length;	// 3

    ```

* using `delete` on an array will create `undefined` holes in array and the length of the array will not be changed automatically

  * ```javascript
    var array = [0,1,2,3];
    delete array[0];
    array.length; //4 so this array pretty much becomes: 
    //[undefined,1,2,3]
    ```

* do not create arrays that have empty slots in them

  * ```javascript
    var a = [];

    a[0]=0;
    a[2]=2;

    a.length; //3

    //bad practice and can lead to more confusion, avoid this
    ```

* arrays are objects

* arrays can have string keys and properties added to them, just like real object **(but this is not recommended and should be avoided at all cost) a.k.a DO NOT PUT NUMBER STRINGS INTO AN ARRAY AS AN ELEMENT**

  * ```javascript
    var a = [ ];

    a[0] = 1;
    a["foobar"] = 2;

    a.length;		// 1
    a["foobar"];	// 2
    a.foobar;		// 2
    ```

* **the real gotcha**

  *  if a `string` value intended as a key can be coerced to a standard base-10 `number`, then it is assumed that you wanted to use it as a `number` index rather than as a `string` key!

  * ```javascript
    var a = [ ];

    a["13"] = 42;

    a.length; // 14
    ```

* convert "array- like" values into a true array and call array utilities on them

  * ```javascript
    function foo() {
    	var arr = Array.prototype.slice.call( arguments );
    	arr.push( "bam" );
    	console.log( arr );
    }

    foo( "bar", "baz" ); // ["bar","baz","bam"]
    ```

  * or you can use `Array.from(..)` in ES6.

  * ```javascript
    ...
    var arr = Array.from( arguments );
    ...
    ```

### 5. Strings

* Strings and arrays are different. 
  * Strings are primitive value. 
  * Arrays are object. 
  * Strings are not immutable.
  * Arrays are mutable.

## Chapter 4 Coercion

### 15. Explicit Coercion

* When coding if you decided to use explicit coercion, the more explicit your code is, the easier it is to read later either by yourself or other people. 

* Few ways of corerce strings to numbers. 

  * ```Javascript
    var a = 42;
    var b = String( a );

    var c = "3.14";
    var d = Number( c );

    b; // "42"
    d; // 3.14
    ```

  * The above way was the more direct way and you should use this whenver you want to explicitly coerce your value. 

  * ```javascript
    var a = 42;
    var b = a.toString();

    var c = "3.14";
    var d = +c;

    b; // "42"
    d; // 3.14
    ```

  * `toString()` cannot be called on a primitive value so JS has to box 42 in an object wrapper then convert it to string. 

  * You should straight up avoid using the `var d = +c ` method. To avoid confusions like: 

    * ```javascript
      var c = "3.14";
      var d = 5+ +c;

      d; // 8.14
      ```

    * ```javascript
      1 + - + + + - + 1;	// 2

      ```

* Date to number.

  * ```javascript
    var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );

    +d; // 1408369986000
    		
    ```

  * ```javascript
    var timestamp = +new Date();
    ```

  * ```Javascript
    // Non coercion verion 1
    var timestamp = new Date().getTime();

    // var timestamp = (new Date()).getTime();
    // var timestamp = (new Date).getTime();
    ```

  * ```javascript
    // Non coercion version 2 (Best version)
    var timestamp = Date.now();
    ```

  * ```javascript
    // How to polyfill Date.now() into older browser
    if (!Date.now) {
    	Date.now = function() {
    		return +new Date();
    	};
    }
    ```

* Curious case of  `~`.  (page 75-78). 

* Parsing Numeric Strings :

  * ```javascript
    var a = "42";
    var b = "42px";

    Number( a );	// 42
    parseInt( a );	// 42

    Number( b );	// NaN
    parseInt( b );	// 42
    ```

  * Parsing is not as same as coercion. 

  * Parse a `string` as a `number` when you don't know/care what other non-numeric characters there may be on the right-hand side. 

  * Coerce a `string` (to a `number`) when the only acceptable values are numeric and something like `"42px"` should be rejected as a `number`.

  * `parseInt()` works on string value.

  * in a non-string value is being passed in, it will be coerced to string 1st.

  * Never use a `parseInt()` with a non-string value.

* Explicitly coerce everything to boolean

  * ```javascript
    var a = "0";
    var b = [];
    var c = {};

    var d = "";
    var e = 0;
    var f = null;
    var g;

    Boolean( a ); // true
    Boolean( b ); // true
    Boolean( c ); // true

    Boolean( d ); // false
    Boolean( e ); // false
    Boolean( f ); // false
    Boolean( g ); // false
    ```

  * the above method is the normal method.

  * ```javascript
    var a = "0";
    var b = [];
    var c = {};

    var d = "";
    var e = 0;
    var f = null;
    var g;

    !!a;	// true
    !!b;	// true
    !!c;	// true

    !!d;	// false
    !!e;	// false
    !!f;	// false
    !!g;	// false
    ```

  * `!!` method is actually prefered. 

  * how to force a true/false coercion in the JSON serialization of a data structure

    * ```javascript
      var a = [
      	1,
      	function(){ /*..*/ },
      	2,
      	function(){ /*..*/ }
      ];

      JSON.stringify( a ); // "[1,null,2,null]"

      JSON.stringify( a, function(key,val){
      	if (typeof val == "function") {
      		// force `ToBoolean` coercion of the function
      		return !!val;
      	}
      	else {
      		return val;
      	}
      } );
      // "[1,true,2,true]"
      ```

  ​

### 16. Implicit coercion

* Implicit coercions are any type of coercions that aren't obvious. Most of the complaints about js coercion are towards implicit coercion.

* Numbers to Strings 

  * 1. string + number/number + string 

       * the number is gonna be coerced to a string. then two strings are being added.and the result is a string.

         * ```javascript
           var a = 42;
           var b = "0";

           a+b;  // "420"
           ```

    2. string + string

       * two strings are being added and result is a string. 

         * ```javascript
           var a = "42";
           var b = "0";

           a+b; //"420"
           ```

    3. number + number 

       * two numbers are being added and result is a number.

         * ```javascript
           var a = 42;
           var b = 0;

           a+b;  //42
           ```

    4. difference between `String(a)` and `a+""` 

* Strings to Numbers

  * The `-` (minus) operator is defined only for a numeric osubstracrion. 

    * ```javascript
      var a = "3.14";
      var b = 0;

      a-b; //3.14
      ```

  * object - boject

    * ```javascript
      var a = [3];
      var b = [1];

      a-b; //2
      ```

    * Both array got coerced into string 1st, then get converted into number. The result is number.

* Booleans to Numbers

* Everything to Boolean

  * What sort of expression operations require/force (implicitly) a boolean coercion? 
    1. The test expression in an `if (..)` statement.
    2. The test expression (second clause) in a `for ( .. ; .. ; .. )` header.
    3. The test expression in `while (..)` and `do..while(..)` loops.
    4. The test expression (first clause) in `? :` ternary expressions.
    5. The left-hand operand (which serves as a test expression -- see below!) to the `||` ("logical or") and `&&` ("logical and") operators. 

* `||` and `&&`

  * these two are " operand selector operators"

  * they **DO NOT** produce a boolean value a.k.a truth or false

  * they select one of the operand's value as the outoput of the operation

  * ```javascript
    var a = 42;
    var b = "abc";
    var c = null;

    a || b;		// 42
    a && b;		// "abc"

    c || b;		// "abc"
    c && b;		// null
    ```

  * `||` will see whether the 1st operand is a **truthy** value. if it is, as in this case, `||` will output the 1st operand as the result. 

  * `&&` will see whether the 1st operand is a **truthy** value. if it is, `||` will output the 2nd operand as the result. 

  * javascript's version of the C# "null coallescing operator" 

    * ```javascript
      function foo(a,b) {
      	a = a || "hello";
      	b = b || "world";

      	console.log( a + " " + b );
      }

      foo();					// "hello world"
      foo( "yeah", "yeah!" );	// "yeah yeah!"
      ```

  * "guard operator/short circuited operator"

    * ```javascript
      function foo() {
      	console.log( a );
      }

      var a = 42;

      a && foo(); // 42
      ```

    * `foo()` gets called only if a is a truthy value. if it is not, the `a&&foo()`  simply will not get executed a.k.a getting ignored. 

  * `||` and `&&` in if else loop

    * implicitly coerced: 

      * ```javascript
        var a = 42;
        var b = null;
        var c = "foo";

        if (a && (b || c)) {
        	console.log( "yep" );
        }
        ```

    * explicitly coerced: 

      * ```javascript
        var a = 42;
        var b = null;
        var c = "foo";

        if (!!a && (!!b || !!c)) {
        	console.log( "yep" );
        }
        ```

* Symbol Coercion

  * you can only explicitly coerce a symbol. 

  * ```javascript
    var s1 = Symbol( "cool" );
    String( s1 );					// "Symbol(cool)"

    var s2 = Symbol( "not cool" );
    s2 + "";						// TypeError
    ```



### Lose Equals vs Strict Equals

