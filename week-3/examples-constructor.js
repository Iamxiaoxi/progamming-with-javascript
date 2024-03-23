// to use a constructor function, we prepend it with the operator new.
console.log(new Date()); //2024-03-23T15:35:32.414Z

// static objects whose properties and methods can be accessed directly
// there will be no need for instances, aka no need for constructors
/*
There's no need to build an instance of the Math object 
since there would be nothing that needs to be stored in that 
specific object's instance.
*/

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`)
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream);
console.log(appleIcecream);

let apple = new String("apple");
console.log(apple);// an object

let pear = "pear";
console.log(pear);// a string literal