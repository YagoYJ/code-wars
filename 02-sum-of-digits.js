function digitalRoot(n) {
    const splittedNumbers = String(n).split("");

    const sumOfNumbers = splittedNumbers.reduce((prev, acc) => {
        return +prev + Number(acc);
    })
        
    if (sumOfNumbers >= 10) {
        return digitalRoot(sumOfNumbers)
    } else {
        return +sumOfNumbers;
    }
}

const result = digitalRoot(0)
console.log("🚀 ~ file: 02-sum-of-digits.js:16 ~ result :", result )
