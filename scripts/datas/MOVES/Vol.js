import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const tornade = createMove({ 
    name: 'Tornade', 
    type: TYPES.VOL, 
    damage: 34, 
    precision: 94, 
    criticChance: 14, 
    img: 'img',
    pp: 20 })



export const MOVES_VOL = {
    tornade
}