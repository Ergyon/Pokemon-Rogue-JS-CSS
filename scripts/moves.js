import { TYPES } from "./types.js"

class Move {
    constructor(
        name,
        type,
        damage,
        precision,
        criticChance,
        img = '',
        pp = 10,
        category = 'physical',
        effect = null,
        poisonDamage = 0,
        burnDamage = 0,
        attackChange = 0,
        defenseChange = 0
    ) {
        this.name = name
        this.type = type 
        this.damage = damage
        this.precision = precision
        this.criticChance = criticChance 
        this.img = img
        this.pp = pp
        this.maxPP = pp
        this.category = category
        this.effect = effect
        this.poisonDamage = poisonDamage
        this.burnDamage = burnDamage
        this.attackChange = attackChange 
        this.defenseChange = defenseChange 
    }
}

// STATS
const rugissement = new Move('Rugissement', TYPES.NORMAL, 0, 95, 0,  '../img/moves', 25, 'stats',
    (user, target, messages) => {
        target.attack *= 0.8
        messages.push(`L'attaque de ${target.name} baisse.`)
    }
)
const grozyeux = new Move("Groz'Yeux", TYPES.NORMAL, 0, 90, 0, '../img/moves', 20, 'status',
    (user, target, messages) => {
        target.defense *= 0.78
        messages.push(`La défense de ${target.name} baisse.`)
    }
)
const armure = new Move('Armure', TYPES.NORMAL, 0, 100, 0, 'img', 20, 'stats', 
    (user, target, messages) => {
        user.defense *= 1.25
        messages.push(`${user.name} augment sa défense.`)
    }
)
const brouillard = new Move('Brouillard', TYPES.NORMAL, 0, 68, 0, 'img', 15, 'stats',
    (user, target, messages) => {
        target.moves.forEach(move => move.precision *= 0.93)
        messages.push(`La précision de ${target.name} baisse.`)
    }
)
const jetsable = new Move('Jet-Sable', TYPES.NORMAL, 0, 75, 0, 'img', 15, 'stats',
    (user, target, messages) => {
        target.moves.forEach(move => move.precision *= 0.91)
        messages.push(`La précision de ${target.name} baisse.`)
    }
)
const croissance = new Move('Croissance', TYPES.NORMAL, 0, 99, 0, '../img/moves/', 15, 'stats',
    (user, target, messages) => {
        user.attack *= 1.3
        messages.push(`${user.name} augmente son attaque.`)
    }
)

// STATUS
const berceuse = new Move('Berceuse', TYPES.NORMAL, 0, 71, 0, 'img', 15, 'status', 
    (user, target, messages) => {
        if (!target.status) {
            target.status = 'sleep'
            target.statusDuration = 2 + Math.floor(Math.random() * 3)
            messages.push(`${target.name} s'endort profondément... zzz`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
        }
    }
)
const hypnose = new Move('Hypnose', TYPES.PSY, 0, 70, 0, 'img', 15, 'status', 
    (user, target, messages) => {
        if (!target.status) {
            target.status = 'sleep'
            target.statusDuration = 1 + Math.floor(Math.random() * 2)
            messages.push(`${target.name} s'endort... zzz`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
        }
    })


// NORMAL
const charge = new Move('Charge', TYPES.NORMAL, 18, 95, 19, 'img/moves/...png', 30)
const viveAttaque = new Move("Vive-attaque", TYPES.NORMAL, 20, 100, 20, '../img/moves', 25)
const griffe = new Move('Griffe', TYPES.NORMAL, 23, 95, 33, '../img/moves/', 25)
const morsure = new Move('Morsure', TYPES.NORMAL, 26, 90, 30, '../img/moves', 20)
const coupdboule = new Move("Coup d'boule", TYPES.NORMAL, 26, 89, 40, 'img', 25)

// FEU
const flammeche = new Move('Flammèche', TYPES.FEU, 35, 85, 13, '../img/moves/flame-1.png', 20)

// EAU
const pistoletAo = new Move("Pistolet à O", TYPES.EAU, 35, 85, 15, '../img/moves/water-1.png', 20)

// PLANTE
const tranchherb = new Move("Tranch'Herb", TYPES.PLANTE, 36, 85, 20, '../img/moves/leafs-2.png', 20)
const fouetliane = new Move("Fouet Lianes", TYPES.PLANTE, 25, 95, 26, 'img', 25)

// FOUDRE
const eclair = new Move('Eclair', TYPES.FOUDRE, 35, 81, 16, 'img', 20)

// PSY
const chocmental = new Move('Choc mental', TYPES.PSY, 33, 88, 15, 'img', 20)

// POISON
const dardvenin = new Move('Dard-Venin', TYPES.POISON, 23, 92, 33, 'img', 25, 'status', 
    (user, target, messages) => {
        if (!target.status) {
            target.status = 'poison'
            target.statusDuration = 1 + Math.floor(Math.random() * 3)
            messages.push(`${target.name} est empoisonné.`)
        } else {
            messages.push(`Mais ça n'a aucun effet.`)
        }    
    }, 
    10)

const detritus = new Move("Détritus", TYPES.POISON, 28, 75, 45, 'img', 20, 'status',
    (user, target, messages) => {
        if (!target.status) {
            target.status = 'poison'
            target.statusDuration = 2 + Math.floor(Math.random() * 4)
            messages.push(`${target.name} est empoisonné`)
        } else {
            messages.push(`Mais ça n'a aucun effet.`)
        }
    }
)

// VOL
const tornade = new Move('Tornade', TYPES.VOL, 34, 94, 14, 'img', 20)

// ROCHE
const jetpierre = new Move('Jet Pierres', TYPES.ROCHE, 31, 82, 36, 'img', 25)

// SOL
const seisme = new Move('Seisme', TYPES.SOL, 100, 100, 70, 'img', 10)

const allMoves = {
    // Niv I
    flammeche, charge, rugissement, viveAttaque, pistoletAo, griffe, grozyeux, morsure,
    tranchherb, croissance, armure, berceuse, coupdboule, brouillard, fouetliane, eclair,
    hypnose, chocmental, dardvenin, detritus, tornade, jetpierre, jetsable, 
    
    // Niv III
    seisme
}

export { allMoves }

