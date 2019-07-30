//Contador de veces que llueve
var contador = 0

/**
Definir una función
que nos va devolver
si está lloviendo o no
**/
const llueve = () =>  Math.random() < 0.25

// Ciclo do-while
do {
    contador++
} while (!llueve()) {
    if(contador > 1) {
        console.log(`Fui a ver si llovía ${contador} veces`)
    } else {
        console.log(`Fui a ver si llovía ${contador} ves`)
    }
}


