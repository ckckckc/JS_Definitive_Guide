var a = 0;
var b = 0;

switch (a){
  case ++b:
    console.log("First case");
    break;

  case ++b:
    console.log("Sec case");
    break;

  case ++a:
    console.log("Third case");
    break;

  case a:
    console.log("Fourth case");
    break;

  case ++b:
    console.log("Fifth case");
    break;

  case ++b:
    console.log("Sixth case");
    break;

  case 0:
    console.log("Seventh case");
    break;

  default:
    break;
}

console.log(a);
console.log(b);


switch (""){
  case console.log("First case"):
    break;

  default:
    console.log("Default case");
    break;

  case console.log("Sec case"):
    break;

  case console.log("Third case"):
    break; 

  case console.log("Fourth case"):
    break;
}

console.log("\n");
console.log(console.log(1234));
