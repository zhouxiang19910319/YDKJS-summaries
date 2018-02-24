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

  * ```javascript
    a[1] = "O";
    b[1] = "O";

    a; // "foo"
    b; // ["f","O","o"]
    ```

* Both strings and arrays have :

  1. `length` property
  2. `indexOf()` method
  3. `concat()` method

* ```javascript
  var a = "foo";
  var b = ["f","o","o"];

  a.length;							// 3
  b.length;							// 3

  a.indexOf( "o" );					// 1
  b.indexOf( "o" );					// 1

  var c = a.concat( "bar" );			// "foobar"
  var d = b.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]

  a === c;							// false
  b === d;							// false

  a;									// "foo"
  b;									// ["f","o","o"]
  ```

* Strings cannot be (**directly**) altered when it comes to its individual elements. It can only be changed as a whole. Arrays can.

  * ```javascript
    c = a.toUpperCase();
    a === c;	// false
    a;			// "foo"
    c;			// "FOO"

    b.push( "!" );
    b;			// ["f","O","o","!"]
    ```

* If you want to alter string's down to each elements level, you can use this method: 

  * ```javascript
    a.join;			// undefined
    a.map;			// undefined

    var c = Array.prototype.join.call( a, "-" );
    var d = Array.prototype.map.call( a, function(v){
    	return v.toUpperCase() + ".";
    } ).join( "" );

    c;				// "f-o-o"
    d;				// "F.O.O."
    ```

* Here is one of the ways to reverse a string. 

  * The split() method splits a String object into an array of string by separating the string into sub strings.

  * The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

  * The join() method joins all elements of an array into a string.

  * ```javascript
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    reverseString("hello");
    ```

* Or, you can strore your strings as arrays, so you can always call `join("")` methods on them. 

### 6. Numbers

* JS has only ONE numeric type: `number`  

* in js, if a number does not have a decimal value or its decimal value is 0, we treat it as an "integer"

  * 42.0 is an integer in js

* Syntax

  * `a = 42;`

  * `a = 0.42;`

  * `a = .42;  // 0 can be neglected ` 

  * `a = 42.0;`

  * `a = 42. //samehere ` 

  * ```javascript
    var a = 5E10;
    a;					// 50000000000
    a.toExponential();	// "5e+10"

    var b = a * a;
    b;					// 2.5e+21

    var c = 1 / a;
    c;					// 2e-11
    ```

  * `number` can be boxed into `Number()` object wrapper. so number values can access methods that are built into the `Number.prototype()`  for example: `a.toFixed()` 

  * `a.toFixed()` will output a string that has a same value of the number :

    * ```javascript
      var a = 42.709;
      a.toFixed(1);  //"42.7"
      ```

    * ```javascript
      // invalid syntax:
      42.toFixed( 3 );	// SyntaxError

      // these are all valid:
      (42).toFixed( 3 );	// "42.000"
      0.42.toFixed( 3 );	// "0.420"
      42..toFixed( 3 );	// "42.000"

      42 .toFixed(3); // "42.000"  technically valid, but should be avoided cos it is confusing
      ```

* Small Decimal values

  * for any languages that use IEEE 754 standard , (js included)

    * 0.1+0.2===0.3;   //false

  * Use `Number.EPSILON` to round off small errors.

    * ```javascript
      function numbersCloseEnoughToEqual(n1,n2) {
      	return Math.abs( n1 - n2 ) < Number.EPSILON;
      }

      var a = 0.1 + 0.2;
      var b = 0.3;

      numbersCloseEnoughToEqual( a, b );					// true
      numbersCloseEnoughToEqual( 0.0000001, 0.0000002 );	// false
      ```

  * Polyfill for pre-ES6:

    * ```javascript
      if (!Number.EPSILON) {
      	Number.EPSILON = Math.pow(2,-52);
      }
      ```

* Safe Integer Ranges

  * maximum integer that exist in js:  2^53 - 1 a.k.a 9007199254740991 a.k.a   `Number.MAX_SAFE_INTEGER`
  * minimum integer that exist in js : -9007199254740991 a.k.a `Number.MIN_SAFE_INTEGER`
  * The main way that JS programs are confronted with dealing with such large numbers is when dealing with 64-bit IDs from databases, etc. 64-bit numbers cannot be represented accurately with the `number` type, so must be stored in (and transmitted to/from) JavaScript using `string` representation.

* Testing for Integers

  * test whether a number is an interger :

    * ```
      Number.isInteger( 42 );		// true
      Number.isInteger( 42.000 );	// true
      Number.isInteger( 42.3 );	// false

      ```

  * polyfill for pre-ES6

    * ```javascript
      if (!Number.isInteger) {
      	Number.isInteger = function(num) {
      		return typeof num == "number" && num % 1 == 0;
      	};
      }
      ```

  * test whether a number is a safe integer

    * ```javascript
      Number.isSafeInteger( Number.MAX_SAFE_INTEGER );	// true
      Number.isSafeInteger( Math.pow( 2, 53 ) );			// false
      Number.isSafeInteger( Math.pow( 2, 53 ) - 1 );		// true
      ```

  * polyfill for pre-ES6

    * ```javascript
      if (!Number.isSafeInteger) {
      	Number.isSafeInteger = function(num) {
      		return Number.isInteger( num ) &&
      			Math.abs( num ) <= Number.MAX_SAFE_INTEGER;
      	};
      }
      ```

* 32-bit (Singed) Integers

  * to force a number value in `a` to a 32-bit signed interger value, use `a|0` 

* Special Values

  * Non-valuable Values

    * `undefined` value: undefined, type: undefined
    * `null` value : null, type: null

  * Undefined

    * dont overwrite `undefined` no matter under what kind of circunstances

    * another way to create `undefined` value is using `void` operator

      * ```javascript
        var a = 42;

        console.log( void a, a ); // undefined 42
        ```

      * other ways of using void 

  * Special Numbers

    * using one number one non-number under one mathematic operation will give you `NaN` value

      * ```javascript
        var a = 2 / "foo";		// NaN

        typeof a === "number";	// true
        ```

    * **`NaN` is an invalid number, an failed number, an bad number, but it is still a number.** (see above snippet)

    * **`NaN`is never equals to another NaN, and it is never equals to itself** 

      * ```javascript
        var a = 2 / "foo";

        a == NaN;	// false
        a === NaN;	// false
        ```

    * how to check whether a number is `NaN` or not?

      * ```
        if (!Number.isNaN) {
        	Number.isNaN = function(n) {
        		return n !== n;
        	};
        }
        ```

      * pre-ES6 fix

      * ```javascript
        //polyfill 1
        ```


        if (!Number.isNaN) {
        	Number.isNaN = function(n) {
        		return (
        			typeof n === "number" &&
        			window.isNaN( n )
        		);
        	};
        }
    
        var a = 2 / "foo";
        var b = "foo";
    
        Number.isNaN( a ); // true
        Number.isNaN( b ); // false -- phew!
        ```
    
      * ```javascript
        //polyfill 2
    
        if (!Number.isNaN) {
        	Number.isNaN = function(n) {
        		return n !== n;
        	};
        }
        ```
    
    * in js numbers that are divided by 0 will give you this result :
    
      * ```javascript
        var a = 1/0;  //Infinity
        var b = -1/0;  //-Infinity
        ```
    
      * `-Infinity` (aka `Number.NEGATIVE_INFINITY`) results from a divide-by-zero where either (but not both!) of the divide operands is negative.
    
      * According to the specification, if an operation like addition results in a value that's too big to represent, the IEEE 754 "round-to-nearest" mode specifies what the result should be. So, in a crude sense, `Number.MAX_VALUE + Math.pow( 2, 969 )` is closer to `Number.MAX_VALUE` than to `Infinity`, so it "rounds down," whereas `Number.MAX_VALUE + Math.pow( 2, 970 )` is closer to `Infinity` so it "rounds up".
    
    * in js there is a +0 and a -0.
    
    * additive and subtractive operation cannot give you -0.
    
    * **converting -0 to string will give you ''0" **
    
      * ```javascript
        var a = 0 / -3;
    
        // (some browser) consoles at least get it right
        a;							// -0
    
        // but the spec insists on lying to you!
        a.toString();				// "0"
        a + "";						// "0"
        String( a );				// "0"
    
        // strangely, even JSON gets in on the deception
        JSON.stringify( a );		// "0"
        ```
    
    * **converting from string to number will always give you -0**
    
      * ```javascript
        +"-0";				// -0
        Number( "-0" );		// -0
        JSON.parse( "-0" );	// -0
        ```
    
    * **comparison operator is configured  to lie to you as well (tells you 0 and -0 equal to each other)**
    
      * ```javascript
        var a = 0;
        var b = 0 / -3;
    
        a == b;		// true
        -0 == 0;	// true
    
        a === b;	// true  !!!!!!
        -0 === 0;	// true  !!!!!!
    
        0 > -0;		// false
        a > b;		// false
        ```
    
    * how to distinguish -0 from 0?
    
      * ```javascript
        function isNegZero(n) {
        	n = Number( n );
        	return (n === 0) && (1 / n === -Infinity);
        }
    
        isNegZero( -0 );		// true
        isNegZero( 0 / -3 );	// true
        isNegZero( 0 );			// false
        ```

  * Special Equality

    * in ES6 we use `Object.is()` to test whether a value is `NaN` or `-0`

    * ```javascript
      var a = 2 / "foo";
      var b = -3 * 0;

      Object.is( a, NaN );	// true
      Object.is( b, -0 );		// true

      Object.is( b, 0 );		// false
      ```

    * pre-ES6 polyfill

    * ```javascript
      if (!Object.is) {
      	Object.is = function(v1, v2) {
      		// test for `-0`
      		if (v1 === 0 && v2 === 0) {
      			return 1 / v1 === 1 / v2;
      		}
      		// test for `NaN`
      		if (v1 !== v1) {
      			return v2 !== v2;
      		}
      		// everything else
      		return v1 === v2;
      	};
      }
      ```

* Value VS Reference

  * **In JavaScript, there are no pointers, and references work a bit differently. You cannot have a reference from one JS variable to another variable. That's just not possible.**

  * A reference in JS points at a (shared) **value**, so if you have 10 different references, they are all always distinct references to a single shared value; **none of them are references/pointers to each other.**

  * Moreover, in JavaScript, there are no syntactic hints that control value vs. reference assignment/passing. Instead, the *type*of the value *solely* controls whether that value will be assigned by value-copy or by reference-copy.

  * primitive values are passed by value copy

  * objects (including arrays ,functions) are passed by reference copy

  * ```javascript
    var a = 2;
    var b = a; // `b` is always a copy of the value in `a`
    b++;
    a; // 2
    b; // 3
    ```

  * b is assigned another copy of value 2. a is untouched

  * ```javascript
    var c = [1,2,3];
    var d = c; // `d` is a reference to the shared `[1,2,3]` value
    d.push( 4 );
    c; // [1,2,3,4]
    d; // [1,2,3,4]
    ```

  * since we changed the object value by adding 4 at the end of it, all the references changed accordingly 

  * ```javascript
    var a = [1,2,3];
    var b = a;
    a; // [1,2,3]
    b; // [1,2,3]

    // later
    b = [4,5,6];
    a; // [1,2,3]
    b; // [4,5,6]
    ```

  * `b=a` means we assigned another copy of [1,2,3] to b. so now b is [1,2,3]

  * `b=[4,5,6]` b is assigned a reference to a different array of values. 

  * ​

  * ​

  * ​

  * **Here are some of my own understanding about the above snippet: **

  * ```javascript
    var a = 2;
    var b = a;

    //in javascript, when you assign a number to a variable, the number does not belong to the variable. 
    //the number itself is a "seperate" primitive value, what got assigned to a, is a copy of that value. and this copy is an object. 
    //so,in this snippet there are actually 3 value of 2.
    //1st: the primitive value 2
    //2nd: a copy of 2 that got assigned to a     (var a = 2;)
    //3rd: another copy of 2 that got assigned to b   (var b = a;)

    b++;
    //because you are value copying primitive number 2, so changing b does not affect the value of a
    ```

  * ```javascript
    var c = [1,2,3];
    var d = c; // `d` is a reference to the shared `[1,2,3]` value
    d.push( 4 );
    c; // [1,2,3,4]
    d; // [1,2,3,4]

    //in this snippet, both c and d are references of the same array [1,2,3] therefore when one is changed, all is changed
    ```

  * ```javascript
    var a = [1,2,3];
    var b = a;
    a; // [1,2,3]
    b; // [1,2,3]

    // later
    b = [4,5,6];
    a; // [1,2,3]
    b; // [4,5,6]

    //b=a created another reference of [1,2,3]
    //b=[4,5,6] , b is assigned another reference , a new reference that is [4,5,6]
    ```

  * ```javascript
    function foo(x) {
    	x.push( 4 );
    	x; // [1,2,3,4]

    	// later
    	x = [4,5,6];
    	x.push( 7 );
    	x; // [4,5,6,7]
    }

    var a = [1,2,3];

    foo( a );

    a; // [1,2,3,4]  not  [4,5,6,7]

    ///in the above snippet there was a moment that both a and x are pointing at the same value, [1,2,3,4] but after x=[4,5,6] , the value in a does not change, because we are reference copying the arrays here. so , changing the value of one does not affect another
    ```

  * ​


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

