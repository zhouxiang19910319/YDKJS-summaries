//A few examples of usage of hard binding

// 1st example


function foo(something){
	console.log(this.a,something);   //display the two numbers you got, one is this.a which is 2, 
																	 //second is an argument that is currently vacant and waiting for input
	
	return this.a+something;				 //add this 2 numbers up
}

var obj={a:2};//set the value of a

var bar=function(){return foo.apply(obj,arguments);}; //?

var b=bar(3);

console.log(b);