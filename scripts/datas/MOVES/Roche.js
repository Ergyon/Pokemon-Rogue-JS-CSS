import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const jetpierre = createMove({ 
    name: 'Jet Pierres', 
    type: TYPES.ROCHE, 
    damage: 31, 
    precision: 82, 
    criticChance: 36, 
    img: 'img', 
    pp: 25 })



export const MOVES_ROCHE = {
    jetpierre
}