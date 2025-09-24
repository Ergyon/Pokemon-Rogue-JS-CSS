import { TYPES } from "../../datas/types.js";
import { createMove } from "../../game/class/move.js";
import { isFrozen } from "../../game/mechanics/status.js";

// PHYSICAL
const poudreuse = createMove({ 
        name: 'Poudreuse', 
        type: TYPES.GLACE, 
        damage: 27, 
        precision: 85, 
        criticChance: 19, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.1, (1 + Math.floor(Math.random() * 3))),
        pp: 25 
    })

export const MOVES_GLACE = {
    poudreuse,
}