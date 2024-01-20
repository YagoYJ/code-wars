function isSquare(n){
    const square = Math.sqrt(n);
    return Math.round(square) === square;
}

const result = isSquare(4)
console.log("🚀 ~ file: 04-square.js:6 ~ result:", result)
