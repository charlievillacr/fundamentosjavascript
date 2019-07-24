var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75,
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

/**

function aumentartDePeso (persona) {
    return persona.peso += 200
}

esto equivalente a la que sigue
**/
const INCREMENTO_PESO = 200

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for  (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(sacha)
    } else if (random < 0.5) {
        adelgazar
    }
}

console.log(`Al final de año ${sacha.nombre} pesa ${sacha.peso}kg`)