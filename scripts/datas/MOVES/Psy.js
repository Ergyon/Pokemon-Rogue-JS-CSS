import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"
import { isAsleep } from "../../game/mechanics/status.js"

// STATUS
const hypnose = createMove({ 
    name: 'Hypnose', 
    type: TYPES.PSY, 
    precision: 54, 
    img: 'img',
    pp: 15, 
    category: 'status', 
    effect: isAsleep(1 + Math.floor(Math.random() * 3)) })

// PHYSICAL
const chocmental = createMove({ 
    name: 'Choc mental', 
    type: TYPES.PSY, 
    damage: 33, 
    precision: 88, 
    criticChance: 15, 
    img: 'img', 
    pp: 20 })

    const rafalepsy = createMove({ 
        name: 'Rafale Psy', 
        type: TYPES.PSY, 
        damage: 45, 
        precision: 80, 
        criticChance: 23, 
        img: 'img', 
        pp: 20 })

    const psykoudboul = createMove({ 
        name: "Psykoud'Boul", 
        type: TYPES.PSY, 
        damage: 57, 
        precision: 83, 
        criticChance: 16, 
        img: 'img', 
        pp: 20 })

    const psyko = createMove({ 
        name: "Psyko", 
        type: TYPES.PSY, 
        damage: 90, 
        precision: 85, 
        criticChance: 20, 
        img: 'img', 
        pp: 15 })   

export const MOVES_PSY = {
    hypnose, chocmental, rafalepsy, psykoudboul, psyko
}