(function(){
  "use strict";
  console.log(this === undefined);
  var obj = {
    a : function(){return 1;}
  };
  with (obj) {
    console.log(a());
  }
})();

// mdn 範例但是沒噴錯。。。
// "use strict";
// var o = { p: 1, p: 2 }; // !!! syntax error





// var hasStrictMode = (function(){
//   "use strict";
//   return this === undefined;
// })();

// console.log(hasStrictMode);

