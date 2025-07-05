import { Pokemon } from "./pokemon.js";
import { allMoves } from "./moves.js";
import { getRandomPokemon, displayPokemons, displayMenuAttack } from "./main.js";
import { updateHp, showMessage } from "./main.js";

document.addEventListener("DOMContentLoaded", () => {
    initBattle()
})

let pkmnPlayer = null
let pkmnEnemy = null

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
    pkmnPlayer = loadStarter()
    pkmnEnemy = getRandomPokemon({rank:1})
    
    if (!pkmnPlayer || !pkmnEnemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    displayPokemons(pkmnPlayer, pkmnEnemy)

    const playerImg = document.querySelector('.player-appears .arena__card__pkmn')
    playerImg.addEventListener("click", () => {
        displayMenuAttack(pkmnPlayer, doAttack)
    })
}



// Lancer l'attaque choisie + attaque de l'ennemie
export function doAttack(move) {
    pkmnPlayer.doMove(move, pkmnEnemy)
    setTimeout(() => {
        updateHp(pkmnEnemy, 'enemy')
    }, 700);
    showMessage(`${pkmnPlayer.name} lance ${move.name}`)

    
    if (pkmnEnemy.isKO()) {
        showMessage(`${pkmnEnemy.name} est KO...`)
        return
    }

    // si l'ennemie n'a plus de pp
    const PPmove = pkmnEnemy.moves.filter(move => move.pp > 0)
    if (PPmove. length === 0) {
        showMessage(`${pkmnEnemy.name} ne peut plus utiliser ${move.pp}`)
        return
    }

    // attaque de l'ennemi
    setTimeout(() => {
        const enemyMove = pkmnEnemy.moves[Math.floor(Math.random() * pkmnEnemy.moves.length)]
        pkmnEnemy.doMove(enemyMove, pkmnPlayer)
        setTimeout(() => {
            updateHp(pkmnPlayer, 'player')
        }, 700);
        showMessage(`${pkmnEnemy.name} lance ${enemyMove.name}`)

        if (pkmnPlayer.isKO()) {
        showMessage(`${pkmnPlayer.name} est KO...`)
        return
    }
    }, 2500)
}