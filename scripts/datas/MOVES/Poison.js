import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isPoisoned } from "../../game/mechanics/status.js"

// HYBRIDES
const dardvenin = createMove({ 
    name: 'Dard-Venin', 
    type: TYPES.POISON, 
    damage: 23, 
    precision: 92, 
    criticChance: 33, 
    img: 'img', 
    category: 'physical', 
    effect: isPoisoned(0.4, 15, (1 + Math.floor(Math.random() * 3))),
    pp: 25
})

    const detritus = createMove({ 
        name: 'Détritus', 
        type: TYPES.POISON, 
        damage: 48, 
        precision: 75, 
        criticChance: 45, 
        img: 'img', 
        category: 'physical', 
        effect: isPoisoned(0.5, 25, (2 + Math.floor(Math.random() * 4))),
        pp: 20
    })



        
export const MOVES_POISON = {
    dardvenin, detritus
}