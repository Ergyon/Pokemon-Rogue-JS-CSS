
export function displayBadges(badges) {
    const wrapper = document.querySelector('.battlefield')

    const existingModal = document.querySelector('.modal-badges')
        if (existingModal) {
            existingModal.remove()
        }

    const modal = document.createElement('div')
    modal.classList.add('modal-badges')

    const title = document.createElement('h3')
    title.classList.add('modal-badges__title')
    title.textContent = 'Badges équipés'
    modal.appendChild(title)

    const section = document.createElement('div')
    section.classList.add('modal-badges__section')

    badges.forEach(badge => {
        const card = document.createElement('div')
        card.classList.add('modal-badges__card')
    
        const img = document.createElement('img')
        img.classList.add('modal-badges__card__img')
        img.src = badge.img
        img.alt = badge.name

        const infos = document.createElement('div')
        infos.classList.add('modal-badges__card__infos')

        const name = document.createElement('span')
        name.classList.add('modal-badges__card__name')
        name.textContent = badge.name

        const desc = document.createElement('span')
        desc.classList.add('modal-badges__card__desc')
        desc.textContent = badge.description

        infos.append(name, desc)
        card.append(img, infos)
        section.appendChild(card)
    })

    modal.appendChild(section)

    const close = document.createElement('button')
    close.classList.add('modal-badges__close')
    close.textContent = 'Fermer'
    close.onclick = () => {
        modal.remove()
    }

    modal.appendChild(close)
    wrapper.appendChild(modal)
}