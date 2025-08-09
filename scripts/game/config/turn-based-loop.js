import { updateBattleUI } from "../../UI/displayBattle/displayMove.js"
import { displayKO } from "../../UI/displayBattle/undisplay.js"
import { delay } from "../../UI/utils/utils.js"
import { handleTurn } from "./handle-turn.js"
import { getRandomMove } from "./randomizer.js"


export async function turnBasedLoop(
    chosenMove, 
    player,
    trainer,
    pkmnPlayer, 
    pkmnEnemy, 
    updateUI, 
    resolve
) {
    const messages = []
    
    // tour player
    await handleTurn(pkmnPlayer, pkmnEnemy, chosenMove, messages, updateUI)

    if (pkmnEnemy.isKO()) {
        await displayKO('enemy')
        // si combat contre un dresseur
        if (trainer) {
            const enemyTeam = trainer.team.filter(p => !p.isKO())
            if (enemyTeam.length === 0) {
                if (resolve) resolve('win')
                return
            } else {
                pkmnEnemy = trainer.choosePokemon()
                updateBattleUI()
            }
        }
    } 

    await delay(700)

    // tour enemmi
    const enemyMove = getRandomMove(pkmnEnemy)
    if (!enemyMove) return
    
    await handleTurn(pkmnEnemy, pkmnPlayer, enemyMove, messages, updateUI)

    // si pokemon player ko
    if (pkmnPlayer.isKO()) {
        await displayKO('player')
        const playerTeam = player.team.filter(p => !p.isKO())
        if (playerTeam.length === 0) {
            if (resolve) resolve('lose')
            return
        } 
        // envoyer un autre pokemon
        else {
            pkmnPlayer = player.choosePokemon()
            // updateUI()
        }
    }
}