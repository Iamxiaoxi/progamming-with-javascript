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

//polymorphism
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

bicycle.bell()
door.bell()
