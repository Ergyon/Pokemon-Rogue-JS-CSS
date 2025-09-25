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

const ballombre = createMove({ 
    name: "Ball'Ombre", 
    type: TYPES.SPECTRE, 
    damage: 65, 
    precision: 79, 
    criticChance: 31, 
    img: 'img', 
    pp: 15 })

const griffombre = createMove({ 
    name: "Griffe Ombre", 
    type: TYPES.SPECTRE, 
    damage: 50, 
    precision: 80, 
    criticChance: 15, 
    img: 'img', 
    pp: 15 })


export const MOVES_SPECTRE = {
    lechouille, ballombre, griffombre
}