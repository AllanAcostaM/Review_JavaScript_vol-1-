// Personaje de TV
let nombre = "Goku";
let anime = "Dragon Ball Z"
let edad = 35;

let personaje = {
    nombre: "Goku",
    anime: "Dragon Ball Z",
    edad: 35, 
}; // <- Objeto literal 

console.log(personaje);
console.log(personaje.edad);
console.log(personaje["anime"]);

personaje.edad = 36;

let llave = "edad"
personaje[llave] = 37

delete personaje.anime;

console.log(personaje);
