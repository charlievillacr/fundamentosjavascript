var nombre = 'Carlos', edad = 34

/**
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
};

imprimirEdad()
**/

// las funciones sirven para reutilizar código

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Dario', 27)

imprimirEdad('Carlos')