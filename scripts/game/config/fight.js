import { constructPokemon } from "../../datas/storage.js";
import { delay, displayPokemons, showMessage, updateBattleUI } from "../../UI/displays.js";
import { mainPlayer } from "../class/player.js";
import { mainGameLoop } from "../main.js";
import { initDuelsLoop } from "./duelsLoop.js";
import { getRandomPokemon } from "./randomizer.js";

document.addEventListener("DOMContentLoaded", () => {
    initFirstFight()
})


let pkmnPlayer = null
let pkmnEnemy = null


// recuperer et reconstruire le starter stocke
function loadStarter() {
    const data = localStorage.getItem("starter")
    if (!data) return null
    return constructPokemon(JSON.parse(data))
}


// Lancer 1er combat avec starter
function initFirstFight() {
    let isFightOver = false
    const messages = []

    pkmnPlayer = loadStarter()
    mainPlayer.team.push(pkmnPlayer)
    
    pkmnEnemy = getRandomPokemon({rank:1})
    pkmnEnemy.hp = 5
    
    if (!pkmnPlayer || !pkmnEnemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    function updateUI() {
        updateBattleUI(pkmnPlayer, pkmnEnemy, messages)
    }

    displayPokemons(pkmnPlayer, pkmnEnemy, async (move) => {
        if (isFightOver) return

        await mainGameLoop(move, mainPlayer, null, pkmnPlayer, pkmnEnemy, updateUI)
        
        if (pkmnEnemy.isKO()) {
            isFightOver = true
            showMessage("Les duels commencent...")
            await delay(2000)
            await initDuelsLoop(mainPlayer)
        }
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
        await delay(500)
    }

    updateUI()
    await delay(500)

    if (defender.isKO()) {
        messages.push(`${defender.name} tombe KO...`)
        updateUI()
        await delay(500)
    }
}