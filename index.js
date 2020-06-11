
var name = prompt("Welcome, what is your name?");
var firstLetter = name.slice(0,1);
var restOfName = name.slice(1, name.length);
var cap = firstLetter.toUpperCase();
alert("Hello " + cap + restOfName.toLowerCase() + "!");
