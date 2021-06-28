function isPositive(a) {
    if (a > 0) {
        console.log("Yesssss")
    }
    if (a === 0) {
        throw new Error("Zero Error")
    }
    if (a < 0) {
        throw new Error("Negative Error")
    }
}
isPositive()