// Bulle message combat
export function showMessage(text) {
    const TextWrapper = document.querySelector(".battle-txt-container")
    TextWrapper.innerHTML =''
    const attackText = document.createElement('span')
    attackText.classList.add('battle-txt')
    attackText.textContent = text
    TextWrapper.appendChild(attackText)
}