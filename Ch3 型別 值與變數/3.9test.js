"use strict";
var http = require("http");
console.log(http);
for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++,j--) console.log(i*j); 
var o = {key1: 1234};
for(var p in o) console.log(p);
var k;
console.log(k); // undefined