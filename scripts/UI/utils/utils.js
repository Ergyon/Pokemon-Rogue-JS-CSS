import { showBattleTxt } from "../displayBattle/displayText.js"


// battle texte avec timing/rythme
let chain = Promise.resolve()
export function displayBattleTxt(text, wait = 1000) {
    chain = chain.then(() => {
        showBattleTxt(text)
        return delay(wait)
    })
    return chain
}


// delay 
export function delay(ms) {
    return new Promise(resume => setTimeout(resume, ms))
}

export function capitalize(str) {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}