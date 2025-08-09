import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"


// PHYSICAL
const flammeche = createMove({ 
    name: 'Flammèche', 
    type: TYPES.FEU, 
    damage: 35, 
    precision: 85, 
    criticChance: 13, 
    img: '../img/moves/flame-1.png', 
    pp: 20 })

export const MOVES_FEU = {
    flammeche
}