import { boostAttack, boostDefense, healingSelf, isAsleep, lowerAttack, lowerDefense, lowerPrecision, poisonEffect } from "../game/move-effect.js"
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
    }
}

                    // STATS
const rugissement = new Move('Rugissement', TYPES.NORMAL, 0, 95, 0,  '../img/moves', 25, 'stats',
    lowerAttack(-1)
)
const grozyeux = new Move("Groz'Yeux", TYPES.NORMAL, 0, 90, 0, '../img/moves', 20, 'stats',
    lowerDefense(-1)
)
const armure = new Move('Armure', TYPES.NORMAL, 0, 100, 0, 'img', 20, 'stats', 
    boostDefense(2)
)
const brouillard = new Move('Brouillard', TYPES.NORMAL, 0, 68, 0, 'img', 15, 'stats',
    lowerPrecision(0.95)
)
const jetsable = new Move('Jet-Sable', TYPES.NORMAL, 0, 75, 0, 'img', 15, 'stats',
    lowerPrecision(0.93)
)
const croissance = new Move('Croissance', TYPES.NORMAL, 0, 99, 0, '../img/moves/', 15, 'stats',
    boostAttack(2)
)
const soin = new Move('Soin', TYPES.NORMAL, 0, 100, 0, 'img', 15, 'stats',
    healingSelf(45)
)

                    // STATUS
const berceuse = new Move('Berceuse', TYPES.NORMAL, 0, 48, 0, 'img', 15, 'status', 
    isAsleep((2 + Math.floor(Math.random() * 4)))
)
const hypnose = new Move('Hypnose', TYPES.PSY, 0, 54, 0, 'img', 15, 'status', 
    isAsleep((1 + Math.floor(Math.random() * 3)))
)


                    // PHYSIQUES

// NORMAL
const charge = new Move('Charge', TYPES.NORMAL, 18, 95, 19, 'img/moves/...png', 30)
const viveAttaque = new Move("Vive-attaque", TYPES.NORMAL, 20, 100, 20, '../img/moves', 25)
const griffe = new Move('Griffe', TYPES.NORMAL, 23, 95, 33, '../img/moves/', 25)
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
const dardvenin = new Move('Dard-Venin', TYPES.POISON, 23, 92, 33, 'img', 25, 'physical', 
    poisonEffect(0.4, 15, 4))

const detritus = new Move("Détritus", TYPES.POISON, 48, 75, 45, 'img', 20, 'physical', 
    poisonEffect(0.5, 25, 4)
)

// VOL
const tornade = new Move('Tornade', TYPES.VOL, 34, 94, 14, 'img', 20)

// ROCHE
const jetpierre = new Move('Jet Pierres', TYPES.ROCHE, 31, 82, 36, 'img', 25)

// SOL
const seisme = new Move('Seisme', TYPES.SOL, 100, 100, 70, 'img', 10)

// TENEBRES
const morsure = new Move('Morsure', TYPES.TENEBRES, 26, 90, 30, 'img', 20)
const machouille = new Move('Machouille', TYPES.TENEBRES, 60, 90, 48, 'img', 20)

// SPECTRE
const lechouille = new Move('Léchouille', TYPES.SPECTRE, 23, 85, 40, 'img', 25)






const allMoves = {
    // Niv I
    flammeche, charge, rugissement, viveAttaque, pistoletAo, griffe, grozyeux, morsure,
    tranchherb, croissance, armure, berceuse, coupdboule, brouillard, fouetliane, eclair,
    hypnose, chocmental, dardvenin, detritus, tornade, jetpierre, jetsable, lechouille,
   
    // Niv II
    soin, machouille,
    // Niv III
    seisme
}

export { allMoves }

