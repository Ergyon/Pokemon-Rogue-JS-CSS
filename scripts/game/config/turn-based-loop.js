import { displayKO } from "../../UI/displayBattle/undisplay.js"
import { delay } from "../../UI/utils/utils.js"
import { handleTurn } from "./handle-turn.js"
import { getRandomMove } from "./randomizer.js"


export async function turnBasedLoop(
    action, 
    player,
    trainer,
    active,
    updateUI, 
    resolve
) {
    let pkmnPlayer = active.player
    let pkmnEnemy = active.enemy
    const messages = []
    
    // tour player
    if (action?.type === 'switch') {
        const next = await player.choosePokemon({current: pkmnPlayer, force: false})

        if (next && next !== pkmnPlayer) {
            active.player = pkmnPlayer = next
            updateUI()
        } else {
            return
        }
    } else if (action?.type ==='move') {
        const chosenMove = action.payload

        await handleTurn(pkmnPlayer, pkmnEnemy, chosenMove, messages, updateUI)
        
        // pokemon enemi ko
        if (pkmnEnemy.isKO()) {
            await displayKO('enemy')
            // si combat contre un dresseur
            if (trainer) {
                const enemyTeam = trainer.team.filter(p => !p.isKO())
                if (enemyTeam.length === 0) {
                    if (resolve) resolve('win')
                        return
                } else {
                    const nextEnemy = trainer.choosePokemon()
                    if (nextEnemy) {
                        active.enemy = pkmnEnemy = nextEnemy
                        updateUI()
                    }
                } 
            }
        }
    } else return
    

    await delay(700)

    // tour enemmi
    const enemyMove = getRandomMove(pkmnEnemy)
    if (!enemyMove) return
    
    await handleTurn(pkmnEnemy, pkmnPlayer, enemyMove, messages, updateUI)

    // si pokemon player ko
    if (pkmnPlayer.isKO()) {
        await displayKO('player')
        
        const alive = player.team.filter(p => !p.isKO())

        if (alive.length === 0) {
            if (resolve) resolve('lose')
            return
        }

        if (alive.length === 1) {
            active.player = pkmnPlayer = alive[0]
            updateUI()
        } else {
            const next = await (player.choosePokemon({current: pkmnPlayer, force: false}))
            if (!next)  return
            active.player = pkmnPlayer = next
            updateUI()
        }
    }
}