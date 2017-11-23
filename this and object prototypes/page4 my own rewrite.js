//declare function foo
function foo(num){
	console.log("foo: "+num);
}
//create initial state of foo.count
foo.count=0;

var i;
for(i=0;i<10;i++){
	if (i>5) {foo(i);
			  //make it counts!
			  foo.count++;}
			}

console.log(foo.count);