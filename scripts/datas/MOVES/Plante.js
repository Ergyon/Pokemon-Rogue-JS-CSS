import { TYPES } from "../../datas/types.js";
import { createMove } from "../../game/class/move.js";


const tranchherb = createMove({ 
    name: "Tranch'Herb", 
    type: TYPES.PLANTE, 
    damage: 36, 
    precision: 85, 
    criticChance: 20, 
    img: '../img/moves/leafs-2.png', 
    pp: 20 })

    const fouetliane = createMove({ 
    name: 'Fouet Lianes', 
    type: TYPES.PLANTE, 
    damage: 25, 
    precision: 95, 
    criticChance: 26, 
    img: 'img', 
    pp: 25 })

    export const MOVES_PLANTE = {
        tranchherb, fouetliane
    }