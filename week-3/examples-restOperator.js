//The rest operator allows you to take items from an array 
//and use them to create a separate sub-array. 

const top7 = [
    "The Colosseum",
    "The Roman Forum",
    "The Vatican",
    "Trevi Fountain",
    "The pantheon",
    "Piazza Venezia",
    "The Palatine Hill"
]

//desctructuring
const [] = top7;
const [first, second, third, ...secondVisit] = top7;
console.log(secondVisit);


//can also use rest operator in a function
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1,46,89,35,79);
console.log(shoppingCart);