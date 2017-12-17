function foo(){console.log("name: "+ this.name);}

var obj={name:"obj"},
		obj2={name:"obj2"},
		obj3={name:"obj3"};

var fooOBJ=foo.softBind(obj);
fooOBJ();

obj2.foo=foo.softBind(obj);
obj2.foo();

fooOBJ.call(obj3);

setTimeout(obj2.foo,10);


		