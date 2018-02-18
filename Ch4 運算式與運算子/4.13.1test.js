var username = "!";

var greeting = "hello " + (username ? username : "there");

var greetings = "hello " + (username || "there");

console.log(greeting);

console.log(greetings);

