function findDeletedNumber(arr, mixArr) {
    let splitArr = arr.reduce(function(a, b){
      return a + b;
    }, 0)
    let splitMixArr = mixArr.reduce(function(a, b){
      return a + b;
    }, 0)
    let missingNumber = splitArr - splitMixArr;
    return missingNumber;
  }