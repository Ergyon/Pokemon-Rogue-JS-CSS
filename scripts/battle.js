import { Pokemon } from "./pokemon.js";
import { allMoves } from "./moves.js";
import { getRandomPokemon, displayPokemons, displayMenuAttack, updateHp } from "./main.js";


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
    updateHp(pkmnEnemy, 'enemy')

    if (pkmnEnemy.isKO()) {
        console.log(`${pkmnEnemy.name} est KO !`)
        return
    }

    // si l'ennemie n'a plus de pp
    const PPmove = pkmnEnemy.moves.filter(move => move.pp > 0)
    if (PPmove. length === 0) {
        console.log(`${pkmnEnemy.name} ne peut plus utiliser ${move.pp}`)
        return
    }

    // attaque de l'ennemi
    const enemyMove = pkmnEnemy.moves[Math.floor(Math.random() * pkmnEnemy.moves.length)]
    pkmnEnemy.doMove(enemyMove, pkmnPlayer)
    updateHp(pkmnPlayer, 'player')

    if (pkmnPlayer.isKO()) {
        console.log(`${pkmnPlayer.name} est KO...`)
    }
}