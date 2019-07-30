var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27

}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 25
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona 
    console.log(nombre.toUpperCase())
} 

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)


// function imprimirNombreYEdad(persona) {
//     console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} anos.`);
// }



// function imprimirNombreYEdad(persona) {
//     var { nombre } = persona 
//     // var { edad } = persona
//     console.log(`Hola, me llamo: ${nombre} y tengo ${edad} años.`)
// } 


// imprimirNombreYEdad(sacha)
// imprimirNombreYEdad(dario);


// function cumpleanos(persona) {
//     persona.edad = persona.edad + 1
// } 


// function cumpleanos(persona) {
//     persona.edad += 1
// }



function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}