import { getRandomPokemon } from "./main.js";
import { allMoves } from "./moves.js";
import { Pokemon } from "./pokemon.js";
import { displayPokemons, showMessage, updateHp } from "./ui.js";

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
    
    displayPokemons(pkmnPlayer, pkmnEnemy, doAttack)

}



// Lancer l'attaque choisie + attaque de l'ennemie
export function doAttack(move) {
    const playerMessages = pkmnPlayer.doMove(move, pkmnEnemy).split('\n')    
    playerMessages.forEach((msg, i) => {
        setTimeout(() => {
            showMessage(msg)
        }, i * 1200)
    })


    setTimeout(() => {
        updateHp(pkmnEnemy, 'enemy')
    }, playerMessages.length * 800);

    if (pkmnEnemy.isKO()) return
    
    // attaque de l'ennemi
    setTimeout(() => {
        const PPmove = pkmnEnemy.moves.filter(move => move.pp > 0)
        if (PPmove. length === 0) {
            showMessage(`${pkmnEnemy.name} ne peut plus utiliser ${move.pp}`)
            return
        }
        const enemyMove = pkmnEnemy.moves[Math.floor(Math.random() * pkmnEnemy.moves.length)]
        const enemyMessages = pkmnEnemy.doMove(enemyMove, pkmnPlayer).split('\n')

        enemyMessages.forEach((msg, i) => {
            setTimeout(() => {
                showMessage(msg)
            }, i * 1200);
        })
        setTimeout(() => {
            updateHp(pkmnPlayer, 'player')
        }, enemyMessages.length * 800);

    }, playerMessages.length * 1000 + 1000);
}

 
