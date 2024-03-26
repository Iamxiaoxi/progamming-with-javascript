`Hello, World!`

// With template literals, an expression can be embedded in a placeholder. 
//A placeholder is represented by ${}, with anything within the curly brackets 
//treated as JavaScript and anything outside the brackets treated as a string:  

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`)

//  using template literals allows programmers to embed variables 
//directly in between the backticks

//without `` we have to write the above code as follows:
var greet1 = "Hello";
var place1 = "World";
console.log(greet1 + " " + place1 + "!");

//template literal can also span multiple lines
`Hello,
World
!
`
//but string literals  cannot do the same
//"Hello,
//World"
//will throw an error

console.log(`${1+1+1+1+1} stars!`);

