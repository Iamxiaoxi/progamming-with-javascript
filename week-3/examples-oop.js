
//basics of oop
//all objects derive from the super class called the Object class
class Animal {
    /*
    class code here
    */
}
//a more traditional way
var myDog = Object.create(Animal)
console.log(Animal)

//a more common way
var myDog = new Animal()
console.log(Animal)

//inheritance: base class and sub-classes。 keyword: extends
class Bird extends Animal {/*...class code here...*/}
class Eagle extends Bird {/*... class code here */}


// encapsulation: "hidden" code
"abc".toUpperCase();

//abstraction: generalized codes; abstracts the concept of what you try to do

//polymorphism: multiple forms
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please"
    }
}

bicycle.bell() // Ring, ring! Watch out, please!
door.bell() // "Ring, ring! Come here, please!"

function ringTheBell(thing) {
    console.log(thing,bell())
}
// now this same function is going to produce different result.
ringTheBell(bicycle) // Ring, ring! Watch out, please!
ringTheBell(door) // "Ring, ring! Come here, please!"

//another example of the same function behaves differently 
"abc".concat("def"); // 'abcdef'
["abc"].concat(["def"]); // ['abc', 'def']


//override some parts of the shared functionality
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
