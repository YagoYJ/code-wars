function countBits(n) {
    const binary = n.toString(2)
    
    const bitCount = String(binary).split("").filter(item => item === "1").length

    return bitCount
}

const result = countBits(7)
console.log("🚀 ~ file: 05-bit-counting.js:6 ~ result:", result)
