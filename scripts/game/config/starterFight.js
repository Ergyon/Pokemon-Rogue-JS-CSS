import { constructPokemon } from "../../datas/storage.js";
import { tutoText } from "../../datas/text.js";
import { updateBattleUI } from "../../UI/displayBattle/displayMove.js";
import { displayPokemons } from "../../UI/displayBattle/displayPokemons.js";
import { undisplayPokemons } from "../../UI/displayBattle/undisplay.js";
import { displayChoiceModal } from "../../UI/displayCommons/displayChoices.js";
import { displayMessages } from "../../UI/displayCommons/displayMessages.js";
import { mainPlayer } from "../class/player.js";
import { mainGameRun } from "./mainGameRun.js";
import { getRandomPokemon } from "./randomizer.js";
import { turnBasedLoop } from "./turn-based-loop.js";

document.addEventListener("DOMContentLoaded", () => {
    displayChoiceModal({
        rankLeft: 1,
        rankRight: 1,
        countLeft: 4,
        countRight: 4,
    })
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
    pkmnEnemy.hp = 2
    updateUI()
    
    if (!pkmnPlayer || !pkmnEnemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    function updateUI() {
        updateBattleUI(pkmnPlayer, pkmnEnemy, messages)
    }

    displayPokemons(pkmnPlayer, pkmnEnemy, async (move) => {
        if (isFightOver) return

        await turnBasedLoop(move, mainPlayer, null, pkmnPlayer, pkmnEnemy, updateUI)
        
        // fin de combat
        if (pkmnEnemy.isKO()) {
            isFightOver = true
            undisplayPokemons()

            // tuto
            await displayMessages(tutoText)
        
            // randomizer pkmns & items
            const choice = await displayChoiceModal({
                rankLeft: 2,
                rankRight: 1,
                countLeft: 3,
                countRight:3
            })

            mainPlayer.team.push(choice.pokemon)
            mainPlayer.getItem(choice.item)

            // lancement du mainGame
            await mainGameRun(mainPlayer)
        }
    })
}


