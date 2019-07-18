var nombre = 'Chuck', apellido = 'Arguello'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)

var cantidadDeLetrasDelNombre = nombre.length

// concatenar dos strings

// var nombreCompleto = nombre + '  ' + apellido

// interpolacion de texto

// var nombreCompleto = `${nombre} ${apellido}`

// en la interpolacion podemos poner codigo de JS

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// acceder a un sub string dentro de un string


// var str = nombre.charAt(1) + nombre.charAt(2)

var str = nombre.substr(1, 3)