import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"


// PHYSICAL
const pistoletao = createMove({ 
            name: 'Pistolet à O', 
            type: TYPES.EAU, 
            damage: 35, 
            precision: 85, 
            criticChance: 15, 
            img: '../img/moves/water-1.png', 
            pp: 20 })

export const MOVES_EAU = {
    pistoletao
}