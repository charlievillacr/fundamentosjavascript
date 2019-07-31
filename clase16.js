var signo = prompt('¿Cuál es tu signo?')

// console.log(signo)
// if (signo === 'acuario') {
//     console.log('Acuario estará tan ansioso por finalizar un trabajo, que podría acabar el mes con pocas expectativas de éxito, esto cambiará los planes profesionales de Acuario para la segunda mitad del año. Julio será un mes de reflexión que impulsará a Acuario tomar las riendas de su vida, no deberá descartar cambios en su entorno personal.')
// }
// if (signo === 'piscis') {
//     console.log('Será conveniente que Piscis se mantenga apartado si hoy se produce algún conflicto en el trabajo, será un factor que le distraerá de sus futuros proyectos que permitirán a Piscis progresar en su carrera. Aunque no tendrán problemas de dinero, Piscis debería poner en orden sus finanzas antes de hacer un gasto excesivo en sus vacaciones.')
// }
// if (signo === 'cancer') {
//     console.log('Surgirán grandes oportunidades para que Cáncer emprenda importantes proyectos profesionales, aunque se avecinan las vacaciones, si Cáncer deja todo bien atado, en los próximos meses verá un progreso significativo en el trabajo.')
// }

/** 
 cuando tenemos muchos ifs, 
 es hora de utilizar un switch statement
 **/ 
switch (signo) {
    // switch (), le pasa (variable) 
    case 'aries':
        //console.log
        console.log('El día será un poco complicado para Aries en el trabajo, la incertidumbre que se avecina para los próximos meses creará un ambiente tenso, Aries deberá mantener ocupada su mente en futuros proyectos que tendrán éxito este año. ')
        break
    // case 'signo':
    //     console.log('')
    //     break
    case 'tauro':
        console.log('Los últimos días de julio serán primordiales para Tauro si quiere progresar en el trabajo, por ello, será esencial mantener sus objetivos muy presentes, para que nada ni nadie distraiga a Tauro de sus expectativas profesionales. ')
        break  
    case 'geminis':
    case 'géminis':
        console.log('Hoy Géminis se expresará con mucha claridad a la hora de hacer negocios, esto facilitará el cierre de propuestas de trabajo muy ambiciosos que Géminis podría poner en marcha a corto plazo')
        break 
    //variaciones del nombre
    case 'cancer':
    case 'cáncer':
        console.log('Surgirán grandes oportunidades para que Cáncer emprenda importantes proyectos profesionales, aunque se avecinan las vacaciones, si Cáncer deja todo bien atado, en los próximos meses verá un progreso significativo en el trabajo.')
        break   
    case 'leo':
        console.log('Será ideal que Leo ponga las cartas sobre la mesa, esto podría ocasionar algún disgusto en el trabajo, pero será importante que Leo se mantenga firme y buscar nuevas oportunidades que generen un bienestar en su carrera.')
        break
    case 'virgo':
        console.log('Virgo deberá tomar algunas decisiones importantes si quiere progresar con éxito en el trabajo, tal vez tomar algún riesgo será el primer paso hacia el cambio profesional que Virgo necesita para generar mayores oportunidades.')
        break
    case 'libra':
        console.log('Libra terminará el mes de julio valorando si es el momento de reinventarse laboralmente o esperar un poco, Libra deberá tener algo claro, tiene muchas más habilidades que está utilizando en el trabajo este año, que le abrirán sus horizontes profesionales.')
        break
    case 'escorpio':
        console.log('Escorpio verá las cosas claras y podrá tomar una decisión importante en el trabajo, esto impulsará a Escorpio hacia el éxito profesional durante la segunda mitad del año. ')
        break
    case 'sagitario':
        console.log('Sagitario podría complicarse la vida en el trabajo, si se centra verá que todo será más sencillo de lo que parece, tendrá la posibilidad de cerrar el mes con buenas expectativas profesionales y económicas. Hoy, Sagitario podría tener varios despistes que perjudiquen los planes con los amigos, esto causará algún malestar en alguien. ')
        break
    case 'capricornio':
        console.log('Una buena noticia del trabajo será motivo de celebración, con esto Capricornio cerrará el mes de julio con grandes posibilidades de emprender, después del verano, una nueva etapa en su carrera, será un reto que Capricornio asumirá con ambición.')
        break
    case 'acuario':
        console.log('Acuario estará tan ansioso por finalizar un trabajo, que podría acabar el mes con pocas expectativas de éxito, esto cambiará los planes profesionales de Acuario para la segunda mitad del año. Julio será un mes de reflexión que impulsará a Acuario tomar las riendas de su vida, no deberá descartar cambios en su entorno personal.')
        break
    case 'piscis':
        console.log('Será conveniente que Piscis se mantenga apartado si hoy se produce algún conflicto en el trabajo, será un factor que le distraerá de sus futuros proyectos que permitirán a Piscis progresar en su carrera. Aunque no tendrán problemas de dinero, Piscis debería poner en orden sus finanzas antes de hacer un gasto excesivo en sus vacaciones.')
        break
    // si no se cumple ninguna de las anteriores...
    default:
        console.log('No es un signo zodiacal válido.')
}
/**
 Switch statement
 con los signos del horóscopo
 que genera un console log 
 al escribir el signo
 con prompt()
 **/