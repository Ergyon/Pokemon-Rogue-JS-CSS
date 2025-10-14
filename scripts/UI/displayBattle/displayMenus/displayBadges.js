
export function displayBadges(badges) {
    const wrapper = document.querySelector('.battlefield')

    const modal = document.createElement('div')
    modal.classList.add('modal-badges')

    const title = document.createElement('h3')
    title.classList.add('modal-badges__title')
    title.textContent = 'Vos badges'
    modal.appendChild(title)

    const section = document.createElement('div')
    section.classList.add('modal-badges__section')

    badges.forEach(badge => {
        const card = document.createElement('div')
        card.classList.add('modal-badges__card')
    
        const name = document.createElement('span')
        name.classList.add('modal-badges__card__name')
        name.textContent = badge.name

        const img = document.createElement('img')
        img.classList.add('modal-badges__card__img')
        img.src = badge.img
        img.alt = badge.name

        const desc = document.createElement('span')
        desc.classList.add('modal-badges__card__desc')
        desc.textContent = badge.description

        card.append(img,name,desc)
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