var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75,
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
// const comeMucho = () => Math.random < 0.3 
const comeMucho = () => Math.random() < 0.3 
// const realizaDeporte = () => Math.random < 0.4 
const realizaDeporte = () => Math.random() < 0.4 

const META = sacha.peso - 3
var dias = 0

//Estructuras repetitivas: while

while (sacha.peso > META) {
    /** 
     Si el peso de Sacha
     está por encima de la meta
     se ejecuta lo siguiente
     **/
    if (comeMucho()) {
        //aumentarDePeso
        aumentarDePeso(sacha)
    }
    if (realizaDeporte()) {
        //adelgazar
        adelgazar(sacha)
    }
    dias += 1
}

// console.log(`Al final de año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)
console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`)