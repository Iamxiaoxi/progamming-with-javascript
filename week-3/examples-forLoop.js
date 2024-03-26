const car = {
    speed: 100,
    color: "blue"
}

for (prop of car) {
    console.log(prop)
} // error: car is not iterable

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
console.log(Object.entries(car4))
