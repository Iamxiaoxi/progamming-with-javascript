// an example of how the try-catch blocks work

try {
    console.log(a + b)
} catch(err) {
    console.log(err);
    console.log("There was an error")
    console.log("The error was saved in the error log")
}
console.log("My program did not stop")

// an example of how to throw a new error/
try {
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log("There was a Reference Error")
}
console.log("My program did not stop")