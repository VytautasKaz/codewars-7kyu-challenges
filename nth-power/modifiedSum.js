function modifiedSum(a, n) {
    let arrayPower = a.map(function(pwr){
      return Math.pow(pwr, n);
    }).reduce(function (a, b){
      return a + b;
    }, 0);
    let arraySum = a.reduce(function (x, y){
      return x + y;
    }, 0);
    return arrayPower - arraySum;
  }