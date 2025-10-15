import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isParalyzed } from "../../game/mechanics/status.js"


// STATUS
const cageeclair = createMove({ 
    name: 'Cage-éclair', 
    type: TYPES.FOUDRE, 
    precision: 81, 
    img: 'img', 
    pp: 15,
    category: 'status',
    effect: isParalyzed(1, (1 + Math.floor(Math.random() * 4))) })

// PHYSICAL
const eclair = createMove({ 
    name: 'Eclair', 
    type: TYPES.FOUDRE, 
    damage: 35, 
    precision: 81, 
    criticChance: 16, 
    img: 'img', 
    category: 'physical',
    effect: isParalyzed(0.05, 1 + Math.floor(Math.random() * 3)),
    pp: 20 })

    const etincelle = createMove({ 
        name: 'Etincelle', 
        type: TYPES.FOUDRE, 
        damage: 25, 
        precision: 85, 
        criticChance: 13, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.05, 1 + Math.floor(Math.random() * 3)),
        pp: 30 })

    const rayoncharge = createMove({ 
        name: 'Rayon chargé', 
        type: TYPES.FOUDRE, 
        damage: 25, 
        precision: 95, 
        criticChance: 33, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.05, 1 + Math.floor(Math.random() * 3)),
        pp: 35 })

    const tonnerre = createMove({ 
        name: 'Tonerre', 
        type: TYPES.FOUDRE, 
        damage: 60, 
        precision: 95, 
        criticChance: 18, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.1, 1 + Math.floor(Math.random() * 3)),
        pp: 15 })

    const poingeclair = createMove({ 
        name: "Poing Eclair", 
        type: TYPES.FOUDRE, 
        damage: 45, 
        precision: 73, 
        criticChance: 17, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.08, (1 + Math.floor(Math.random() * 3))),
        pp: 15 })

    const fatalfoudre = createMove({ 
        name: "Fatal Foudre", 
        type: TYPES.FOUDRE, 
        damage: 110, 
        precision: 70, 
        criticChance: 10, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.2, (1 + Math.floor(Math.random() * 3))),
        pp: 10 })

    const crocseclair = createMove({ 
        name: "Crocs Eclair", 
        type: TYPES.FOUDRE, 
        damage: 50, 
        precision: 80, 
        criticChance: 13, 
        img: 'img', 
        category: 'physical',
        effect: isParalyzed(0.3, (1 + Math.floor(Math.random() * 3))),
        pp: 10 })

export const MOVES_FOUDRE = {
    eclair, etincelle, cageeclair, rayoncharge, tonnerre, poingeclair,
    fatalfoudre, crocseclair
}