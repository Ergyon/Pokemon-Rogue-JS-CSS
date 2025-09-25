import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isPoisoned } from "../../game/mechanics/status.js"

// HYBRIDES
const dardvenin = createMove({ 
    name: 'Dard-Venin', 
    type: TYPES.POISON, 
    damage: 23, 
    precision: 92, 
    criticChance: 33, 
    img: 'img', 
    category: 'physical', 
    effect: isPoisoned(0.4, 15, (1 + Math.floor(Math.random() * 3))),
    pp: 25 })

    const bombeurk = createMove({ 
        name: "Bomb'Eurk", 
        type: TYPES.POISON, 
        damage: 28, 
        precision: 75, 
        criticChance: 11, 
        img: 'img', 
        category: 'physical', 
        effect: isPoisoned(0.2, 20, (2 + Math.floor(Math.random() * 3))),
        pp: 20 })

    const detritus = createMove({ 
        name: 'Détritus', 
        type: TYPES.POISON, 
        damage: 48, 
        precision: 75, 
        criticChance: 45, 
        img: 'img', 
        category: 'physical', 
        effect: isPoisoned(0.2, 25, (2 + Math.floor(Math.random() * 3))),
        pp: 15 })

    const directtoxik = createMove({ 
        name: 'Direct Toxik', 
        type: TYPES.POISON, 
        damage: 75, 
        precision: 86, 
        criticChance: 11, 
        img: 'img', 
        category: 'physical', 
        effect: isPoisoned(0.15, 30, (2 + Math.floor(Math.random() * 3))),
        pp: 15 })

    const detricanon = createMove({ 
        name: 'Détricanon', 
        type: TYPES.POISON, 
        damage: 110, 
        precision: 73, 
        criticChance: 9, 
        img: 'img', 
        category: 'physical', 
        effect: isPoisoned(0.2, 30, (2 + Math.floor(Math.random() * 3))),
        pp: 5 })

// STATUS
const gaztoxik = createMove({ 
    name: 'Gaz Toxik', 
    type: TYPES.POISON, 
    precision: 75, 
    img: 'img', 
    category: 'status', 
    effect: isPoisoned(1, 25, (1 + Math.floor(Math.random() * 4))),
    pp: 25 })

const toxik = createMove({ 
    name: 'Toxik', 
    type: TYPES.POISON, 
    precision: 80, 
    img: 'img', 
    category: 'status', 
    effect: isPoisoned(1, 40, (1 + Math.floor(Math.random() * 4))),
    pp: 10 })
        
export const MOVES_POISON = {
    dardvenin, detritus, bombeurk, gaztoxik, toxik, directtoxik, detricanon
}