var person = {
	firstName : "John",
	lastName : "Doe",
	fullName : function(){return this.firstName + " " + this.lastName;}
}

var myObject = {
	firstName : "Mary",
	lastName:"Doe"}

person.fullName.call(myObject);


//
// so in this code snippet we used a inner function and then later sub in different arguments into that function to display
// different names, this is one of the scenarios that how we use function.prototype.call 
// is this correct? 