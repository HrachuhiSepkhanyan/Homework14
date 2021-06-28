 function reverseString(str) {
     try {
         return str.split("").reverse().join("");
     } catch (error) {
         if (str !== typeof str) {
             throw new Error("something is false in string")
         }
     }
 }
 console.log(reverseString("Hello"));