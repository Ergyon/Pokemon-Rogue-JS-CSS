import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const lechouille = createMove({ 
            name: 'Léchouille', 
            type: TYPES.SPECTRE, 
            damage: 23, 
            precision: 85, 
            criticChance: 40, 
            img: 'img', 
            pp: 25 })



export const MOVES_SPECTRE = {
    lechouille
}