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
    pp: 20 })

    const etincelle = createMove({ 
    name: 'Etincelle', 
    type: TYPES.FOUDRE, 
    damage: 25, 
    precision: 85, 
    criticChance: 13, 
    img: 'img', 
    pp: 30 })

    const rayoncharge = createMove({ 
    name: 'Rayon chargé', 
    type: TYPES.FOUDRE, 
    damage: 21, 
    precision: 95, 
    criticChance: 33, 
    img: 'img', 
    pp: 35 })


export const MOVES_FOUDRE = {
    eclair, etincelle, cageeclair, rayoncharge
}