// Attaques
class Move {
    constructor(name, type, damage, precision, criticChance, img = '') {
        this.name = name
        this.type = type 
        this.damage = damage
        this.precision = precision
        this.criticChance = criticChance 
        this.img = img
    }
}

const flammeche = new Move('Flammèche', 'Feu', 40, 85, 10, '../img/moves/flame-1.png')
const charge = new Move('Charge','Normal', 18, 95, 15, 'img/moves/...png')
const rugissement = new Move('Rugissement', 'Normal', 3, 90, 0,  '../img/moves')
const viveAttaque = new Move("Vive-attaque", 'Normal', 20, 100, 20, '../img/moves')
const pistoletAo = new Move("Pistolet à O",'Eau', 40, 85, 11, '../img/moves/water-1.png')
const griffe = new Move('Griffe', 'Normal', 23, 95, 23, '../img/moves/')
const grozyeux = new Move("Groz'Yeux", "Normal", 7, 80, 0, '../img/moves')
const morsure = new Move('Morsure', 'Normal', 26, 90, 30, '../img/moves')
const tranchherb = new Move("Tranch'Herb", 'Plante', 40, 85, 18, '../img/moves/leafs-2.png')
const croissance = new Move('Croissance', 'Plante', 20, 99, 0, '../img/moves/')

const allMoves = {
    flammeche, charge, rugissement, viveAttaque, pistoletAo, griffe, grozyeux, morsure,
    tranchherb, croissance
}

export { allMoves }