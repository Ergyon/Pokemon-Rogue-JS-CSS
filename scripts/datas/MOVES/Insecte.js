import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isAsleep, isParalyzed, isPoisoned } from "../../game/mechanics/status.js"

// STATUS
const paraspore = createMove({ 
    name: 'Para-Spore', 
    type: TYPES.INSECTE, 
    precision: 70, 
    img: 'img',
    category: 'status',
    effect: isParalyzed(1, (1 + Math.floor(Math.random() * 3))),
    pp: 20 })

    const poudredodo = createMove({ 
        name: 'Poudre dodo', 
        type: TYPES.INSECTE, 
        precision: 70, 
        img: 'img',
        category: 'status',
        effect: isAsleep((1 + Math.floor(Math.random() * 3))),
        pp: 20 })

    const poudretoxic = createMove({ 
        name: 'Poudre Toxic', 
        type: TYPES.INSECTE, 
        precision: 70, 
        img: 'img',
        category: 'status',
        effect: isPoisoned(1, 30, (1 + Math.floor(Math.random() * 3))),
        pp: 20 })



// PHYSICAL
const plaiecroix = createMove({ 
    name: 'Plaie Croix', 
    type: TYPES.INSECTE, 
    damage: 60,
    precision: 70, 
    criticChance: 24,
    img: 'img',
    pp: 10 })

    const megacorne = createMove({ 
        name: 'Mégacorne', 
        type: TYPES.INSECTE, 
        damage: 110,
        precision: 72, 
        criticChance: 8,
        img: 'img',
        pp: 10 })

    const piqure = createMove({ 
        name: 'Piqûre', 
        type: TYPES.INSECTE, 
        damage: 50,
        precision: 85, 
        criticChance: 15,
        img: 'img',
        pp: 10 })

export const MOVES_INSECTE = {
    paraspore, poudredodo, poudretoxic, plaiecroix, megacorne, piqure
}