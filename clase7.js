// var nombreChuck = 'Chuck'
// var nombreDario = 'Darío'

// function imprimirNombreEnMayusculas(nombre) {
//         nombre = nombre.toUpperCase()
//         console.log(nombre)
// }

// imprimirNombreEnMayusculas(nombreChuck)
// imprimirNombreEnMayusculas(nombreDario)

/**
OBJECT SYNTAX

var name = {
    key: value,
    key: 'value',
}
**/

// function imprimirNombreEnMayusculas(persona) {
//         var nombre = persona.nombre.toUpperCase()
//         console.log(nombre)
// }

// imprimirNombreEnMayusculas(chuck)
// imprimirNombreEnMayusculas(dario)

var chuck = {
    nombre: 'Carlos',
    apellido: 'Villalobos',
    edad: 34
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 25
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(chuck)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(sacha)

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1

    }

}
