// Short-Circuit
                    
// false            |
// 0                |
// ''               |- > Estos valores se conocen como ´Falsy´
// null             |
// undefined        |
// NaN              |


/* Opreador OR: devuelve el primer operando truthy; si ´nombre´ es truthy,
                devuelve ´nombre´ sin evaluar ´Anonimo´. Si ´nombre´ es falsy,
                entonces evalúa y devuelve ´Anonimo´.*/
let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';
console.log(username);

/*Operador AND: devuelve el primer operando falsy; si ´fn1´ es falsy, devuelve ´fn1´
                sin evaluar ´fn2´. Si ´fn1´ es truthy, entonces evalúa y devuelve ´fn2´. */
function fn1() {
    console.log('soy funcion 1');
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return false;
}

let x = fn1() && fn2();