import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isBurned } from "../../game/mechanics/status.js"


// PHYSICAL
const flammeche = createMove({ 
    name: 'Flammèche', 
    type: TYPES.FEU, 
    damage: 35, 
    precision: 85, 
    criticChance: 13, 
    img: '../img/moves/flame-1.png', 
    pp: 20 })

    const crocsfeu = createMove({ 
        name: 'Crocs Feu', 
        type: TYPES.FEU, 
        damage: 60, 
        precision: 85, 
        criticChance: 10, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.05, 1 + Math.floor(Math.random() * 3)),
        pp: 15 })

    const poingfeu = createMove({ 
        name: 'Poing Feu', 
        type: TYPES.FEU, 
        damage: 45, 
        precision: 73, 
        criticChance: 17, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.08, 1 + Math.floor(Math.random() * 3)),
        pp: 15 })

    const rouedefeu = createMove({ 
        name: 'Roue de Feu', 
        type: TYPES.FEU, 
        damage: 50, 
        precision: 78, 
        criticChance: 22, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.05, 1 + Math.floor(Math.random() * 3)),
        pp: 20 })

    const piedbruleur = createMove({ 
        name: 'Pied Bruleur', 
        type: TYPES.FEU, 
        damage: 54, 
        precision: 73, 
        criticChance: 14, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.1, 1 + Math.floor(Math.random() * 3)),
        pp: 10 })

    const lanceflamme = createMove({ 
        name: 'Lance-Flammes', 
        type: TYPES.FEU, 
        damage: 90, 
        precision: 85, 
        criticChance: 15, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.05, 1 + Math.floor(Math.random() * 3)),
        pp: 15 })

    const canicule = createMove({ 
        name: 'Canicule', 
        type: TYPES.FEU, 
        damage: 95, 
        precision: 75, 
        criticChance: 10, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.1, 1 + Math.floor(Math.random() * 3)),
        pp: 10 })
    
    const deflagration = createMove({ 
        name: 'Déflagration', 
        type: TYPES.FEU, 
        damage: 110, 
        precision: 75, 
        criticChance: 10, 
        img: '../img/moves/flame-1.png', 
        category: 'physical',
        effect: isBurned(0.1, 1 + Math.floor(Math.random() * 3)),
        pp: 5 })

export const MOVES_FEU = {
    flammeche, crocsfeu, poingfeu, rouedefeu, piedbruleur, lanceflamme, canicule, 
    deflagration
}