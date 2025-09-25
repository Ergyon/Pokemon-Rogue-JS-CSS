import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const balayage = createMove({ 
        name: 'Balayage', 
        type: TYPES.COMBAT, 
        damage: 25, 
        precision: 95, 
        criticChance: 39, 
        img: 'img/moves/...png', 
        pp: 25 })

    const poingkarate = createMove({ 
        name: "Poing Karaté", 
        type: TYPES.COMBAT, 
        damage: 30, 
        precision: 85, 
        criticChance: 20, 
        img: 'img/moves/...png', 
        pp: 20 })

    const cassebrique = createMove({ 
        name: "Casse Brique", 
        type: TYPES.COMBAT, 
        damage: 60, 
        precision: 80, 
        criticChance: 14, 
        img: 'img/moves/...png', 
        pp: 15 })

    const aurasphere = createMove({ 
        name: "Aurasphère", 
        type: TYPES.COMBAT, 
        damage: 80, 
        precision: 100, 
        criticChance: 19, 
        img: 'img/moves/...png', 
        pp: 15 })

    const exploforce = createMove({ 
        name: "Exploforce", 
        type: TYPES.COMBAT, 
        damage: 120, 
        precision: 70, 
        criticChance: 5, 
        img: 'img/moves/...png', 
        pp: 5 })

    const martopoing = createMove({ 
        name: "Marto-Poing", 
        type: TYPES.COMBAT, 
        damage: 100, 
        precision: 90, 
        criticChance: 10, 
        img: 'img/moves/...png', 
        pp: 10 })

export const MOVES_COMBAT = {
    balayage, poingkarate, cassebrique, aurasphere, exploforce, martopoing
}