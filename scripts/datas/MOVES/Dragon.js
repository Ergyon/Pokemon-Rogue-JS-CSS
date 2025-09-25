import { TYPES } from "../../datas/types.js";
import { createMove } from "../../game/class/move.js";
import { isParalyzed } from "../../game/mechanics/status.js";

// PHYSICAL
const ouragan = createMove({ 
        name: 'Ouragan', 
        type: TYPES.DRAGON, 
        damage: 23, 
        precision: 85, 
        criticChance: 29, 
        img: 'img', 
        pp: 25 })

    const dracorage = createMove({ 
            name: 'Dracorage', 
            type: TYPES.DRAGON, 
            damage: 55, 
            precision: 95, 
            criticChance: 25, 
            img: 'img', 
            pp: 25 })

    const dracosouffle = createMove({ 
            name: 'Draco-Souffle', 
            type: TYPES.DRAGON, 
            damage: 60, 
            precision: 85, 
            criticChance: 15, 
            img: 'img', 
            category: 'physical',
            effect: isParalyzed(0.07, (1 + Math.floor(Math.random() * 4))),
            pp: 20 })
            
    const dracogriffe = createMove({ 
            name: 'Draco-Griffe', 
            type: TYPES.DRAGON, 
            damage: 80, 
            precision: 88, 
            criticChance: 20, 
            img: 'img', 
            pp: 15 })

    const dracochoc = createMove({ 
            name: 'Draco-Choc', 
            type: TYPES.DRAGON, 
            damage: 85, 
            precision: 90, 
            criticChance: 11, 
            img: 'img', 
            pp: 10 })

    const dracocharge = createMove({ 
            name: 'Draco-Charge', 
            type: TYPES.DRAGON, 
            damage: 100, 
            precision: 75, 
            criticChance: 10, 
            img: 'img', 
            pp: 10 })

export const MOVES_DRAGON = {
    ouragan, dracorage, dracosouffle, dracogriffe, dracochoc, dracocharge
}