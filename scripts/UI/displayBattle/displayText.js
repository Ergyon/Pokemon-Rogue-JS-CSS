// Bulle message combat
export function showBattleTxt(text) {
    const textWrapper = document.querySelector(".battle-txt-container")
    textWrapper.innerHTML =''

    const attackText = document.createElement('span')
    attackText.classList.add('battle-txt')
    attackText.textContent = text
    textWrapper.appendChild(attackText)
}

// message utilisation objet
export function showNotif(msg, type = 'info') {
    const notif = document.createElement('div')
    notif.classList.add('item-notification', `item-notification--${type}`)
    notif.textContent = msg

    document.body.appendChild(notif)

    setTimeout(() => {
        setTimeout(() => notif.remove(), 300)
    }, 2000)
}