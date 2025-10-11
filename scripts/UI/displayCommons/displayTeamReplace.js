import { typeColor } from "../displayBattle/displayMenus/displayMoveset.js"
import { showPokemonResume } from "./showResume.js"
// modale remplacer un pokemon (si equipe pleine)
export function displayTeamReplace(team) {
    return new Promise((resolve) => {   
        const container = document.createElement('div')
        container.classList.add('container')

        const modal = document.createElement('div')
        modal.classList.add('modal-team-replace')

        const modalTitle = document.createElement('h3')
        modalTitle.classList.add('modal-team-replace__title')
        modalTitle.textContent = 'Remplacer un Pokémon'

        const list = document.createElement('div')
        list.classList.add('modal-team-replace__list')

        // pokemons team player
        team.forEach(pkmn => {
            const card = document.createElement('div')
            card.classList.add('modal-team-replace__card')

            const img = document.createElement('img')
            img.src = pkmn.img
            img.alt = pkmn.name
            img.classList.add('modal-team-replace__img')

            const infos = document.createElement('div')
            infos.classList.add('modal-team-replace__infos')

            const name = document.createElement('span')
            name.classList.add('modal-team-replace__name')
            name.textContent = pkmn.name

            const type = document.createElement('span')
            const colorType= typeColor(pkmn.type)
            type.classList.add('modal-team-replace__type', colorType)
            type.textContent = `${pkmn.type}`

            // bouton 'voir details' pokemon
            const showResume = document.createElement('button')
            showResume.classList.add('modal-team-replace__showBtn')
            showResume.textContent = 'Voir détails'

            showResume.addEventListener('click', async (e) => {
                e.stopPropagation()
                await showPokemonResume(pkmn)
            })

            infos.append(name, type)
            card.append(img, infos, showResume)
            list.appendChild(card)

            // selectionner et remplacer
            card.addEventListener('click', () => {
                cleanup()
                resolve(pkmn)
            })
        })

        // annuler
        const cancel = document.createElement('button')
        cancel.classList.add('modal-team-replace__cancel')
        cancel.textContent = 'Annuler'
        cancel.addEventListener('click', () => {
            cleanup()
            resolve(null)
        })

        modal.append(modalTitle, list, cancel)
        container.appendChild(modal)
        document.body.appendChild(container)
        
        function cleanup() {
            container.remove()
        }
    })
}