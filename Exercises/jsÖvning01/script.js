
//let minuter = prompt("Ange antalet minuter per månad");
//let konstnad = prompt("anger konstnaden per minut");
//let produkt = minuter + konstnad;
//alert("Summa: " + summa);
// OBS! Vi måste konvertera string till number
//produkt = Number(minuter) * Number(konstnad);
//alert("Summa efter konvertering: " + produkt);
//document.getElementById('demo').innerHTML = "du måste betala " + produkt;

/*Övning 2
• Skapa ed program i JavaScript som läser in ed namn via en
prompt.
• Skicka namnet 6ll en funk6on som returnerar en
hälsningsfras, t.ex.
”Hej namn. Varmt välkommen!”.
• Visa meddelandet på webbsidan.
(Alltså i body, ej alert eller console).*/




/*let person = prompt("Please enter your name");

function hej (name) {
    return "Velkommen " + name;
}

document.getElementById('demo').innerHTML = hej(person);*/

/*alert("Hello " + person + "!");*/

/*let tal1 = prompt("ange tal1");
let tal2 = prompt("ange tal2");
let medelvärdet = (Number(tal1) + Number(tal2))/2; 
alert("Medelvärdet: " + medelvärdet + "!");

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

let cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);*/

/*let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
cars.sort();
console.log(cars);*/ 

/*function getSize (width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;

}

var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];

console.log("area: " + areaOne);
console.log("VOlym: " + volumeOne);*/


/*Övning 4
• Skriv ett program som läser in en
varas pris, inkl. moms.
• Programmet skall också läsa in
momssatsen som skall vara ett helt
antal procent.
• Programmet skall beräkna dels
varans pris exkl. moms och dels
momsen.
• De två resultaten skall visas i en
dialogruta (alert).*/




let pris = prompt("Ange priset");
let momsPr = prompt("anger moms (helt antal procent): " );
let moms = Number(pris) * Number(momsPr)/100;
let utanMoms = Number(pris) - moms;
//alert ("Moms: " + moms);
//alert ("Pris utam moms: " + utanMoms)
document.getElementById('demo').innerHTML = "Moms: " + moms + " <br> Pris utan moms: " + utanMoms;
