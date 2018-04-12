var someFun = function f() {
  // console.log(f())
  console.log(3)
};

someFun();

var someObj = {
  fun: function () {
    // console.log(this);
  }
};

someObj.fun();

function someFun() {
  console.log(1)
}

function someFun() {
  console.log(2)
}

// someFun();
someFun()

function someFun2() {
  console.log('someFun2')
  // someFun2();
}

console.log(someFun2())

console.log('someFun3', someFun3)

var someFun3 = function() {};

console.log('someFun3', someFun3)


function calculateCircleWaterBuoyancy(radius) {
  const WATER_DENSITY = 1000,
        GRAVITY_ACCELERATION = 9.81;
  const waterWeight = calculateWaterWeight(calculateCircleValumn(radius));

  function calculateCircleValumn(r) { 
    return 4/3*Math.PI*Math.pow(r, 3); 
  } 

  function calculateWaterWeight(valumn) { 
    return valumn * WATER_DENSITY * GRAVITY_ACCELERATION;
  }

  return waterWeight;
}


console.log(calculateCircleWaterBuoyancy(1));


function hypotenuse(a, b) {
  function square(x) { 
    // b = 2; 他改得到接著要執行的 b 
    return x*x; 
  } 
  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(1, 1));