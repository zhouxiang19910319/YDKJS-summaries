#Scope and Closure

* When coding in JS, use as little global scope variable as possible. Instead use different functions and keep most (if not all) of the variables inside those functions, to prevent unnecessary data leak to the main scope of your code.
* Use function expression instead of function declaration to keep your code's global scope even more cleaner.
* Always name your function expression.
* Function declaration can be hoisted, function expression cannot.
* If function declaration and variable declaration co-exist in your code, function declaration get hoisted 1st.
* Do not declare function inside blocks. It is a bad practice.
* In javascript, if you use the `function` keyword inside another function, you create a closure.

# this and object prototypes

* 