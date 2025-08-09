import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { lowerPrecision } from "../../game/mechanics/stats-change.js"

// HYBRIDES
const coupdboue = createMove({
    name: "Coup d'boue", 
    type: TYPES.SOL, 
    damage: 27, 
    precision: 78, 
    criticChance: 42, 
    img: 'img', 
    pp: 30, 
    category: 'physical', 
    effect: lowerPrecision(0.97)})


// PHYSICAL
const seisme = createMove({ 
    name: 'Seisme', 
    type: TYPES.SOL, 
    damage: 120, 
    precision: 100, 
    criticChance: 70, 
    img: 'img', 
    pp: 10 })

export const MOVES_SOL = {
    coupdboue, seisme
}
