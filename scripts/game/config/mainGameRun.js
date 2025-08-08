import { showBattleTxt } from '../../UI/displayBattle/displayText.js'
import { delay } from '../../UI/utils/utils.js'
import { initDuel } from './duel.js'
import { getRandomTrainer } from './randomizer.js'

export async function mainGameRun(mainPlayer) {
    let round = 1 

    while (round <= 5) {
        const trainer = getRandomTrainer()
        trainer.generateTeam(2, 1)

        showBattleTxt(`${trainer.name} vous provoque en duel !`)
        await delay (1200)

        const result = await initDuel(mainPlayer, trainer)

        if (result === 'lose') {
            showBattleTxt(`${trainer.name} remporte le combat.`)
            break
        } else if (result === 'win'){
            showBattleTxt(`${mainPlayer.name} gagne le combat !`)
            mainPlayer.earnMoney(trainer.gain)
            showBattleTxt(`${mainPlayer.name} gagne ${trainer.gain}$`)
            round++
        } else {
           console.warn("Erreur", result) 
           break
        }
    }
    
    if (round > 5) {
        showBattleTxt("Vous devenez Maitre Pokemon !")
    }
}