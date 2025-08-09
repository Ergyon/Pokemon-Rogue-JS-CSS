import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isAsleep } from "../../game/mechanics/status.js"

// STATUS
const hypnose = createMove({ 
    name: 'Hypnose', 
    type: TYPES.PSY, 
    precision: 54, 
    img: 'img',
    pp: 15, 
    category: 'status', 
    effect: isAsleep(1 + Math.floor(Math.random() * 3)) })

// PHYSICAL
const chocmental = createMove({ 
    name: 'Choc mental', 
    type: TYPES.PSY, 
    damage: 33, 
    precision: 88, 
    criticChance: 15, 
    img: 'img', 
    pp: 20 })



export const MOVES_PSY = {
    hypnose, chocmental
}