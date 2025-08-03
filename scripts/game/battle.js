import { allMoves } from "../datas/moves.js";
import { delay, displayPokemons, showMessage, updateBattleUI } from "../displays/ui.js";
import { mainGameLoop } from "./main.js";
import { Pokemon } from "./pokemon.js";
import { getRandomPokemon } from "./utils.js";

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
        // reconstruire le nom de l'attaque car accent, aposrophe etc...
        .map(name => {
            const key = name
            .toLowerCase()
            .normalize('NFD') 
            .replace(/[\u0300-\u036f]/g, '') 
            .replace(/[^a-z0-9]/gi, '')
            return allMoves[key]
        })
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
    const messages = []

    pkmnPlayer = loadStarter()
    pkmnEnemy = getRandomPokemon({rank:1})
    
    if (!pkmnPlayer || !pkmnEnemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    function updateUI() {
        updateBattleUI(pkmnPlayer, pkmnEnemy, messages)
    }

    displayPokemons(pkmnPlayer, pkmnEnemy, (move) => {
        mainGameLoop(move, pkmnPlayer, pkmnEnemy, updateUI)
    })
    
}

// Gestion de tour
export async function handleTurn(attacker, defender, moves, messages, updateUI) {
    const statusMesssages = []

    const canAct = attacker.applyStatusEffect(statusMesssages)

    for (const msg of statusMesssages) {
        messages.push(msg)
        showMessage(msg)
        updateUI()
        await delay(1000)
    }

    if (!canAct) return

    updateUI()
    await delay(500)

    if (attacker.isKO()) {
        messages.push(`${attacker.name} tombe KO...`)
        updateUI()
        await delay(1000)
        return
    }

    const moveMessages = attacker.doMove(moves, defender).split('\n')
    for (const msg of moveMessages) {
        messages.push(msg)
        showMessage(msg)
        updateUI()
        await delay(1000)
    }

    updateUI()
    await delay(500)

    if (defender.isKO()) {
        messages.push(`${defender.name} tombe KO...`)
        updateUI()
        await delay(1000)
    }
}