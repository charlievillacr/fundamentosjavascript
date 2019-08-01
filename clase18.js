var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}
var allan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// Define quien es alto y quien no 

/**
 const esAlta = (persona) => {
    return persona.altura > 1.8
}
En los arrow function con solo un parametro no hace falta las ()
en (personas)
**/

// const esAlta = persona => persona.altura > 1.8

// arrow function papiiiee!!
const esAlta = ({ altura }) => altura > 1.8
// si solo nos interesa la altura

var personas = [sacha, allan, martin, dario, vicky, paula]

// Otra opción es:
/**
var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
})
**/

// para filtrar se necesitan dos cosas
// una condición y un array

// var personasAltas = personas.filter(condición)

var personasAltas = personas.filter(esAlta)

/**
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

// Formas de "acceder" la info de las variables / personas

personas[0] // 0 "Cero" va ser el primero de los elementos = Sacha
personas[0].altura // 1.72
personas[0]["altura"] // 1.72
**/

console.log(personasAltas) // alan y martin


