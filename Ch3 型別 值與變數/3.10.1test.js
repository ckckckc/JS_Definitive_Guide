function test(o) {
  var i = 0;
  if (typeof o == "object") { 
    var j = 0;
    for(var k=0; k < 10; k++) { 
      console.log(k);
    }
    console.log(k);
  }

  console.log(j);
}

test({});

console.log("\n");


var scope = "global";
function f() {
  console.log(scope);
  var scope = "local";
  console.log(scope);
}

f();

console.log(this);


var scope2 = "global";
function f2() {
  console.log(scope2);
  scope2 = "local";
  console.log(scope2);
}

console.log(scope2); 

f2();

console.log(scope2);