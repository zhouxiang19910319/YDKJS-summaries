function foo(){console.log(this.a);}
var obj1={a:2,foo:foo}
var obj2={a:3,foo:foo}

obj1.foo();
obj2.foo();

obj1.foo.call(obj2);
obj2.foo.call(obj1);