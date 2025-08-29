// Cuales son los pares



let i = 2;

while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++
}

/*Nota: A diferencia de ´de-while´, ´while´ se ejecuta al principio del fragmento si la condicion
        se cumple, pero mientras no se cumpla la condicion, el resto de codigo ejecuta logica para 
        que la primera condicion de la sentencia ´while´ se cumpla. */


// do {
//     if (i % 2 == 0) {
//         console.log('Numero par', i);
//     }
//     i++
// } while (i < 2);

/*Nota: A diferencia de ´while´, ´do-while´ se ejecuta en el ultimo fragmento de codigo
        una vez se analice la logica dentro de la sentencia ´do´, se verificara la condicion que
        tenga while */