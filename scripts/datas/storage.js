import { Pokemon } from "../game/class/pokemon.js"
import { allMoves } from "./MOVES/allMoves.js"
import { TYPES } from "./types.js"

export function constructPokemon(pkmnData) {
    const safeMoves = (pkmnData.moves || [])
        .map(move => {
            const name = typeof move === "string" ? move : move?.name
            if (!name) return null

            const key = name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, '')  
                .replace(/[^a-z0-9]/gi, '')       

            return allMoves[key] || null
        })
        .filter(Boolean) 
        
    return new Pokemon({
        name: pkmnData.name,
        type: TYPES[pkmnData.type], 
        hp: pkmnData.maxHP,
        attack: pkmnData.attack,
        defense: pkmnData.defense,
        baseAttack: pkmnData.baseAttack,
        baseDefense: pkmnData.baseDefense,
        critical: pkmnData.critical,
        moves: safeMoves,
        img: pkmnData.img,
        rank: pkmnData.rank,
        poisonDamage: pkmnData.poisonDamage,
        burnDamage: pkmnData.burnDamage
    })

}
