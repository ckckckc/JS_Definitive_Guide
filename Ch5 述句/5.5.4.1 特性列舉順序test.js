var inheritedObj = {
  "xx" : 1,
  "yy" : 2,
  "zz" : 3
};

var parentObj = {
  "x" : 1,
  "y" : 2,
  "z" : 3,
  "inheritedObj" : inheritedObj
};



var obj = {
  "a" : 1,
  "b" : 1,
  "c" : 1,
  "subObj" : {
    "e" : 1,
    "f" : function(){ console.log("property in subObj f");},
    "subSubobj" : {
      "i" : 1,
      "j" : 1
    },
    "inheritedObj" : inheritedObj,
    "parentObj" : parentObj,
    "g" : 1,
    "h" : 1,
  },
  "d" : 1,
};



function listProperties(obj) {
  if (!obj) return;

  for (var i in obj) {
    if (typeof obj[i] === "object") {
      console.log(i);
      listProperties(obj[i]);
    }
    else {
      console.log(i);
    }
  }
}

function getDeepClonedObj(obj) {
  if (!obj) return;

  var output = {};
  for (var i in obj) {
    output[i] = typeof obj[i] === "object"
              ? getDeepClonedObj(obj[i])
              : obj[i];
  }
  return output;
}

listProperties(obj);
// var deepCopiedObj = getDeepClonedObj(obj);
// var obj2 = obj;
// console.log(deepCopiedObj);
// console.log(obj2 === obj);
// console.log(deepCopiedObj === obj);


