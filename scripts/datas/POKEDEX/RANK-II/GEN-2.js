import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
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

const scorvol = new Pokemon({
    name: 'Scorvol',
    type: TYPES.SOL,
    hp: 149,
    attack: 25,
    defense: 25,
    critical: 1.05,
    moves: [allMoves.crochetvenin, allMoves.viveattaque, allMoves.abri, allMoves.griffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gligar.gif",
    rank: 2
})

export const RANK_II_GEN_2 = [
    feurisson, scorvol
]