//  let obj = {
//     a:1,
//     b:"naam"
//  }

//  console.log(obj);

//  let animal = {
//     eats: true
//  }
//  let rabbit = {
//     jumps: true
//  }

//  rabbbit.__proto__=animal;  // sets rabbit.[[Prototype]] = animal


// agar koi bhi object ke ander koi bhi property add karni hai toh voh tarika hai prototype
// Aaise prototype bana sakte hai hum
class Animal {
    constructor(name) {
        // this se hum object ke ander property kar sakte hai hum
        this.name = name
        console.log("object is created....")
    }
    eats() {
        console.log("eating food")
    }
    jumps() {
        console.log("jumping")
    }
}

// extends se animal ki sari property Lion me aa jayengi
class Lion extends Animal {
    constructor(name) {
        // animal wala constructor chalane ke liye super ka use karna padega
        super(name);
        this.name = name
        console.log("object is created and he is line....")
    }
    eats() {
        super.eats()
        // super.eats() se l.eats par call lagne par dodo aa jayenge
        console.log("eating food and roar")
        // eats ko change bhi kar sakte hai
    }
}

let a = new Animal("Bunny");
console.log(a);
// console me a.name kare par bunny aa jayega


let l = new Lion("Shera")
console.log(l);
