import { boostAttack, boostDefense, healingSelf, lowerAttack, lowerDefense, lowerPrecision } from "../game/mechanics/stats-change.js"
import { isAsleep, isPoisoned } from "../game/mechanics/status.js"
import { TYPES } from "./types.js"



class Move {
    constructor({
        name,
        type,
        damage = 0,
        precision = 100,
        criticChance = 0,
        img = '',
        pp = 10,
        category = 'physical',
        effect = null
    }) {
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

function createMove(config) {
    return new Move(config);
}

                                                ///// RANK I /////

// STATS
const rugissement = createMove({ 
    name: 'Rugissement', 
    type: TYPES.NORMAL, 
    precision: 95, 
    pp: 25, 
    category: 'stats', 
    effect: lowerAttack() });   

const brouillard = createMove({ 
    name: 'Brouillard', 
    type: TYPES.NORMAL, 
    precision: 68, 
    pp: 15, 
    category: 'stats', 
    effect: lowerPrecision(0.93) });

const grozyeux = createMove({ 
    name: "Groz'Yeux", 
    type: TYPES.NORMAL, 
    precision: 90, 
    pp: 20, 
    category: 'stats', 
    effect: lowerDefense() });

const croissance = createMove({ 
    name: 'Croissance',
    type: TYPES.NORMAL, 
    precision: 99, 
    pp: 15, 
    category: 'stats', 
    effect: boostAttack(2) });

const armure = createMove({ 
    name: 'Armure', 
    type: TYPES.NORMAL, 
    precision: 100, 
    pp: 20, 
    category: 'stats', 
    effect: boostDefense(2) });

const jetsable = createMove({ 
    name: 'Jet-Sable', 
    type: TYPES.NORMAL, 
    precision: 75, 
    pp: 15, 
    category: 'stats', 
    effect: lowerPrecision(0.95) });

        // STATUS
const hypnose = createMove({ 
    name: 'Hypnose', 
    type: TYPES.PSY, 
    precision: 54, 
    pp: 15, 
    category: 'status', 
    effect: isAsleep(1 + Math.floor(Math.random() * 3)) });

const berceuse = createMove({ 
    name: 'Berceuse', 
    type: TYPES.NORMAL, 
    precision: 48, 
    pp: 15, 
    category: 'status', 
    effect: isAsleep(2 + Math.floor(Math.random() * 4)) });

        // HYBRIDES
const dardvenin = createMove({ 
    name: 'Dard-Venin', 
    type: TYPES.POISON, 
    damage: 23, 
    precision: 92, 
    criticChance: 33, 
    img: 'img', 
    pp: 25, 
    category: 'physical', 
    effect: isPoisoned(0.4, 15, (1 + Math.floor(Math.random() * 3)) )});

const coupdboue = createMove({
    name: "Coup d'boue", 
    type: TYPES.SOL, 
    damage: 27, 
    precision: 78, 
    criticChance: 42, 
    img: 'img', 
    pp: 30, 
    category: 'physical', 
    effect: lowerPrecision(0.97)})

                // PHYSICAL
        //Feu 
        const flammeche = createMove({ 
            name: 'Flammèche', 
            type: TYPES.FEU, 
            damage: 35, 
            precision: 85, 
            criticChance: 13, 
            img: '../img/moves/flame-1.png', 
            pp: 20 });

        // Eau
        const pistoletao = createMove({ 
            name: 'Pistolet à O', 
            type: TYPES.EAU, 
            damage: 35, 
            precision: 85, 
            criticChance: 15, 
            img: '../img/moves/water-1.png', 
            pp: 20 });

        // Plante
        const tranchherb = createMove({ 
            name: "Tranch'Herb", 
            type: TYPES.PLANTE, 
            damage: 36, 
            precision: 85, 
            criticChance: 20, 
            img: '../img/moves/leafs-2.png', 
            pp: 20 });

        const fouetliane = createMove({ 
            name: 'Fouet Lianes', 
            type: TYPES.PLANTE, 
            damage: 25, 
            precision: 95, 
            criticChance: 26, 
            img: 'img', 
            pp: 25 })
        
        // Foudre   
        const eclair = createMove({ 
            name: 'Eclair', 
            type: TYPES.FOUDRE, 
            damage: 35, 
            precision: 81, 
            criticChance: 16, 
            img: 'img', 
            pp: 20 });

        // Psy
        const chocmental = createMove({ 
            name: 'Choc mental', 
            type: TYPES.PSY, 
            damage: 33, 
            precision: 88, 
            criticChance: 15, 
            img: 'img', 
            pp: 20 });

        // Vol
        const tornade = createMove({ 
            name: 'Tornade', 
            type: TYPES.VOL, 
            damage: 34, 
            precision: 94, 
            criticChance: 14, 
            img: 'img',
            pp: 20 });

        // Combat

        // Roche
        const jetpierre = createMove({ 
            name: 'Jet Pierres', 
            type: TYPES.ROCHE, 
            damage: 31, 
            precision: 82, 
            criticChance: 36, 
            img: 'img', 
            pp: 25 });

        // Sol
        
        // Dragon

        // Tenebres

        // Spectre
        const lechouille = createMove({ 
            name: 'Léchouille', 
            type: TYPES.SPECTRE, 
            damage: 23, 
            precision: 85, 
            criticChance: 40, 
            img: 'img', 
            pp: 25 });

        // Normal
        const charge = createMove({ 
            name: 'Charge', 
            type: TYPES.NORMAL, 
            damage: 18, 
            precision: 95, 
            criticChance: 19, 
            img: 'img/moves/...png', 
            pp: 30 });

        const viveattaque = createMove({ 
            name: 'Vive-attaque', 
            type: TYPES.NORMAL, 
            damage: 20, 
            precision: 100, 
            criticChance: 20, 
            img: '../img/moves', 
            pp: 25 });

        const griffe = createMove({ 
            name: 'Griffe', 
            ype: TYPES.NORMAL, 
            damage: 23, 
            precision: 95, 
            criticChance: 33, 
            img: '../img/moves/', 
            pp: 25 });

        const morsure = createMove({ 
            name: 'Morsure', 
            type: TYPES.TENEBRES, 
            damage: 26, 
            precision: 90,
            criticChance: 30, 
            img: 'img', 
            pp: 20 });

        const coupdboule = createMove({ 
            name: "Coup d'boule", 
            type: TYPES.NORMAL, 
            damage: 26, 
            precision: 89, 
            criticChance: 35, 
            img: 'img', 
            pp: 25 });
                


                                                ///// RANK II /////

        // STATS
const soin = createMove({ 
    name: 'Soin', 
    type: TYPES.NORMAL, 
    precision: 100, 
    img: 'img',
    pp: 15, 
    category: 'stats', 
    effect: healingSelf(45) });

        // STATUS

        // HIBRIDES
const detritus = createMove({ 
    name: 'Détritus', 
    type: TYPES.POISON, 
    damage: 48, 
    precision: 75, 
    criticChance: 45, 
    img: 'img', 
    pp: 20, 
    category: 'physical', 
    effect: isPoisoned(0.5, 25, (2 + Math.floor(Math.random() * 4))) });

                // PHYSICAL
const machouille = createMove({ 
    name: 'Machouille', 
    type: TYPES.TENEBRES, 
    damage: 60, 
    precision: 90, 
    criticChance: 48, 
    img: 'img', 
    pp: 20 });



                                                ///// RANK III /////
                // PHYSICAL
const seisme = createMove({ 
    name: 'Seisme', 
    type: TYPES.SOL, 
    damage: 100, 
    precision: 100, 
    criticChance: 70, 
    img: 'img', 
    pp: 10 });



const movesByRank = {
  rank1: 
  ['flammeche', 'charge', 'rugissement', 'viveAttaque', 'pistoletAo', 'griffe', 
    'grozYeux', 'morsure', 'trancherb', 'croissance', 'armure', 'berceuse', 'coupdboule', 
    'brouillard', 'fouetliane', 'eclair', 'hypnose', 'chocmental', 'dardvenin', 'tornade', 
    'jetpierre', 'jetsable', 'lechouille', 'coupdboue'],
  rank2: 
  ['soin', 'machouille'],
  rank3: 
  ['seisme']
}


const allMoves = {
   
        flammeche, charge, rugissement, viveattaque, pistoletao, griffe, grozyeux, morsure,
        tranchherb, croissance, armure, berceuse, coupdboule, brouillard, fouetliane, eclair,
        hypnose, chocmental, dardvenin, tornade, jetpierre, jetsable, lechouille, coupdboue,
    
    
        soin, machouille, detritus,
    
  
        seisme
    
}

export { allMoves, movesByRank }

