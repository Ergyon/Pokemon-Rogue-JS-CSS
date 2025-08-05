import { updateBattleUI } from "../../UI/battle/displayMove.js"
import { displayPokemons } from "../../UI/battle/displayPokemons.js"
import { mainGameLoop } from "../main.js"

export async function initDuel(player, trainer) {
    let pkmnPlayer = player.team.find(p => !p.isKO())
    let pkmnEnemy = trainer.team.find(p => !p.isKO())

    if (!pkmnPlayer) return 'lose'
    if (!pkmnEnemy) return 'win'
    
    if(player.team.every(p => p.isKO())) return 'lose'
    if(trainer.team.every(p => p.isKO())) return 'win'

    return new Promise(resolve => {
        displayPokemons(pkmnPlayer, pkmnEnemy, (move) => {
            mainGameLoop(move, player, trainer, pkmnPlayer, pkmnEnemy, () => 
                updateBattleUI(pkmnPlayer, pkmnEnemy, messages), resolve              
            )
        })
    })
}