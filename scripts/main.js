import { pokedex } from "./pokedex.js";
// import { allMoves } from "./moves.js";
// import { Pokemon } from "./pokemon.js";

// Generer pokemon random (pokedex, rank, autres)
export function getRandomPokemon({rank = null, list = null} = {}) {
    let source = []

    if (Array.isArray(list)) {
        source = list
    }
    else if (rank !== null) {
        source = pokedex.filter(pkmn => pkmn.rank === rank)
    }
    else {
        source = pokedex
    }

    const index = Math.floor(Math.random() * source.length)
    return source[index]
}

// Choisir son starter
if (document.querySelector(".pokeball")) {
    const pokeballs = document.querySelectorAll(".pokeball")
    const starterTextWrap = document.querySelector(".message-wrapper")
    let chosen = false
    
    pokeballs.forEach(pokeball => {
        pokeball.addEventListener("click", () => {
            if (chosen) return
    
            const pkmnStarter = getRandomPokemon({rank:1})
    
            pokeball.classList.remove("pokeball")
            pokeball.classList.add("pokemon")
            pokeball.src = pkmnStarter.img
            pokeball.alt = pkmnStarter.name
    
            const message = document.createElement("span")
            message.classList.add("pokeball-message")
            message.textContent = `Vous obtenez ${pkmnStarter.name}`
            starterTextWrap.appendChild(message)
    
            // Stocker le starter 
            localStorage.setItem("starter", JSON.stringify(pkmnStarter))
    
            pokeballs.forEach(otherBall => {
                if (!otherBall.classList.contains("pokemon")) {
                    otherBall.classList.add("disabled")
                }
            })
    
            chosen = true
        })
    })
}

// Faire apparaitre les pokemons au combat
export function displayPokemons(player, enemy){
    const arena = document.getElementById("arena")
    const cardPlayer = document.createElement("div")
    const pkmnPlayerName = document.createElement("span")
    const pkmnPlayerImg = document.createElement("img")
    const pkmnPlayerPv = document.createElement("span")


    const cardEnemy = document.createElement("div")
    const pkmnEnemyName = document.createElement("span")
    const pkmnEnemyImg = document.createElement("img")
    const pkmnEnemyPv = document.createElement("span")

    pkmnPlayerName.textContent = player.name
    pkmnPlayerPv.textContent = player.hp
    pkmnPlayerImg.src = player.img
    pkmnPlayerImg.alt = player.name

    pkmnEnemyName.textContent = enemy.name
    pkmnEnemyPv.textContent= enemy.hp 
    pkmnEnemyImg.src = enemy.img
    pkmnEnemyImg.alt = enemy.name

    const battleTextWrapper = document.querySelector(".battle-txt-container")
    const pokemonText = document.createElement("span")
    pokemonText.textContent = `Un ${enemy.name} sauvage apparait`
    pokemonText.classList.add("pokemon-txt")

    cardPlayer.classList.add("arena__card", "player-appears")
    pkmnPlayerName.classList.add("arena__card__name")
    pkmnPlayerPv.classList.add("arena__card--pv")
    pkmnPlayerImg.classList.add("arena__card__pkmn")
    
    cardEnemy.classList.add("arena__card", "enemy-appears")
    pkmnEnemyName.classList.add("arena__card__name")
    pkmnEnemyPv.classList.add("arena__card--pv")
    pkmnEnemyImg.classList.add("arena__card__pkmn")

    cardPlayer.append(pkmnPlayerName, pkmnPlayerImg, pkmnPlayerPv)
    cardEnemy.append(pkmnEnemyName, pkmnEnemyImg, pkmnEnemyPv)
    arena.append(cardPlayer, cardEnemy,)
    battleTextWrapper.appendChild(pokemonText)
}
