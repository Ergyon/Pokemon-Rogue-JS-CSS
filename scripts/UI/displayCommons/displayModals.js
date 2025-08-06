import { getRandomPokemon } from "../../game/config/randomizer"

// display une section random
function displayRandomSection({
    count,
    rank,
    getRandom,
    select,
}) {
    const container = document.createElement('div')
    container.classList.add('random-container')

    const elements = Array.from({length: count}, () => getRandom({rank}))

    let selected = null

    elements.forEach((el => {
        const card = document.createElement('div')
        card.classList.add('random-card')
        const img = document.createElement('img') 
        img.src = el.img
        img.alt = el.name 
        card.appendChild(img)

        const name = document.createElement('span')
        name.classList.add('random-card__title')
        name.textContent = el.name
        card.appendChild(name)

        container.appendChild(card)

        card.addEventListener('click', () => {
            if (!selected) {
                selected = el
                card.classList.add('random-card--selected')
                container.querySelectorAll('.random-card').forEach(c => {
                    if (c !== card) c.style.pointerEvents = 'none'
                })
                select(selected)
                closeModal()
            }
        })
    }))
    return container
}

// modale choix de 2 sections randoms
export function displayChoiceModal({
    title,
    rankLeft = 1,
    rankRight = 1,
    confirm
}) {
    let selectedPokeom = null
    let selectedItem = null

    // overlay
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.appendChild(modal)
    document.body.appendChild(overlay)

    // modale
    const modal = document.createElement('div')
    modal.classList.add('modal-choice')
    const modalTitle = title
    modal.appendChild(modalTitle)

    const container = document.createElement('div')
    container.classList.add('modal-choice__content')

    // section left
    const leftSection = displayRandomSection({
        count: 3,
        rank: rankLeft,
        getRandom: getRandomPokemon,
        select: (pkmn) => {selectedPokeom = pkmn},
    })

    // section right 
    const rightSection = displayRandomSection({
        count: 3,
        rank: rankRight,
        getRandom: getRandomItem,
        select: (item) => {selectedItem = item}
    })

    container.append(leftSection, rightSection)
    modal.appendChild(container)

    // valider choix
    const confirmBtn = document.createElement('btn')
    confirmBtn.classList.add('modal-choice__confirmBtn')
    confirmBtn.textContent = "Confirmer mon choix"
    confirmBtn.addEventListener('click', () => {
        if (selectedItem && selectedItem) {
            confirm({pokemon: selectedPokeom, item: selectedItem})
            closeModal()
        } else {
            console.log('Vous devez choisir 1 Pokemon et 1 item')
        }
    })

    modal.appendChild(confirmBtn)
    document.body.appendChild(modal)

    // fermer la modale
    function closeModal(){
        modal.remove
        overlay.remove
    }
}