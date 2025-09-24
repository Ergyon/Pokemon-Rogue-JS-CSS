import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { boostAttack, boostDefense, healingSelf, lowerAttack, lowerDefense, lowerPrecision } from "../../game/mechanics/stats-change.js"
import { isAsleep } from "../../game/mechanics/status.js"

// STATS
const rugissement = createMove({ 
    name: 'Rugissement', 
    type: TYPES.NORMAL, 
    precision: 95, 
    pp: 25, 
    category: 'stats', 
    effect: lowerAttack() })   

    const brouillard = createMove({ 
        name: 'Brouillard', 
        type: TYPES.NORMAL, 
        precision: 68, 
        pp: 15, 
        category: 'stats', 
        effect: lowerPrecision(0.93) })

    const grozyeux = createMove({ 
        name: "Groz'Yeux", 
        type: TYPES.NORMAL, 
        precision: 90, 
        pp: 20, 
        category: 'stats', 
        effect: lowerDefense() })

    const croissance = createMove({ 
        name: 'Croissance',
        type: TYPES.NORMAL, 
        precision: 99, 
        pp: 15, 
        category: 'stats', 
        effect: boostAttack(2) })

    const armure = createMove({ 
        name: 'Armure', 
        type: TYPES.NORMAL, 
        precision: 100, 
        pp: 20, 
        category: 'stats', 
        effect: boostDefense(1) })

    const boularmure = createMove({ 
        name: "Boul'Armure", 
        type: TYPES.NORMAL, 
        precision: 100, 
        pp: 20, 
        category: 'stats', 
        effect: boostDefense(1) });

    const jetsable = createMove({ 
        name: 'Jet-Sable', 
        type: TYPES.NORMAL, 
        precision: 75, 
        pp: 15, 
        category: 'stats', 
        effect: lowerPrecision(0.95) })

    const charme = createMove({ 
        name: 'Charme', 
        type: TYPES.NORMAL, 
        precision: 70, 
        pp: 15, 
        category: 'stats', 
        effect: lowerAttack(-2) })

// STATUS
const berceuse = createMove({ 
    name: 'Berceuse', 
    type: TYPES.NORMAL, 
    precision: 48, 
    pp: 15, 
    category: 'status', 
    effect: isAsleep(2 + Math.floor(Math.random() * 4)) })

    const soin = createMove({ 
    name: 'Soin', 
    type: TYPES.NORMAL, 
    precision: 100, 
    img: 'img',
    pp: 15, 
    category: 'stats', 
    effect: healingSelf(45) });


// PHYSICAL
const charge = createMove({ 
        name: 'Charge', 
        type: TYPES.NORMAL, 
        damage: 18, 
        precision: 95, 
        criticChance: 19, 
        img: 'img/moves/...png', 
        pp: 30 })

        const viveattaque = createMove({ 
            name: 'Vive-attaque', 
            type: TYPES.NORMAL, 
            damage: 20, 
            precision: 100, 
            criticChance: 20, 
            img: '../img/moves', 
            pp: 25 })


        const griffe = createMove({ 
            name: 'Griffe', 
            ype: TYPES.NORMAL, 
            damage: 23, 
            precision: 95, 
            criticChance: 33, 
            img: '../img/moves/', 
            pp: 25 })

        const coupdboule = createMove({ 
            name: "Coup d'boule", 
            type: TYPES.NORMAL, 
            damage: 26, 
            precision: 89, 
            criticChance: 35, 
            img: 'img', 
            pp: 25 });   


export const MOVES_NORMAL = {
    rugissement, brouillard, grozyeux, croissance, armure, boularmure,
    jetsable, berceuse, charge, viveattaque, griffe, coupdboule, 
    soin, charme,
}