let sumSquareEvenRootOdd = ns => {
    let total = 0;
    for (let i = 0; i < ns.length; i++) {
      if (ns[i] % 2 === 0) {
        total += (Math.pow(ns[i], 2));
      } else {
        total += (Math.sqrt(ns[i]));
      }
    }
    return parseFloat(total.toFixed(2));
  }