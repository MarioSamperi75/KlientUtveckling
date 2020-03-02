// 1 objektliteral
let car = {};
console.log(car);

// 2 constructor
let person = new Object();
console.log (person);

// Egenskaper
person.name ="Mario"
person.age= 44;

//Metoder
person.info = function() {
    return this.name + "är " + this.age + " år gammal";
}


//skriv ut data från objekt
console.log(person.name);
console.log(person.age);

//Anropa en metod
console.log(person.info());

// skapa flera objekt med en konstruktor
//Constructor funktion
// class syntax
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.children = [];
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
}



let mario = new Person("Mario", 44);
let ellen = new Person("Ellen", 41);
let sofia = new Person("Sofia", 3);
let alexander = new Person("Alexander", 1);

//sofia ="non è un oggetto"

console.log(sofia);

//const for att inte kunna ändra typ

familien = [mario, ellen, sofia];
console.log(familien);

mario.children.push(sofia, alexander);

console.log(mario.children);


