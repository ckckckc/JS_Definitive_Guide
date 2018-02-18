var a = [1, 2, 3, 4, 5];

a: for (var i = 0, len = a.length ; i < len ; i ++){
  if (a[i] === 2) continue a;
  if (a[i] === 4) break a;
  console.log(a[i]);
}


var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}

// var allPass = true;
// var i, j;

// top:
// for (i = 0; items.length; i++)
//   for (j = 0; j < tests.length; i++)
//     if (!tests[j].pass(items[i])){
//       allPass = false;
//       break top;
//     }