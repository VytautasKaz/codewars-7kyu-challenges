function rowWeights(array){
    let unevenArray = [];
    let evenArray = [];
    let finalArray = [];
    for (i = 0; i < array.length; i++) {
      if (i % 2 !== 0){
        unevenArray.push(array[i]);
      } else {
        evenArray.push(array[i]);
      }
    }
    finalArray.push(evenArray.reduce(function (a,b){
      return a + b;
    }, 0));
    finalArray.push(unevenArray.reduce(function (a,b){
      return a + b;
    }, 0));
    return finalArray;
  }