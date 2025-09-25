import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"


// PHYSICAL
const morsure = createMove({ 
    name: 'Morsure', 
    type: TYPES.TENEBRES, 
    damage: 26, 
    precision: 90,
    criticChance: 30, 
    img: 'img', 
    pp: 20 })
        
    const machouille = createMove({ 
    name: 'Machouille', 
    type: TYPES.TENEBRES, 
    damage: 50, 
    precision: 90, 
    criticChance: 48, 
    img: 'img', 
    pp: 20 })

    const aboiement = createMove({ 
    name: 'Aboiement', 
    type: TYPES.TENEBRES, 
    damage: 40, 
    precision: 81, 
    criticChance: 18, 
    img: 'img', 
    pp: 20 })

    const vibrobscur = createMove({ 
    name: 'Vibrobscur', 
    type: TYPES.TENEBRES, 
    damage: 55, 
    precision: 83, 
    criticChance: 11, 
    img: 'img', 
    pp: 15 })

export const MOVES_TENEBRES = {
    morsure, machouille, aboiement, vibrobscur
}