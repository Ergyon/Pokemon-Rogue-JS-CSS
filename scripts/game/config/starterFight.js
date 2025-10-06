import { constructPokemon } from "../../datas/storage.js";
import { gameOver } from "../../datas/text.js";
import { updateBattleUI } from "../../UI/displayBattle/displayMove.js";
import { displayPokemons } from "../../UI/displayBattle/displayPokemons.js";
import { undisplayPokemons } from "../../UI/displayBattle/undisplay.js";
import { displayChoiceModal } from "../../UI/displayCommons/displayChoices.js";
import { displayControls, updateControls } from "../../UI/displayCommons/displayControls.js";
import { displayMessages } from "../../UI/displayCommons/displayMessages.js";
import { mainPlayer } from "../class/player.js";
import { mainGameRun } from "./mainGameRun.js";
import { getRandomPokemon } from "./randomizer.js";
import { turnBasedLoop } from "./turn-based-loop.js";

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

    pkmnPlayer = loadStarter()
    mainPlayer.team.push(pkmnPlayer)

    let test = getRandomPokemon({rank:3})
    mainPlayer.addPokemon(test)
    
    pkmnEnemy = getRandomPokemon({rank:1})
    // test
    pkmnEnemy.hp = 2
    
    if (!pkmnPlayer || !pkmnEnemy) {
        window.alert("YA PAS DE POKEMOOOONS !!!")
        return
    }    
    
    const active = {player: pkmnPlayer, enemy: pkmnEnemy}

    updateBattleUI(active.player, active.enemy)

    // gestion attaques et fin de combat
    const handleMove = async (move) => {
        if (isFightOver) return

        await turnBasedLoop(
            {type: 'move', payload: move},
            mainPlayer,
            null,
            active,
            () => updateBattleUI(active.player, active.enemy),
            undefined,
            handleMove
        )

        // fin de combat
        if (active.enemy.isKO()) {
            isFightOver = true
            undisplayPokemons()
    
            // tuto
            // await displayMessages(tutoText)
        
            // randomizer pkmns & items
            const choice = await displayChoiceModal({
                rankLeft: 1,
                rankRight: 1,
                countLeft: 3,
                countRight:3
            })
    
            mainPlayer.addPokemon(choice.pokemon)
            mainPlayer.getItem(choice.item)
    
            // lancement du mainGame
            await mainGameRun(mainPlayer)
        } 
    
        // combat perdu
        else if (active.player.isKO()) {
            isFightOver = true 
            undisplayPokemons()
            displayMessages(gameOver)
        }
    }
    
    // gestion action du menu (items, switch)
    const handleAction = async (action) => {
        if (isFightOver) return

        await turnBasedLoop(
            action,
            mainPlayer,
            null,
            active,
            () => updateBattleUI(active.player, active.enemy),
            undefined,
            handleMove
        )
        updateControls(mainPlayer, active)
    }
        
    // apparition pokemons
    displayPokemons(pkmnPlayer, pkmnEnemy, handleMove)
    displayControls(mainPlayer, active, handleAction, handleMove)
        
}




