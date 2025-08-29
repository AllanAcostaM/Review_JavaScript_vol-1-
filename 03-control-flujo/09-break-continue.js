let i = 0;

while (i < 6) {
    i++
    if (i === 2) {
        continue; // se encuentra el valor de 2 pero el flujo continua
    }
    if (i === 4) { 
        break; /* Una vez el indice encuentre el parecido a 4, el flujo se detiene y deja de
                  iterar hasta el valor de 6, ya que el ´break´ frena el flujo*/           
    }
    console.log(i);
}

/*Nota: Esta operacion de sentencias ´continue´ y ´break´ las puedo implementar en
        - for
        - for-in
        - for-of
        - While
        - do-while */