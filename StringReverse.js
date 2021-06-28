function reverseString(s) {
    try {
        (s = s.split("").reverse().join(""));
        // console.log(s);
        console.log(s.split("").reverse().join(""));

    } catch (error) {
        if (typeof s !== "string") {
            throw new Error("s.split is not a function");
        }
    }


}
reverseString("Hrachuhi")