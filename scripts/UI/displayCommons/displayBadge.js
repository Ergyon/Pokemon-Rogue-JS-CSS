import { getRandomBadge } from "../../game/config/randomizer.js"
import { createRandomCard } from "./createRandomCard.js"


export function displayBadges(confirm) {
    
    let selectedBadge = null

    // overlay
    const overlay = document.createElement(div)
    overlay.classList.add('overlay__badge')

    // modale
    const modal = document.createElement('div')
    modal.classList.add('modal-badges')

    const title = document.createElement('h3')
    title.classList.add('modal-badges__title')
    title.textContent = "Félicitations !"

    const subtitle = document.createElement('span')
    subtitle.classList.add('modal-badges__subtitle')
    subtitle.textContent = 'Vous gagnez un badge'

    const container = document.createElement('div')
    container.classList.add('modal-badges__container')

    // badges
    const badges = Array.from({length: 1}, () => getRandomBadge())

    badges.forEach(el => {
        const card = createRandomCard(el, select, container)
        container.appendChild(card)
    })

    // confirmer
    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('modal-badges__btn')
    confirmBtn.textContent = 'Choisir ce badge'

    confirmBtn.addEventListener('click', () => {
        if (selectedBadge) {
            confirm({badge: selectedBadge})
            confirmBtn.textContent = 'Choisir ce badge'
            closeModal()
        } else {
            confirmBtn.textContent = 'Veuillez choisir un badge'
            confirmBtn.classList.add('modal-badges--error')
        }
    })

    modal.appendChild(title, subtitle, container, confirmBtn)
    overlay.appendChild(modal)
    document.body.appendChild(overlay)

    // fermer la modale
    function closeModal() {
        overlay.remove
    }
    
}