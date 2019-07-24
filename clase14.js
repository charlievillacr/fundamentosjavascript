var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75,
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const META = sacha.peso - 3

while () {
    
}

console.log(`Al final de año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)