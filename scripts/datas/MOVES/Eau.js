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

        const ecumes = createMove({ 
        name: 'Ecumes', 
        type: TYPES.EAU, 
        damage: 19, 
        precision: 93, 
        criticChance: 20, 
        img: '../img/moves/water-1.png', 
        pp: 35 })

        const bullesdo = createMove({ 
        name: "Bulles d'o", 
        type: TYPES.EAU, 
        damage: 26, 
        precision: 90, 
        criticChance: 17, 
        img: '../img/moves/water-1.png', 
        pp: 25 })

export const MOVES_EAU = {
    pistoletao, ecumes, bullesdo
}