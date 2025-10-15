import { TYPES } from "../../datas/types.js"
import { createMove } from "../../game/class/move.js"

// PHYSICAL
const tornade = createMove({ 
    name: 'Tornade', 
    type: TYPES.VOL, 
    damage: 34, 
    precision: 94, 
    criticChance: 14, 
    img: 'img',
    pp: 20 })

    const picpic = createMove({
        name: 'Picpic',
        type: TYPES.VOL,
        damage: 24,
        precision: 90,
        criticChance: 35,
        img: 'img',
        pp: 25 })

    const cruailes = createMove({
        name: "Cru Ailes",
        type: TYPES.VOL,
        damage: 40,
        precision: 95,
        criticChance: 36,
        img: 'img',
        pp: 25 })

    const lamedair = createMove({
        name: "Lame d'Air",
        type: TYPES.VOL,
        damage: 55,
        precision: 88,
        criticChance: 20,
        img: 'img',
        pp: 15 })

    const aeropique = createMove({
        name: "Aéropique",
        type: TYPES.VOL,
        damage: 65,
        precision: 100,
        criticChance: 25,
        img: 'img',
        pp: 20 })

    const ventviolent = createMove({
        name: "Vent Violent",
        type: TYPES.VOL,
        damage: 90,
        precision: 70,
        criticChance: 7,
        img: 'img',
        pp: 10 })

    const aeroblast = createMove({
        name: "Aéroblast",
        type: TYPES.VOL,
        damage: 120,
        precision: 75,
        criticChance: 7,
        img: 'img',
        pp: 5 })


export const MOVES_VOL = {
    tornade, picpic, cruailes, lamedair, aeropique, ventviolent, aeroblast
}