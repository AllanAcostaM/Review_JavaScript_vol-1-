// while        |
// do while     | -> Estos loops nos permiten iterar
// for          |

let animales = ['Chanchito feliz', 'Dragon', 'valentina'];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;

while (i < animales.length) {
    console.log(animales[i]);
    i++;
}