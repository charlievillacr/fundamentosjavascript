var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
<<<<<<< HEAD
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
=======
  }
  
  var alan = {
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
  
  var personas = [sacha, alan, martin, dario, vicky, paula]
  
  var personasAltas = personas.filter(esAlta)
  // var personasAltas = personas.filter(function (persona) {
  //   return persona.altura > 1.8
  // })
  
  // persona.altura = persona.altura * 100

  /** 
   const pasarAlturaCms = persona => {
       return {
           ...persona,
           altura: persona.altura * 100
       }
   }
  
  **/

  // Si el arrow function empieza con llaves/parentesis n
    // debe iniciar con parentesis ()   
  const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
  })
  
  var personasCms = personas.map(pasarAlturaACms)
  
  console.log(personasCms)
  
>>>>>>> 313596e23d9758fef1826b536d88894aa5148304
