// Attaques
class Move {
    constructor(name, type, damage, precision, criticChance, img = '', pp=10){
        this.name = name
        this.type = type 
        this.damage = damage
        this.precision = precision
        this.criticChance = criticChance 
        this.img = img
        this.pp = pp
        this.maxPP = pp
    }
}
// NORMAL
const charge = new Move('Charge','Normal', 18, 95, 19, 'img/moves/...png', 30)
const rugissement = new Move('Rugissement', 'Normal', 0, 95, 0,  '../img/moves', 25)
const viveAttaque = new Move("Vive-attaque", 'Normal', 20, 100, 20, '../img/moves', 25)
const griffe = new Move('Griffe', 'Normal', 23, 95, 33, '../img/moves/', 25)
const grozyeux = new Move("Groz'Yeux", "Normal", 0, 90, 0, '../img/moves', 20)
const morsure = new Move('Morsure', 'Normal', 26, 90, 30, '../img/moves', 20)
const croissance = new Move('Croissance', 'Normal', 0, 99, 0, '../img/moves/', 15)
const armure = new Move('Armure', 'Normal', 0, 100, 0, 'img', 20)
const berceuse = new Move('Berceuse', 'Normal', 0, 71, 0, 'img', 15)
const coupdboule = new Move("Coup d'boule", 'Normal', 26, 89, 40, 'img', 25)
const brouillard = new Move('Brouillard', 'Normal', 0, 68, 0, 'img', 15)
// FEU
const flammeche = new Move('Flammèche', 'Feu', 35, 85, 13, '../img/moves/flame-1.png', 20)
// EAU
const pistoletAo = new Move("Pistolet à O",'Eau', 35, 85, 15, '../img/moves/water-1.png', 20)
// PLANTE
const tranchherb = new Move("Tranch'Herb", 'Plante', 36, 85, 20, '../img/moves/leafs-2.png', 20)
const fouetliane = new Move("Fouet Lianes", 'Plante', 25, 95, 26, 'img', 25)
// FOUDRE
const eclair = new Move('Eclair', 'Foudre', 35, 81, 16, 'img', 20)
// PSY
const hypnose = new Move('Hypnose', 'Psy', 0, 70, 0, 'img', 15)
const chocmental = new Move('Choc mental', 'Psy', 33, 88, 15, 'img', 20)
// POISON
const dardvenin = new Move('Dard-Venin', 'Poison', 23, 92, 37, 'img', 25)
const detritus = new Move("Détritus", 'Poison', 28, 75, 45, 'img', 20)
// VOL
const tornade = new Move('Tornade', 'Vol', 34, 94, 14, 'img', 20)
// ROCHE
const jetpierre = new Move('Jet Pierres', 'Roche', 31, 82, 36, 'img', 25)
// COMBAT

// DRAGON

// SOL
const jetsable = new Move('Jet-Sable', 'Sol', 0, 75, 0, 'img', 15)
// TENEBRES

const allMoves = {
    flammeche, charge, rugissement, viveAttaque, pistoletAo, griffe, grozyeux, morsure,
    tranchherb, croissance, armure, berceuse, coupdboule, brouillard, fouetliane, eclair,
    hypnose, chocmental, dardvenin, detritus, tornade, jetpierre, jetsable
}

export { allMoves }