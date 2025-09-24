import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isAsleep, isParalyzed } from "../../game/mechanics/status.js"

// STATUS
const paraspore = createMove({ 
    name: 'Para-Spore', 
    type: TYPES.INSECTE, 
    precision: 70, 
    img: 'img',
    category: 'statuts',
    effect: isParalyzed(1, (1 + Math.floor(Math.random() * 3))),
    pp: 20
})

    const poudredodo = createMove({ 
        name: 'Poudre dodo', 
        type: TYPES.INSECTE, 
        precision: 70, 
        img: 'img',
        category: 'statuts',
        effect: isAsleep((1 + Math.floor(Math.random() * 3))),
        pp: 20
    })


export const MOVES_INSECTE = {
    paraspore, poudredodo
}