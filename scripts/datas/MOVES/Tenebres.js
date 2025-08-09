import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"


// PHYSICAL
const morsure = createMove({ 
    name: 'Morsure', 
    type: TYPES.TENEBRES, 
    damage: 26, 
    precision: 90,
    criticChance: 30, 
    img: 'img', 
    pp: 20 })
        
    const machouille = createMove({ 
        name: 'Machouille', 
        type: TYPES.TENEBRES, 
        damage: 60, 
        precision: 90, 
        criticChance: 48, 
        img: 'img', 
        pp: 20 })



export const MOVES_TENEBRES = {
    morsure, machouille
}