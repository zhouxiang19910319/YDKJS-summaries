# this and object prototypes

### Chapter 1 this or that

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

### Chapter 4 Mixing up "Class" Objects

- the relationship between "class" "instance" "method"
  - A class is a blue-print. To actually *get* an object we can interact with, we must build (aka, "instantiate") something from the class. The end result of such "construction" is an object, typically called an "instance", which we can directly call methods on and access any public data properties from, as necessary.
  - **This object is a copy** of all the characteristics described by the class.
  - you don't generally use an object instance to directly access and manipulate its class, but it is usually possible to at least determine *which class* an object instance comes from.
- In a similar way, once a child class is defined, it's separate and distinct from the parent class. The child class contains an initial copy of the behavior from the parent, but can then override any inherited behavior and even define new behavior.
- However, in JS, it's the reverse -- it's actually more appropriate to think of the "class" belonging to the constructor (the `Foo.prototype...` type references). Since in JS the relationship between child and parent exists only between the two `.prototype` objects of the respective constructors, the constructors themselves are not directly related, and thus there's no simple way to relatively reference one from the other.
- When classes are inherited, there is a way **for the classes themselves** (not the object instances created from them!) to *relatively*reference the class inherited from, and this relative reference is usually called `super`.
- the child class is merely given a copy of the inherited behavior from its parent class. If the child "overrides" a method it inherits, both the original and overridden versions of the method are actually maintained, so that they are both accessible.
- Don't let polymorphism confuse you into thinking a child class is linked to its parent class. A child class instead gets a copy of what it needs from the parent class. **Class inheritance implies copies.**
- ​





