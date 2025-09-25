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

    const eboulement = createMove({ 
        name: 'Eboulement', 
        type: TYPES.ROCHE, 
        damage: 50, 
        precision: 75, 
        criticChance: 24, 
        img: 'img', 
        pp: 15 })

    const lamederoc = createMove({ 
        name: 'Lame de Roc', 
        type: TYPES.ROCHE, 
        damage: 100, 
        precision: 75, 
        criticChance: 35, 
        img: 'img', 
        pp: 5 })


export const MOVES_ROCHE = {
    jetpierre, pouvantique, roulade, eboulement, lamederoc
}