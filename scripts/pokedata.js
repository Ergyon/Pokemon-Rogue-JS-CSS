// Attaques
class Move {
    constructor(name, type, damage, precision, critical, img = '') {
        this.name = name
        this.type = type 
        this.damage = damage
        this.precision = precision
        // TODO creer fonction random pour coup critique
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
const croissance = new Move('Croissance', 'Plante', 20, 99, 0, '../img/moves/')

// Pokemons
class Pokemon {
    constructor(name, type, hp, attack, defense, moves = [], critical, img = '', rank) {
        this.name = name
        this.type = type 
        this.hp = hp
        this.attack = attack
        this.defense = defense 
        this.moves = moves
        // Trouver formule coup critique ( attack * (x %).attack )
        this.critical = critical
        this.img = img 
        this.rank = rank
    }
}


const hericendre = new Pokemon(
    'Héricendre',
    'Feu',
    117,
    18,
    14,
    attack * 0.6,
    [flammeche, charge, rugissement, viveAttaque],
    '../img/pokemons/hericendre.png',
    1
)

const kaiminus = new Pokemon(
    'Kaiminus',
    'Eau',
    122,
    15,
    14,
    attack * 0.7,
    [pistoletAo, griffe, morsure, grozyeux],
    '../img/pokemons/kaiminus.png',
    1
)

const germignon = new Pokemon(
    'Germignon',
    'Plante',
    130,
    13,
    18,
    attack * 0.7,
    [tranchherb, charge, rugissement, croissance],
    '../img/pokemons/germignon.png',
    1
)

const bulbizare = new Pokemon(
    'Bulbizare',
    'Plante',
    133,
    14,
    19,
    attack * 0.8,
    [charge, tranchherb, fouetliane, armure],
    '../img/pokemon/bulbizare.png',
    1
)

const canartichot = new Pokemon(
    'Canartichot',
    'Normal',
    112,
    13,
    10,
    attack * 0.8,
    [viveAttaque, griffe, grozyeux, rugissement],
    '../img/pokemon/canartichot.png',
    1
)

const carapuce = new Pokemon(
    'Carapuce',
    'Eau',
    121,
    16,
    13,
    attack * 0.7,
    [pistoletAo, morsure, grozyeux, charge],
    '../img/pokemon/carapuce.png',
    1
)

const evoli = new Pokemon(
    'Evoli',
    'Normal',
    '117',
    13,
    15,
    attack * 1,
    [charge, viveAttaque, croissance, morsure],
    '../img/pokemon/evoli.png',
    1
)

const fantominus = new Pokemon(
    'Fantominus',
    'Psy',
    '115',
    13,
    16,
    attack * 0.8,
    [hypnose, chocmental, grozyeux, charge],
    '../img/pokemon/fantominus.png',
    1
)

const goupix = new Pokemon(
    'Goupix',
    'Feu',
    120,
    15,
    13,
    attack * 0.9,
    [flammeche, rugissement, viveAttaque, morsure],
    '../img/pokemon/goupix.png',
    1
)

const miaous = new Pokemon(
    'Miaous',
    'Normal',
    116,
    14,
    14,
    attack * 1.1,
    [griffe, morsure, rugissement, hypnose],
    '../img/pokemon/miaous.png',
    1
)

const nidoran = new Pokemon(
    'Nidoran',
    'Poison',
    '124',
    13,
    11,
    attack * 0.7,
    [morsure, charge, rugissement, dardvenin],
    '../img/pokemon/nidoran-male.png',
    1
)

const pikachu = new Pokemon(
    'Pikachu',
    'Foudre',
    '119',
    17,
    13,
    attack * 0.8,
    [viveAttaque, charge, grozyeux, eclair],
    '../img/pokemon/pikachu.png',
    1
)

const poissirene = new Pokemon(
    'Possirène',
    'Eau',
    114,
    13,
    17,
    attack * 0.6,
    [charge, pistoletAo, hypnose, grozyeux],
    '../img/pokemon/possirene.png',
    1
)

const ponyta = new Pokemon(
    'Ponyta',
    'Feu',
    120,
    16,
    11,
    attack * 0.9,
    [flammeche, viveAttaque, charge, croissance],
    '../img/pokemon/ponyta.png',
    1
)

const racaillou = new Pokemon(
    'Racaillou',
    'Roche',
    112,
    13,
    16,
    attack * 0.6,
    [charge, armure, jetpierre, croissance],
    '../img/pokemon/racaillou.png',
    1
)















const ratatac = new Pokemon(
    'Ratata',
    'Normal',
    150,
    30,
    23,
    attack * 1.2,
    [morsure, rugissement, viveAttaque, crocmort],
    '../img/pokemon/ratata.png',
    2
)