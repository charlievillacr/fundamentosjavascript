function Persona(artista, cancion, grupos) {
    this.artista = artista
    this.cancion = cancion
    this.grupos = grupos
}

Persona.prototype.saludar = function () {
    console.log(`Conoce la nueva canción -${this.cancion}- del artista/productor: ${this.artista}, conocido por una de sus bandas: ${this.grupos}.`)
}

var mediaNoche = new Persona('Kenneth Medina', 'Desaparecer', 'Diger (Emo Punk C.R.), Goyi, LSMD (Lo Fi - Emo - Trap')

mediaNoche.saludar()