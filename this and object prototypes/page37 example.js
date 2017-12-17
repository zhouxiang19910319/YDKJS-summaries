var strPrimitive = "I am a string";
typeof strPrimitive; //"string"
strPrimitive instanceof String; //false

var strObject = new String("I am a string");
typeof strObject; //"object"
strObject instanceof String; //true

Object.prototype.toString.call(strObject); //[object String]