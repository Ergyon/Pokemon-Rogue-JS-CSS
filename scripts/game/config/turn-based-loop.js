import { displayControls } from "../../UI/displayBattle/displayMenus/displayControls.js"
import { displayNewPokemon } from "../../UI/displayBattle/displayPokemons.js"
import { displayKO } from "../../UI/displayBattle/undisplay.js"
import { delay, displayBattleTxt } from "../../UI/utils/utils.js"
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

    const messages = []
    
    // affichage menu joueur
    displayControls(player, active, (action) => {
        turnBasedLoop(action, player, trainer, active, updateUI, resolve)
    })

    // tour player
    if (action?.type === 'switch') {
        const next = action.payload

        if (next && next !== active.player) {
            active.player = next
            updateUI()
        } else {
            return
        }
    } else if (action?.type ==='move') {
        const chosenMove = action.payload

        await handleTurn(active.player, active.enemy, chosenMove, messages, updateUI)
        
        // pokemon enemi ko
        if (active.enemy.isKO()) {
            await displayKO('enemy')

            // si combat contre un dresseur
            if (trainer) {
                const enemyTeam = trainer.team.filter(p => !p.isKO())
                if (enemyTeam.length === 0) {
                    if (resolve) resolve('win')
                        return
                } else {
                    // trainer envoie un autre pokemon
                    const nextEnemy = trainer.choosePokemon()
                    if (nextEnemy) {
                        active.enemy = nextEnemy

                        await displayBattleTxt(`${trainer.name} envoie ${nextEnemy.name} !`, 600)
                        displayNewPokemon(nextEnemy, 'enemy')

                        updateUI()
                        await delay(600)
                    }
                } 
            }
        }
    } else return
    

    await delay(700)

    // tour enemmi
    const enemyMove = getRandomMove(active.enemy)
    if (!enemyMove) return
    
    await handleTurn(active.enemy, active.player, enemyMove, messages, updateUI)

    // si pokemon player ko
    if (active.player.isKO()) {
        await displayKO('player')
        
        const alive = player.team.filter(p => !p.isKO())

        if (alive.length === 0) {
            if (resolve) resolve('lose')
            return
        }

        // envoie d'un nouveau pokemon joueur
        if (alive.length === 1) {
            active.player = pkmnPlayer = alive[0]

            // dernier pokemon restant
            await displayBattleTxt(`Tout repose sur toi ${active.player.name} !`, 600)
            displayNewPokemon(active.player, 'player')

            updateUI()
            await delay(600)
        } else {
            // pokemon choisi
            const next = await (player.choosePokemon({current: active.player, force: false}))
            if (!next)  return
            active.player = next

            await displayBattleTxt(`A toi de jouer ${active.player.name} !`, 6000)
            displayNewPokemon(active.player, 'player')

            updateUI()
            await delay(600)
        }
    }
}