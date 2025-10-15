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
    pp: 25 })

    const ventglace = createMove({ 
        name: "Vent Glacé", 
        type: TYPES.GLACE, 
        damage: 22, 
        precision: 95, 
        criticChance: 15, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.05, (1 + Math.floor(Math.random() * 3))),
        pp: 30 })

    const ondeboreale = createMove({ 
        name: "Onde Boréale", 
        type: TYPES.GLACE, 
        damage: 40, 
        precision: 81, 
        criticChance: 18, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.09, (1 + Math.floor(Math.random() * 3))),
        pp: 20 })

    const poingglace = createMove({ 
        name: "Poing Glace", 
        type: TYPES.GLACE, 
        damage: 45, 
        precision: 73, 
        criticChance: 17, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.08, (1 + Math.floor(Math.random() * 3))),
        pp: 15 })

    const blizzard = createMove({ 
        name: "Blizzard", 
        type: TYPES.GLACE, 
        damage: 110, 
        precision: 70, 
        criticChance: 10, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.2, (1 + Math.floor(Math.random() * 3))),
        pp: 5 })

    const laserglace = createMove({ 
        name: "Laser Glace", 
        type: TYPES.GLACE, 
        damage: 90, 
        precision: 85, 
        criticChance: 15, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.05, (1 + Math.floor(Math.random() * 3))),
        pp: 15 })

    const crocsgivre = createMove({ 
        name: "Crocs Givrés", 
        type: TYPES.GLACE, 
        damage: 55, 
        precision: 85, 
        criticChance: 10, 
        img: 'img', 
        category: 'physical',
        effect: isFrozen(0.05, (1 + Math.floor(Math.random() * 3))),
        pp: 10 })

export const MOVES_GLACE = {
    poudreuse, ventglace, ondeboreale, poingglace, blizzard, laserglace,
    crocsgivre
}