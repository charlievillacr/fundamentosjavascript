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

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, allan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => {
    // persona.altura = persona.altura * 100
    return {
        ...persona,
        altura: persona.altura * 100
    }
    // esto crea un nuevo objeto dif al del aaray
}

/**
 personas[0]
{nombre: "Sacha", apellido: "Lifszyc", altura: 1.72}
personasCms[0]
{nombre: "Sacha", apellido: "Lifszyc", altura: 172}
 * 
 */

var personasCms = personas.map(pasarAlturaACms)


// console.log(personasAltas) 
console.log(personasCms)