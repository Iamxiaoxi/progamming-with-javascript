

//object
const car = {
    owner: 'john',
    color: 'red',

    engineOn: function() {
        console.log('engine is on');
    }
}

//array
//three methods: forEach, filter, map
const grades = [75, 95, 85, 80, 85];

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//a more  common usage looks like this:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//filter()
const nums = [0, 10, 20, 30, 40, 50];
nums.filter( function(num) {
    return num > 20;
})

//map method
nums.map( function(num) {
    return num / 10;
})

//map: any value could be the key

let bestBoxers = new Map();
bestBoxers.set(1, "The champion");
bestBoxers.set(2, "The runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log(bestBoxers.get(1));

//set: each item in the collection is unique
//set: quickly filter an array for unique members.
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);//{'apple', 'pear', 'plum'}

//other data structure:
//queues
//linked lists
//trees
//graphs

