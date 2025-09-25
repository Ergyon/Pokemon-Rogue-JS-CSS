import { TYPES } from "../../datas/types.js";
import { createMove } from "../../game/class/move.js";
import { healingSelf } from "../../game/mechanics/stats-change.js";


// PHYSICAL
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

    const megafouet = createMove({ 
        name: 'Mégafouet', 
        type: TYPES.PLANTE, 
        damage: 105, 
        precision: 77, 
        criticChance: 16, 
        img: 'img', 
        pp: 10 })    


// HYBRIDES
const volvie = createMove({ 
    name: "Vol'vie", 
    type: TYPES.PLANTE, 
    damage: 20, 
    precision: 90, 
    criticChance: 29, 
    img: 'img', 
    effect: healingSelf(15),
    category: 'physical',
    pp: 30 })

    const gigasangsue = createMove({ 
        name: "Giga-Sangsue", 
        type: TYPES.PLANTE, 
        damage: 45, 
        precision: 95, 
        criticChance: 14, 
        img: 'img', 
        effect: healingSelf(35),
        category: 'physical',
        pp: 20 })

    const megasangsue = createMove({ 
        name: "Méga-Sangsue", 
        type: TYPES.PLANTE, 
        damage: 70, 
        precision: 85, 
        criticChance: 19, 
        img: 'img', 
        effect: healingSelf(55),
        category: 'physical',
        pp: 10 })    

    const tempeteflorale = createMove({ 
        name: "Méga-Sangsue", 
        type: TYPES.PLANTE, 
        damage: 85, 
        precision: 90, 
        criticChance: 17, 
        img: 'img', 
        pp: 15 })   

    const ecosphere = createMove({ 
        name: "Eco-Sphère", 
        type: TYPES.PLANTE, 
        damage: 90, 
        precision: 95, 
        criticChance: 20, 
        img: 'img', 
        pp: 10 })   

    const lamefeuille = createMove({ 
        name: "Lame Feuille", 
        type: TYPES.PLANTE, 
        damage: 85, 
        precision: 90, 
        criticChance: 30, 
        img: 'img', 
        pp: 15 })   

// STATS
const synthese = createMove({ 
    name: "Synthèse", 
    type: TYPES.PLANTE, 
    precision: 100, 
    img: 'img', 
    category: 'stats',
    effect: healingSelf(60),
    pp: 5 })

    export const MOVES_PLANTE = {
        tranchherb, fouetliane, volvie, gigasangsue, synthese, megasangsue,
        megafouet, tempeteflorale, ecosphere, lamefeuille
    }