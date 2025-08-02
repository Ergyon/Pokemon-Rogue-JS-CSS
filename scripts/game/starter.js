import { pokedex } from "../datas/pokedex.js";


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

