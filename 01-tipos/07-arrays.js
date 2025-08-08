let animales = ['chanchito', 'caballo']; // <- array literal
console.log(animales);
console.log(animales[0]);
animales[2] = 'dragon';
console.log(animales);

animales [10] = 'pez';
console.log(animales[7]);

console.log(typeof animales);

/*Nota: Segun el operdador de "typeof" los array son un tipo de dato "Objects"
        lo que significa que podemos acceder a sus propiedades, ademas de poder
        acoplar o implementar variedad metodos en el "array". */

console.log(animales.length);