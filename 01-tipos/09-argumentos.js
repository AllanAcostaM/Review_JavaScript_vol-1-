function suma(a, b) { /* En esta function "suma()" se referencia una variable ("a") 
                         que es usada dentro de la function como ´parametro´*/      
   console.log(arguments); // <- "arguments" es una variable especial para poder acceder a todos los valores (parametros) declarados en la ´function´
    return a + b;
}

suma(10) /* Aqui declaramos la funcion y convertimos el parametro 
            (la varibale "a" que no tenia valor) en un ´argumento´ 
            (darle valor a la variable "a"), en este caso el valor es de 10 */

let resultado = suma(10, 6, 1, 3, 2);
console.log(resultado);

console.log(typeof suma);
