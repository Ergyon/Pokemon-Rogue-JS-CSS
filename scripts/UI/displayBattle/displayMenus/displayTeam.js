
// display equipe player
export function displayTeam({
    team,
    current = null,
    disableKo = false,
    title = 'Votre équipe',
    onCancel = null
} = {}) {
    return new Promise((resolve) => {
        const wrapper = document.querySelector('.battlefield')
       
        const modal = document.createElement('div')
        modal.classList.add('modal-team')

        const modalTitle = document.createElement('h3')
        modalTitle.classList.add('modal-team__title')
        modalTitle.textContent = title

        const list = document.createElement('div')
        list.classList.add('modal-team__list')

        // pokemon dans la team player
        team.forEach(pkmn => {
            const card = document.createElement('div')
            card.classList.add('modal-team__card')

            const img = document.createElement('img')
            img.src = pkmn.img
            img.alt = pkmn.name
            img.classList.add('modal-team__img')

            const name = document.createElement('span')
            name.classList.add('modal-team__name')
            name.textContent = pkmn.name

            const hp = document.createElement('span')
            hp.classList.add('modal-team__hp')
            hp.textContent = `${Math.max(0, pkmn.hp)}/${pkmn.maxHP}`

            // pokemon en combat
            if (pkmn === current) {
                const badge = document.createElement('span')
                badge.classList.add('modal-team__badge', 'modal-team__badge--active')
                card.appendChild(badge)
            }

            // pokemon(s) ko
            if (pkmn.isKO()) {
                const badge = document.createElement('span')
                badge.classList.add('modal-team__badge', 'modal-team__badge--ko')
                card.appendChild(badge)
            }

            if (disableKo) {
                card.disabled = true
            }

            card.append(img, name, hp)
            list.appendChild(card)

            card.addEventListener('click', () => {
                cleanup()
                resolve(pkmn)
            })
        })

        const cancel = document.createElement('button')
        cancel.classList.add('modal-team__cancel')
        cancel.textContent = 'Fermer'
        cancel.addEventListener('click', () => {
            cleanup()
            if (typeof onCancel === 'function')onCancel()
                resolve(null)
        })

        modal.append(modalTitle, list, cancel)
        wrapper.appendChild(modal)
        
        function cleanup() {
            modal.remove()
        }
    })
}