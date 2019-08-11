// Para definir un prototipo, creamos una function

function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    // return this es implicito
}

// "new" crea nuevos objetos con un prototipo
// si no se pone "new", no se crea el objeto

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var chuck = new Persona('Chuck', 'Norris')
var arturo = new Persona('Arturo', 'Martinez')
var daniG = new Persona('Daniela', 'María G') 

// sacha returns
// Persona {nombre: "Sacha", apellido: "Lifszyc"}
// apellido: "Lifszyc"
// nombre: "Sacha"
// __proto__: Object

sacha.saludar() //hola me llamo
chuck.saludar() // Hola me llamo Chuck, Norris
daniG.saludar()