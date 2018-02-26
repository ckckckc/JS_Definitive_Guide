function scope(scope) {
  console.log(scope);           // gloal
  var scope = "local";
  console.log(scope);           // local
  return scope;
}

console.log(scope("global"));   // local
console.log("\n");

var scope = "global";

function outside() {
  var scope = "outside";
  function inside() {
    console.log(scope);             // 讀到的是 outside scope 的 outside
    // 注意這裡沒有 var
    scope = "inside";               // 把 outside scope 的 outside 改成 inside
    return scope;
  }
  return [scope, inside(), scope];  // [改之前為 outside, 改完後 return inside, local outside 已經是 inside]
}
console.log(scope);           // global
console.log(outside());       // [ 'outside', 'inside', 'inside' ]
console.log(scope);           // global

console.log("\n");

var scope2 = "global";

function outside2() {
  var scope2 = "outside";
  function inside() {
    console.log(scope2);             // 讀到的是內部尚未初始化的 local scope2 undefined
    // 注意這個 var
    var scope2 = "inside";           // nested scope2 為 inside
    return scope2;
  }
  return [scope2, inside(), scope2];  // [local outside, return inside, local outside]
}
console.log('scope2:');
console.log(scope2);          // global
console.log(outside2());       // [ 'outside', 'inside', 'outside' ]
console.log(scope2);          // global


console.log("\n");console.log("\n");


var scope3 = "global";

function outside3() {
  scope3 = "outside";
  function inside() {
    console.log(scope3);         
    // 注意這個 var
    scope3 = "inside";           
    return scope3;
  }
  return [scope3, inside(), scope3];  // [local outside, return inside, local outside]
}

console.log('scope3:');
console.log(scope3);          // inside => 但是在瀏覽器中會噴錯：尚未宣告
console.log(outside3());       // [ 'outside', 'inside', 'inside' ]
console.log(scope3);          // inside