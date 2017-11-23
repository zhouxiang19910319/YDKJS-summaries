//A few examples of usage of hard binding

// 2nd example


function foo(something){
	console.log(this.a,something);
	return this.a+something;
}//carry out adding of 2 numbers



//simple bind helper
function bind(fn,obj){
	return fn.apply(obj,arguments);
}
var obj={a:2};
var bar=bind(foo,obj);


var b=bar(3);

console.log(b);