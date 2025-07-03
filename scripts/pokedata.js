// Attaques
class Move {
    constructor(name, type, damage, precision, critical, img = '') {
        this.name = name
        this.type = type 
        this.damage = damage
        this.precision = precision
        this.critical = critical
        this.img = img
    }
}

const flammeche = new Move('Flammèche', 'Feu', 40, 85, 20, '../img/moves/flame-1.png')
const charge = new Move('Charge','Normal', 18, 95, 20, 'img/moves/...png')
const rugissement = new Move('Rugissement', 'Normal', 3, 90, 0,  '../img/moves')
const viveAttaque = new Move("Vive-attaque", 'Normal', 20, 100, 30, '../img/moves')
const pistoletAo = new Move("Pistolet à O",'Eau', 40, 85, 25, '../img/moves/water-1.png')
const griffe = new Move('Griffe', 'Normal', 23, 95, 23, '../img/moves/')
const grozyeux = new Move("Groz'Yeux", "Normal", 7, 80, 0, '../img/moves')
const morsure = new Move('Morsure', 'Normal', 26, 90, 20, '../img/moves')
const tranchherb = new Move("Tranch'Herb", 'Plante', 40, 85, 30, '../img/moves/leafs-2.png')
const croissance = 

// Pokemons
class Pokemon {
    constructor(name, type, hp, attack, defense, moves = [], img = '') {
        this.name = name
        this.type = type 
        this.hp = hp
        this.attack = attack
        this.defense = defense 
        this.moves = moves
        this.img = img 
    }
}


const hericendre = new Pokemon(
    'Héricendre',
    'Feu',
    117,
    18,
    14,
    [flammeche, charge, rugissement, viveAttaque],
    '../img/pokemons/hericendre.png'
)

const kaiminus = new Pokemon(
    'Kaiminus',
    'Eau',
    125,
    15,
    14,
    [pistoletAo, griffe, morsure, grozyeux],
    '../img/pokemons/kaiminus.png'
)

const germignon = new Pokemon(
    'Germignon',
    'Plante',
    131,
    13,
    18,
    [tranchherb, charge, rugissement, croissance],
    '../img/pokemons/germignon.png'
)
