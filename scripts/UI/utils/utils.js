import { showBattleTxt } from "../displayBattle/displayText.js"

// delay 
export function delay(ms) {
    return new Promise(resume => setTimeout(resume, ms))
}

// battle texte avec timing/rythme
let chain = Promise.resolve()
export function displayBattleTxt(text, wait = 1000) {
    chain = chain.then(() => {
        showBattleTxt(text)
        return delay(wait)
    })
    return chain
}