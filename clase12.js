var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true,
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es`)
    // si la persona que nos mandan es ingeniero
    //     if (persona.ingeniero === true) {
    // Si, entonces aplicá este código
    if (persona.ingeniero) {
        console.log('Ingeniero')
        // si no, entonces
    } else {
        console.log('No es ingeniero')
    }
    
    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    }

}

// var mayoriaDeEdad = 18
// const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

/**

const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
**/
/** 
function imprimirSiEsMayorDeEdad(persona) {
    // Sacha es mayor de edad
    // > num es comparacion estricta
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
    // Sacha es menor de edad
}
**/

// const esMayorDeedad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO PERMITIDO')
    }
}