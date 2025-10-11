import { showBattleTxt, showNotif } from '../../UI/displayBattle/displayText.js'
import { displayTrainer, undisplayTrainer } from '../../UI/displayBattle/displayTrainers.js'
import { undisplayPokemons } from '../../UI/displayBattle/undisplay.js'
import { displayChoiceModal } from '../../UI/displayCommons/displayChoices.js'
import { displayVictory } from '../../UI/displayCommons/displayVictory.js'
import { delay } from '../../UI/utils/utils.js'
import { initDuel } from './duel.js'
import { getRandomBadge, getRandomTrainer } from './randomizer.js'

export async function mainGameRun(mainPlayer) {
    let round = 1 

    while (round <= 5) {
        const trainer = getRandomTrainer({round})

        let pokemonRank = 1
        let itemRank = 1

        let trainerRanks = [1]
        let trainerTeam = 2

        if (round === 5) {
            pokemonRank = Math.random() < 0.5 ? 4 : 3
            itemRank = [2, 3]

            trainerRanks = [3, 4, 4]
            trainerTeam = 4
        } 
        else if (round === 4) {
            pokemonRank = [3]
            itemRank = [2, 3]

            trainerRanks = [3]
            trainerTeam = 3
        } 
        else if (round === 3) {
            pokemonRank = [2, 3]
            itemRank = Math.random() < 0.3 ? 3 : (Math.random() < 0.7 ? 2 : 1)

            trainerRanks = [2, 2, 3]
            trainerTeam = 3
        } 
        else if (round === 2) {
            pokemonRank = [2, 2, 3]
            itemRank = [1, 2]

            trainerRanks = [2]
            trainerTeam = 2
        } else {
            pokemonRank = [2]
            itemRank = [1, 1 ,2]
        }

        trainer.generateTeam(trainerTeam, trainerRanks)
        

        displayTrainer(trainer)
        showBattleTxt(`${trainer.name} vous provoque en duel !`)
        await delay (1200)

        const result = await initDuel(mainPlayer, trainer)

        if (result === 'lose') {
            showBattleTxt(`${trainer.name} remporte le combat.`)
            undisplayPokemons()
            break

        } else if (result === 'win'){
            showBattleTxt(`Bien joué ! Vous avez gagné le combat contre ${trainer.name}.`)
            undisplayPokemons()

            let moneyGain = trainer.gain
            mainPlayer.earnMoney(trainer.gain)
            
            await delay(1500)
            undisplayTrainer()

            const chosenBadge = await displayVictory({
                money: moneyGain,
                trainerName: trainer.name,
                getRandomBadge: getRandomBadge
            })

            if (chosenBadge) {
                mainPlayer.getBadge(chosenBadge)
                chosenBadge.applyBonus(mainPlayer.team)
                showNotif(`Vous obtenez le badge ${chosenBadge.name}`)
                await delay (800)
            }

            const choice = await displayChoiceModal({
                rankLeft: pokemonRank,
                rankRight: itemRank,
                countLeft: 3,
                countRight:3,
                player: mainPlayer
            })
            
            if (choice.pokemon) {
                if (choice.pokemonToReplace) {
                    mainPlayer.replacePokemon(choice.pokemonToReplace, choice.pokemon)
                } else {
                    mainPlayer.addPokemon(choice.pokemon)
                }
            }
            if (choice.item) {
                if (choice.itemToReplace) {
                    mainPlayer.replaceItem(choice.itemToReplace, choice.item)
                } else {
                    mainPlayer.getItem(choice.item)
                }
            }

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