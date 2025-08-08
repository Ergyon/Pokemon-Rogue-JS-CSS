import { getRandomPokemon } from "./config/randomizer.js";

// Choisir son starter
const pokeballs = document.querySelectorAll(".pokeball");
const starterTextWrap = document.querySelector(".message-wrapper");
const battleLink = document.querySelector(".fight-link-wrap")
let chosen = false;

window.addEventListener("DOMContentLoaded", () => {
    pokeballs.forEach((ball, index) => {
        setTimeout(() => {
            ball.classList.add("visible");
        }, index * 900)
    })
})


function chooseStarter(pokeball) {
    if (chosen) return

    // pokemon random rank I
    const pkmnStarter = getRandomPokemon({ rank: 1 })

    pokeball.classList.remove("pokeball", "visible")
    pokeball.classList.add("pokemon")
    pokeball.src = pkmnStarter.img
    pokeball.alt = pkmnStarter.name

    const message = document.createElement("span")
    message.classList.add("pokeball-message")
    message.textContent = `Vous obtenez ${pkmnStarter.name}`
    starterTextWrap.appendChild(message)

    // stock dans le local storage
    localStorage.setItem("starter", JSON.stringify(pkmnStarter))

    pokeballs.forEach(otherBall => {
        if (otherBall !== pokeball) {
            otherBall.classList.remove("visible")
            otherBall.classList.add("disabled")
        }
    })

    chosen = true

    const linkContainer = document.getElementById('battle-link')

    const gameLink = document.createElement('a')
    gameLink.href = './battle.html'
    gameLink.classList.add('fight-link-wrap fight-link-wrap__anim')

    linkContainer.appendChild(gameLink)

}

pokeballs.forEach(pokeball => {
    pokeball.addEventListener("click", () => chooseStarter(pokeball))
})

