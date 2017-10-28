# Scope and Closure

* When coding in JS, use as little global scope variable as possible. Instead use different functions and keep most (if not all) of the variables inside those functions, to prevent unnecessary data leak to the main scope of your code.
* Use function expression instead of function declaration to keep your code's global scope even more cleaner.
* Always name your function expression.
* Function declaration can be hoisted, function expression cannot.
* If function declaration and variable declaration co-exist in your code, function declaration get hoisted 1st.
* Do not declare function inside blocks. It is a bad practice.
* In javascript, if you use the `function` keyword inside another function, you create a closure.

# this and object prototypes

* In javascript, if you want to pass in an argument later when you call the function, the parameter of the function (in function declaration) cannot be blank.
* `this` keyword does not let a function get a reference to itself.
* `this` keyword does not, in any way, refer to a function's lexical scope.
* In javascript, to reference a function object from inside itself, `this` alone will not be sufficient. You need a reference to the function object via a lexical identifier.(a.k.a a variable) that points at it.
* For an anonymous function, there is no way to refer to the function object itself. That's why you should always name your functions.
* The scope "object" is not accessible to javascript code. It's an inner part of the engine's implementation.
* You cannot use `this` to break the rules of lexical scope. You cannot use `this` to let one function has access to another function's inner variable. You cannot use `this` reference to look something up in a lexical scope. It is not possible. Everytime you feel yourself trying to mix the lexical scope look-ups with `this` , remind yourself there is no bridge. 
* What's `this` then? 
  * `this` is not an author time binding but a runtime binding.
  * It is contextual based on the conditions of the function's invokation.
  * `this` binding has nothing to do with where a function is declared, but has instead, everything to do with the manner in which function is called.
  * When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from, (a.k.a the call-stack);how the function was invoked; what parameters were passed etc. One of the properties of the record is the `this` reference, which will be used for the duration of that function execution.
  * To answer the question : `this` is actually a binding that is made when a function is invoked, and what it references is dertemined entirely by the call-site where the function is called. 
* ​