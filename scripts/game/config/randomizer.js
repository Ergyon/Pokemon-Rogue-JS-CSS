import { allBadges } from "../../datas/allbadges.js";
import { allItems } from "../../datas/allitems.js";
import { POKEDEX } from "../../datas/POKEDEX/pokedex.js";
import { allTrainers } from "../class/trainer.js";

// generer pokemon random (pokedex, rank, autres)
export function getRandomPokemon({rank = null, list = null} = {}) {
    let source = []

    if (Array.isArray(list)) {
        source = list
        if (source.length === 0) {
        console.warn('getRandomPokemon :verifie tes imports ou si tu as cree le rank connard', r, '(POKEDEX=', POKEDEX.length, ')');
        return undefined
        }
    } else if (rank !== null) {
        const selectedRank = Array.isArray(rank)
            ? rank[Math.floor(Math.random() * rank.length)]
            : rank

        source = POKEDEX.filter(pkmn => pkmn.rank === selectedRank)

    } else {
        source = POKEDEX
    }

    const index = Math.floor(Math.random() * source.length)
    return source[index]
}


// genere une attaque aleatoire
export function getRandomMove(pokemon) {
    const availablesMoves = pokemon.moves.filter(m => m.pp > 0)
    if (availablesMoves.length === 0) return null
    const random = Math.floor(Math.random() * availablesMoves.length)
    return availablesMoves[random]
}

// genere un trainer aleatoire
export function getRandomTrainer({round= null} = {}) {
    let source = allTrainers
    if (round !== null) {
        source = source.filter(t => t.round === round)
    }
    const index = Math.floor(Math.random() * source.length)
    return source[index]
}

// genere un item random
export function getRandomItem({rank=null} = {}) {
    const source = Object.values(allItems)

    if (rank === null || rank === undefined) {
        const index = Math.floor(Math.random() * source.length)
        return source[index]
    }

        const selectedRank = Array.isArray(rank)
        ? rank[Math.floor(Math.random() * rank.length)]
        : rank

        const pool = source.filter(it => it.rank === selectedRank)
        
        if (pool.length === 0) {
            return undefined
        }
    
    const index = Math.floor(Math.random() * pool.length)
    return pool[index]
}

// genere un badge random
export function getRandomBadge() {
    const badge = allBadges
    const index = Math.floor(Math.random() * allBadges.length)
    return badge[index]
}