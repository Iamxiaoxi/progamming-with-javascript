// how to join arrays, objects using the rest operator

//join arrays
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]//concatenate
console.log(fruitsAndBerries);

//join objects
const flying = {wings: 2}
const car = {wheels: 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar)

// add new members to arrays without using push()
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//convert a string to an array
const greeting = "hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

//copy an array into a separate array
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

