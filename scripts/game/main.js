import { delay } from "../UI/displays.js"
import { handleTurn } from "./battle.js"
import { getRandomMove } from "./mechanics/randomizer.js"


export async function mainGameLoop(chosenMove, pkmnPlayer, pkmnEnemy, updateUI) {
    const messages = []

    await handleTurn(pkmnPlayer, pkmnEnemy, chosenMove, messages, updateUI)
    if (pkmnEnemy.isKO()) return
    
    await delay(1000)

    const enemyMove = getRandomMove(pkmnEnemy)
    await handleTurn(pkmnEnemy, pkmnPlayer, enemyMove, messages, updateUI)
}
