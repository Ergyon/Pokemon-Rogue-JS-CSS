import { allMoves } from "./moves.js";
import { pokedex } from "./pokedex.js";
import { Pokemon } from "./pokemon.js";

// Filtrer pokemons par rank
function getPokemonRank(rank) {
    return pokedex.filter(pokemon => pokemon.rank === rank)
}

// Pokemon random dans un rank donné
function randomPokemon(pokemonList) {
    const index = Math.floor(Math.random() * pokemonList.length)
    return pokemonList[index]
}

// Choisir son starter
const pokeballs = document.querySelectorAll(".pokeball")
const starterTextWrap = document.querySelector(".message-wrapper")
let chosen = false

pokeballs.forEach(pokeball => {
    pokeball.addEventListener("click", () => {
        if (chosen) return
        const randomRank1 = randomPokemon(getPokemonRank(1))

        pokeball.classList.remove("pokeball")
        pokeball.classList.add("pokemon")
        pokeball.src = randomRank1.img
        pokeball.alt = randomRank1.name

        const message = document.createElement("span")
        message.classList.add("pokeball-message")
        message.textContent = `Vous obtenez ${randomRank1.name}`
        starterTextWrap.appendChild(message)

        // Stocker le starter 
        localStorage.setItem("starter", JSON.stringify(randomRank1))

        pokeballs.forEach(otherBall => {
            if (!otherBall.classList.contains("pokemon")) {
                otherBall.classList.add("disabled")
            }
        })

        chosen = true
    })
})

// recuperer et reconstruire le starter stocke
function loadStarter() {
    const data = localStorage.getItem("starter")
    if (!data) return null

    const parsed = JSON.parse(data)
    const moves = parsed.moves
        .map(m => m.name)
        .map(name => 
            Object.values(allMoves).find(m => m.name === name)
        )
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