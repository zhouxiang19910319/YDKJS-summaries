//function definations
function identify(){
	return this.name.toUpperCase();
}
function speak(){
	var greeting= "Hello I am "+identify.call(this);
	console.log(greeting);
}
// set up 2 names
var me={name: "Kyle"};
var you={name: "Reader"};
//call functions
identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);