function factorialize (num) {
    let total = 1;
    if (num === 0) {
        return 1;
    } else {
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    }
    return total;
}
function strong (n) {
    let strongString = n.toString();
    let numbersArray = [];
    for (let i = 0; i < strongString.length; i++) {
        numbersArray.push(factorialize(strongString[i]));
    }
    let factorializedSum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        factorializedSum += numbersArray[i];
    }  
    if (factorializedSum === n) {
        return 'STRONG!!!!';
    } else {
        return 'Not Strong !!';
    }
}