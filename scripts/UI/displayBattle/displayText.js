// Bulle message combat
export function showMessage(text) {
    const textWrapper = document.querySelector(".battle-txt-container")
    textWrapper.innerHTML =''

    const attackText = document.createElement('span')
    attackText.classList.add('battle-txt')
    attackText.textContent = text
    textWrapper.appendChild(attackText)
}