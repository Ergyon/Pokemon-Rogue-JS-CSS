import { displayControls, updateControls } from "../../UI/displayBattle/displayMenus/displayControls.js"
import { updateBattleUI } from "../../UI/displayBattle/displayMove.js"
import { displayPokemons } from "../../UI/displayBattle/displayPokemons.js"
import { turnBasedLoop } from "./turn-based-loop.js"

export async function initDuel(player, trainer) {
    // soigne equipe au debut du combat
    player.healTeam()
    
    let pkmnPlayer = player.team.find(p => !p.isKO())
    let pkmnEnemy = trainer.team.find(p => !p.isKO())
    
    if (!pkmnPlayer) return 'lose'
    if (!pkmnEnemy) return 'win'
    if(player.team.every(p => p.isKO())) return 'lose'
    if(trainer.team.every(p => p.isKO())) return 'win'
    
    const active = {player:pkmnPlayer, enemy:pkmnEnemy}

    // UI
    function updateUI() {
        updateBattleUI(active.player, active. enemy)
    }

    return new Promise(resolve => {
        // gestion attaques
        const handleMove = async (move) => {
            await turnBasedLoop(
                {type: 'move', payload: move},
                player,
                trainer,
                active,
                updateUI,
                resolve
            )
            updateControls(player, active)
        }


        // gestion actions du menu
        const handleAction = async (action) => {
            await turnBasedLoop(
                action,
                player,
                trainer,
                active,
                updateUI,
                resolve
            )
            updateControls(player, active)
        }

        displayPokemons(pkmnPlayer, pkmnEnemy, handleMove, trainer.name)
        displayControls(player, active, handleAction, handleMove)
        updateControls(player, active)
    })
}