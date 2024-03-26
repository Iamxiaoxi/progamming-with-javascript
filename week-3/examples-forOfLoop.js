// const car = {
//     speed: 100,
//     color: "blue"
// }

// for (prop of car) {
//     console.log(prop)
// } // error: car is not iterable

const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}

//Object.keys() receives an object as its parameter
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); //['speed','color']

//Object.values()
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//Object.entries() returns an array listing of both keys and values
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)) // [ ['speed', 400], ['color', 'magenta'] ]

//loop over any object's own property keys and values.
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

function testBracketDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else{
        dynamicKey = 'color';
    }
    
    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketDynamicAccess();


// the difference between for-of and for-in loops
const car = {
    engine: true
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar) {
    console.log(prop);
}

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}