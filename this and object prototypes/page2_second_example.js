function identify(context){
	return context.name.toUpperCase();
}
function speak(context){
	var greeting ="hello i am "+identify(context);
	console.log(greeting);
}

var me = {name: "Kyle"};
var you = {name: "Reader"};

identify(you);
speak(me);