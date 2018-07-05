# ES6 and Beyond

## 1. Versioning

## 2. Transpiling

* polyfill for `Object.is()`

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

* "ES6 Shim" (<https://github.com/paulmillr/es6-shim/>)

## 3. Block Scoped Declaration

### 3.1 let declarations

* `let` let you create declaration that can bound to any block `{}`

* `var` always attached to the parent/enslosing function/global scope

* ```javascript
  var a = 2;
  
  {
  	let a = 3;
  	console.log( a );	// 3
  }
  
  console.log( a );		// 2
  ```

* always use block {} to wrap around block scoped code (like in the snippet above)

* always put the `let` declaration(s) at the very top of that block.

* If you have more than one to declare, I'd recommend using just one `let`.

* there are two ways of styling let declarations

  1. put the `let` on the same line as the opening `{`, to make it clearer that this block is only for the purpose of declaring the scope for those variables.

* ```javascript
  {	let a = 2, b, c;
  	// ..
  }
  ```

  2. a more **explicit** way of styling let declaration 

  ```javascript
  let (a = 2, b, c) {
  	// ..
  }
  ```

     * 1 and 2 are **both** explicit way of doing let declaration, but 2 is the most explicit way of doing it
     * 2 has **yet** been standardized thus included in ES6

```javascript
let a = 2;

if (a > 1) {
	let b = a * 3;
	console.log( b );		// 6

	for (let i = a; i <= b; i++) {
		let j = i + 10;
		console.log( j );
	}
	// 12 13 14 15 16

	let c = a + b;
	console.log( c );		// 8
}
```
* Unlike traditional var-declared variables, which are attached to the entire enclosing function scope regardless of where they appear, let declarations attach to the block scope but are not initialized until they appear in the block. 

* You can only access `let` variables **after ** its declaration. NOT before. 

```javascript
{
	console.log(a);	// undefined
	console.log(b);	// ReferenceError!
	var a;
	let b;
    console.log(b); //undefined
}
```
* one gotcha------`typeof` behaves differently with TDZ variables than it does with undeclared (or declared!) variables. For example:
```javascript
{
	// `a` is not declared
	if (typeof a === "undefined") {
		console.log( "cool" );
	}

	// `b` is declared, but in its TDZ
	if (typeof b === "undefined") {		// ReferenceError!
		// ..
	}

	// ..

	let b;
}
```
