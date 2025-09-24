import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const jetpierre = createMove({ 
    name: 'Jet Pierres', 
    type: TYPES.ROCHE, 
    damage: 31, 
    precision: 82, 
    criticChance: 36, 
    img: 'img', 
    pp: 25 })

    const pouvantique = createMove({ 
    name: 'Pouvoir Antique', 
    type: TYPES.ROCHE, 
    damage: 35, 
    precision: 70, 
    criticChance: 45, 
    img: 'img', 
    pp: 10 })

    const roulade = createMove({ 
    name: 'Roulade', 
    type: TYPES.ROCHE, 
    damage: 25, 
    precision: 80, 
    criticChance: 10, 
    img: 'img', 
    pp: 30 })

export const MOVES_ROCHE = {
    jetpierre, pouvantique, roulade
}