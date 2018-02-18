var lt = "ABC";
var lf = undefined;

var rt = {};
var rf = 0;

console.log(lt || rt);  // "ABC"
console.log(lt || rf);  // "ABC"

console.log(lf || rt);  // {}
console.log(lf || rf);  // 0
