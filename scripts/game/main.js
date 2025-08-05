import { delay, displayKO } from "../UI/displays.js"
import { handleTurn } from "./config/fight.js"
import { getRandomMove } from "./config/randomizer.js"


export async function mainGameLoop(
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
                // updateUI()
            }
        }
    } 
    // si combat sauvage
    else {
        return
    }
    
    await delay(1000)

    // tour enemmi
    const enemyMove = getRandomMove(pkmnEnemy)
    await handleTurn(pkmnEnemy, pkmnPlayer, enemyMove, messages, updateUI)

    // si pokemon player ko
    if (pkmnPlayer.isKO()) {
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