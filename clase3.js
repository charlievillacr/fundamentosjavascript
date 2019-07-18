var edad = 27

/** 
edad = edad + 1
es lo mismo que:
edad += 1
**/


edad += 1

var peso = 75

// peso = peso -2

peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

// var total = precioDeVino * 100 * 3 / 100

// resultado de total 600.9000000000001

/**

al multiplicar x 100
lo pasamos a un num entero

**/


var total = Math.round(precioDeVino * 100 * 3) / 100

var totalStr = total.toFixed(2)
// resultado totalStr "600.90"

var total2 = parseFloat(totalStr)
// 600.9

var pizza = 8 
var personas = 2
var cantidadDePorcionesPersona = pizza / personas


