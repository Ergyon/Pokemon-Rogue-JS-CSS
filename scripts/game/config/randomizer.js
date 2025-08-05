import { pokedex } from "../../datas/pokedex.js"
import { allTrainers } from "../class/trainer.js"

// Generer pokemon random (pokedex, rank, autres)
export function getRandomPokemon({rank = null, list = null} = {}) {
    let source = []

    if (Array.isArray(list)) {
        source = list
    } else if (rank !== null) {
        source = pokedex.filter(pkmn => pkmn.rank === rank)
    } else {
        source = pokedex
    }

    const index = Math.floor(Math.random() * source.length)
    return source[index]
}

// Genere une attaque aleatoirement
export function getRandomMove(pokemon) {
    const availablesMoves = pokemon.moves.filter(m => m.pp > 0)
    if (availablesMoves.length === 0) return null
    const random = Math.floor(Math.random() * availablesMoves.length)
    return availablesMoves[random]
}

// Genere un trainer aleatoire
export function getRandomTrainer() {
    const source = allTrainers
    const index = Math.floor(Math.random() * source.length)
    return source[index]
}