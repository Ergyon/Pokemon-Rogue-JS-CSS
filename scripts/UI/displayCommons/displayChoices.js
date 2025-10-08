import { getRandomItem, getRandomPokemon } from "../../game/config/randomizer.js"
import { displayInventory } from "../displayBattle/displayMenus/displayInventory.js"
import { createRandomCard } from "./createRandomCard.js"
import { displayTeamReplace } from "./displayTeamReplace.js"

// Creer une section d'elements random
function createRandomSection({ count, rank, getRandom, select }) {
    const container = document.createElement('div')
    container.classList.add('random-container')

    const elements = Array.from({ length: count }, () => getRandom({ rank })).filter(Boolean)

    elements.forEach(el => {
        const card = createRandomCard(el, select, container)
        if (card) container.appendChild(card)
    })

    return container
}

// Modale de choix randoms
export function displayChoiceModal({
    rankLeft = 1,  
    rankRight = 1,
    countLeft = 3,
    countRight = 3,
    player = null
}) {
    return new Promise((resolve) => {
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
            select: async (pkmn) => {
                // remplacer un pokemon si equipe pleine
                if (player && player.team.length >= 4) {
                    const toReplace = await displayTeamReplace(player.team)

                    if (toReplace) {
                        selectedPokemon = {new: pkmn, replace: toReplace}
                    } else {
                        selectedPokemon = null
                    }
                } 
                // si equipe non complete
                else {
                    selectedPokemon = {new: pkmn, replace: null}
                }
            }
        })
    
        // section right
        const rightSection = createRandomSection({
            count: countRight,
            rank: rankRight,
            getRandom: getRandomItem,
            select: async (item) => {
                // si inventaire plein
                if (player && player.inventory.length >= 4) {
                    const toReplace = await displayInventory(player, null, 'replace')

                    if (toReplace) {
                        selectedItem = {new: item, replace: toReplace}
                    } else {
                        selectedItem = null
                    }
                } 
                // si inventaire non complet
                else {
                    selectedItem = {new: item, replace: null}
                }
            }
        })
    
        container.append(leftSection, rightSection)
        modal.appendChild(container)
    
        // confiramtion
        const confirmBtn = document.createElement('button')
        confirmBtn.classList.add('modal-choice__confirmBtn')
        confirmBtn.textContent = "Confirmer mon choix"
        
        confirmBtn.addEventListener('click', () => {
            const hasValidPkmn = selectedPokemon !== null
            const hasValidItem = selectedItem !== null
    
            if (hasValidPkmn && hasValidItem) {
                closeModal()
                resolve({
                    pokemon: selectedPokemon.new,
                    item: selectedItem.new,
                    pokemonToReplace: selectedPokemon.replace,
                    itemToReplace: selectedItem.replace
                })
            }
        })
        
        // passer les choix
        const skipBtn = document.createElement('button')
        skipBtn.classList.add('modal-choice__skipBtn')
        skipBtn.textContent = 'Passer'
        skipBtn.addEventListener('click', () => {
            closeModal()
            resolve({
                pokemon: null,
                item: null,
                pokemonToReplace: null,
                itemToReplace: null
            })
        })

        modal.append(confirmBtn, skipBtn)
        overlay.appendChild(modal)
        document.body.appendChild(overlay)
        
        // fermer modale
        function closeModal() {
            overlay.remove()
        }
    })
}