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

imprimirProfesiones(sacha)

function imprimirSiEsMayorDeEdad(persona) {
    // Sacha es mayor de edad
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
    // Sacha es menor de edad
}


