// bit: Es un digito en binario que puede tomar el valor de 0 y 1
// Byte: Es una conbinacion de 8 bits, en un byte se pueden almacenar numeros, caracteres, etc.
//-------------------------------------

// Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Binario: 0, 1

// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7

/*El operador de Bitwise OR no seleccionara entre uno u otro,
  sino que tomara la cadena de Byte y de ahí crearia un nuevo
  Byte, en base a que uno de los digitos tenga un ´1´ dentro de
  su cadena */

console.log(1 | 3); // 00000011  -> 3
console.log(1 | 4); // 00000101  -> 5
console.log(3 | 5); // 00000111  -> 7

/*El operador de Bitwise AND o seleccionara entre uno u otro,
  sino que tomara la cadena de Byte y de ahí crearia un nuevo
  Byte, en base a que ambos bits sean un ´1´ para que marquen 
  como un ´1´. */

console.log(1 & 3); // 000000001
console.log(1 & 4); // 000000000
console.log(3 & 5); // 000000001
