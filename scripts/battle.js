import { Pokemon } from "./pokemon.js";
import { allMoves } from "./moves.js";
import { getRandomPokemon, displayPokemons } from "./main.js";


document.addEventListener("DOMContentLoaded", () => {
    initBattle()
})

// recuperer et reconstruire le starter stocke
function loadStarter() {
    const data = localStorage.getItem("starter")
    if (!data) return null

    const parsed = JSON.parse(data)

    const moves = parsed.moves
        .map(m => m?.name || m)
        .map(name => Object.values(allMoves).find(m => m.name === name))
        .filter(Boolean)

    return new Pokemon(
        parsed.name,
        parsed.type,
        parsed.hp,
        parsed.attack,
        parsed.defense,
        parsed.critical,
        moves,
        parsed.img,
        parsed.rank
    )
}


// Lancer combat
function initBattle() {
    const starter = loadStarter()
    let enemy = getRandomPokemon({rank:1})
    
    if (!starter || !enemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    displayPokemons(starter, enemy)
}