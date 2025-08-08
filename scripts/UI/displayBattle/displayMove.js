import { displayBattleTxt } from "../utils/utils.js"

// Animation barre de vie
export function updateHp(pokemon, side) {
    const card = document.querySelector(`[data-side="${side}"]`)
    if (!card) return

    const hpValue = card.querySelector('.hp-value')
    const hpFill = card.querySelector('.hp-fill')

    const ratio = pokemon.hp / pokemon.maxHP
    const pourcentage = Math.max(0, Math.floor(ratio * 100))

    hpValue.textContent = `${Math.max(0, pokemon.hp)} / ${pokemon.maxHP}`
    hpFill.style.width = `${pourcentage}%`

    hpFill.classList.remove('low', 'mid')
    if (pourcentage < 15) {
        hpFill.classList.add('low')
    } else if (pourcentage < 40) {
        hpFill.classList.add('mid')
    }
}

// Update UI battle
export function updateBattleUI(player, enemy, messages) {
    setTimeout(() => {
        updateHp(player, 'player')
        updateHp(enemy, 'enemy')
    }, 1400)
    const lastMsg = messages[messages.length - 1]
    if (lastMsg) {
        displayBattleTxt(lastMsg)
    }
}