import { showMessage } from '../../UI/displayBattle/displayText.js'
import { delay } from '../../UI/utils/utils.js'
import { initDuel } from './duel.js'
import { getRandomTrainer } from './randomizer.js'

export async function initDuelsLoop(mainPlayer) {
    let round = 1 

    while (round <= 5) {
        const trainer = getRandomTrainer()
        console.log("Trainer choisi :", trainer)
        trainer.generateTeam(2, 1)

        showMessage(`${trainer.name} vous provoque en duel !`)
        await delay (1200)

        const result = await initDuel(mainPlayer, trainer)

        if (result === 'lose') {
            showMessage(`${trainer.name} remporte le combat.`)
            break
        } else if (result === 'win'){
            showMessage(`${mainPlayer.name} gagne le combat !`)
            mainPlayer.earnMoney(trainer.gain)
            showMessage(`${mainPlayer.name} gagne ${trainer.gain}$`)
            round++
        } else {
           console.warn("Erreur", result) 
           break
        }
    }
    
    if (round > 5) {
        showMessage("Vous devenez Maitre Pokemon !")
    }
}