import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const eclair = createMove({ 
    name: 'Eclair', 
    type: TYPES.FOUDRE, 
    damage: 35, 
    precision: 81, 
    criticChance: 16, 
    img: 'img', 
    pp: 20 })

export const MOVES_FOUDRE = {
    eclair
}