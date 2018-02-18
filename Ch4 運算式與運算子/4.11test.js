var data = [1, 3, 5];
var i = 0;

var dt = [1, 3, 5];
var k = 0;

// data[0] = data[0] * 2
console.log(data[i++] *= 2);          // 2

// dt[0] = dt[1] * 2
console.log(dt[k++] = dt[k++] * 2);   // 

console.log("\n");

console.log(i); // 1
console.log(k); // 2

console.log("\n");

console.log(data);  // [1, 4, 3]
console.log(dt);    // [1, 2, 4]