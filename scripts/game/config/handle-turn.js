import { delay, displayBattleTxt } from "../../UI/utils/utils.js"

// Gestion de tour
export async function handleTurn(attacker, defender, moves, messages, updateUI) {
    const statusMessages = []

    const canAct = attacker.applyStatusEffect(statusMessages)

    for (const msg of statusMessages) {
        messages.push(msg)
        await displayBattleTxt(msg, 800)
        updateUI()
    }

    if (!canAct) return

    updateUI()
    await delay(800)

    if (attacker.isKO()) {
        messages.push(`${attacker.name} tombe KO...`)
        updateUI()
        await delay(1000)
        return
    }

    const moveMessages = attacker.doMove(moves, defender)
    for (const msg of moveMessages) {
        messages.push(msg)
        await displayBattleTxt(msg, 800)
        updateUI()
    }

    updateUI()
    await delay(500)

    if (defender.isKO()) {
        messages.push(`${defender.name} tombe KO...`)
        updateUI()
        await delay(1000)
    }
}