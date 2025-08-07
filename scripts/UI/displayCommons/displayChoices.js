import { createRandomCard, getRandomItem, getRandomPokemon } from "./createRandomCard.js"

// Creer une section d'elements random
function createRandomSection({ count, rank, getRandom, select }) {
    const container = document.createElement('div')
    container.classList.add('random-container')

    const elements = Array.from({ length: count }, () => getRandom({ rank }))

    elements.forEach(el => {
        const card = createRandomCard(el, select, container)
        container.appendChild(card)
    })

    return container
}

// Modale de choix randoms
export function displayChoiceModal({
    rankLeft = 1,
    rankRight = 1,
    countLeft = 3,
    countRight = 3,
    confirm
}) {
    let selectedPokemon = null
    let selectedItem = null

    // overlay
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    // modale
    const modal = document.createElement('div')
    modal.classList.add('modal-choice')

    const modalTitle = document.createElement('h3')
    modalTitle.classList.add('modal-choice__title')
    modalTitle.textContent = "Faites votre choix"
    modal.appendChild(modalTitle)


    const container = document.createElement('div')
    container.classList.add('modal-choice__content')

    // section left
    const leftSection = createRandomSection({
        count: countLeft,
        rank: rankLeft,
        getRandom: getRandomPokemon,
        select: (pkmn) => { selectedPokemon = pkmn }
    })

    // section right
    const rightSection = createRandomSection({
        count: countRight,
        rank: rankRight,
        getRandom: getRandomItem,
        select: (item) => { selectedItem = item }
    })

    container.append(leftSection, rightSection)
    modal.appendChild(container)

    // confiramtion
    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('modal-choice__confirmBtn')
    confirmBtn.textContent = "Confirmer mon choix"

    confirmBtn.addEventListener('click', () => {
        if (selectedPokemon && selectedItem) {
            confirm({ pokemon: selectedPokemon, item: selectedItem })
            closeModal()
        } else {
            console.log('Vous devez choisir 1 Pokémon et 1 item.')
        }
    })

    modal.appendChild(confirmBtn)
    overlay.appendChild(modal)
    document.body.appendChild(overlay)

    // fermer modale
    function closeModal() {
        overlay.remove()
    }
}