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

const picpic = createMove({
    name: 'picpic',
    type: TYPES.VOL,
    damage: 24,
    precision: 90,
    criticChance: 35,
    img: 'img',
    pp: 25 })

export const MOVES_VOL = {
    tornade, picpic
}