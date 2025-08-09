import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../moves.js"
import { TYPES } from "../../types.js"

const feurisson = new Pokemon({
    name: 'Feurisson',
    type: TYPES.FEU,
    hp: 167,
    attack: 30,
    defense: 26,
    critical: 0.7,
    moves: [allMoves.rouedefeu, allMoves.brouillard, allMoves.morsure, allMoves.flammeche],
    img: '../assets/img/pokemons/feurisson.png',
    rank: 2
})


export const RANK_II_GEN_2 = [
    feurisson
]