import { updateBattleUI } from "../../UI/displayBattle/displayMove.js"
import { displayPokemons } from "../../UI/displayBattle/displayPokemons.js"
import { turnBasedLoop } from "./turn-based-loop.js"

export async function initDuel(player, trainer) {
    let pkmnPlayer = player.team.find(p => !p.isKO())
    let pkmnEnemy = trainer.team.find(p => !p.isKO())

    if (!pkmnPlayer) return 'lose'
    if (!pkmnEnemy) return 'win'
    if(player.team.every(p => p.isKO())) return 'lose'
    if(trainer.team.every(p => p.isKO())) return 'win'

    const active = {player:pkmnPlayer, enemy:pkmnEnemy}

    function updateUI(){
        updateBattleUI(active.player, active.enemy)
    }

    return new Promise(resolve => {
        displayPokemons(pkmnPlayer, pkmnEnemy, (move) => {
            turnBasedLoop(
                { type: 'move', payload: move },
                player,
                trainer,
                { player: pkmnPlayer, enemy: pkmnEnemy },
                () => updateBattleUI(pkmnPlayer, pkmnEnemy),
                resolve
            )
        })
    })
}