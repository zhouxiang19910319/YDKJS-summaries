- When coding in JS, use as little global scope variable as possible. Instead use different functions and keep most (if not all) of the variables inside those functions, to prevent unnecessary data leak to the main scope of your code.

- Use function expression instead of function declaration to keep your code's global scope even more cleaner.

- Always name your function expression.

- Function declaration can be hoisted, function expression cannot.

- If function declaration and variable declaration co-exist in your code, function declaration get hoisted 1st.

- Declaration are hoisted, but assignments are not. 

- Do not declare function inside blocks. It is a bad practice.

- In javascript, if you use the `function` keyword inside another function, you create a closure.

- in this code snippet, we declare `i` directly inside the for loop because our intent is to use `i` only within context of that for loop. But, when in reality in js, variables actually scope itself to the enclosing scope. (function of global)

  - ```javascript
    for(var i=0;i<10;i++){console.log(i);}
    ```

- example of **fake block scoping**

  - ```javascript
    var foo = true;
    if(foo){
      var bar = foo*2;
      bar = something(bar);
      console.log(bar);
    }
    ```

  - We hope that `bar` only can be accessed within the `if` loop but in reality it will always belongs to the enclosing scope. (global in this case) 

- Use  `let` `const` to create "block scoping" in js.

  - You should never use `with`  to create block scoping in js. Bad practice.

  - explicit code is preferable over implicit code , using `{}` to wrap around code to create explicit code. 

    - ```javascrp
      var foo = true;
      if(foo){
        {
          let bar = foo*2;
          bar = something(bar);
          console.log(bar);
        }
      }
      console.log(bar); //ReferenceError
      ```

  - Using explicit blocks in garbage collection: 

    - ```javascript
      function process(data){...}
      {
        let someReallyBigData= {...};
        process(someReallyBigData);
      }
      var btn = document.getElementId("my_Button");
      btn.addEventListener("click",function click(evt){console.log("button clicked");},/*capturingPhase=*/false);
      ```

  - `let`

    - ```javascript
      for(let i=0;i<10;i++){console.log(i);}
      console.log(i); //ReferenceError
      ```

    - ```javascript
      {
        let j;
        for(j=0;j<10;j++){
          let i=j;
          consloe.log(j);
        }
      }
      ```

  - `const` create blockscoped variable. 

- Closure is when a function is able to remember and access its lexical scope even when taht function is executing outside its lexical scope. 