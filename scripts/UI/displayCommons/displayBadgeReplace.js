
export function displayBadgeReplace(badges) {
    return new Promise((resolve) => {
        const existingModal = document.querySelector('.badges-replace')
        if (existingModal) {
            existingModal.remove()
        }

        const container = document.createElement('div')
        container.classList.add('container')

        const modal = document.createElement('div')
        modal.classList.add('badges-replace')

        const title = document.createElement('h4')
        title.classList.add('badges-replace__title')
        title.textContent = 'Remplacer un badge'
    
        const message = document.createElement('p')
        message.classList.add('badges-replace__message')
        message.textContent = 'Vous possédez déjà 2 badges. Remplacez un de vos badges ou bien annulez et conservez vos badges actuels.'

        const list = document.createElement('div')
        list.classList.add('badges-replace__list')

        badges.forEach(badge => {
            const card = document.createElement('div')
            card.classList.add('badges-replace__card')

            const img = document.createElement('img')
            img.classList.add('badges-replace__img')
            img.src = badge.img
            img.alt = badge.name

            const infos = document.createElement('div')
            infos.classList.add('badges-replace__infos')

            const name = document.createElement('span')
            name.classList.add('badges-replace__name')
            name.textContent = badge.name

            const desc = document.createElement('span')
            desc.classList.add('badges-replace__desc')
            desc.textContent = badge.description

            infos.append(name, desc)
            card.append(img, infos)
            list.appendChild(card)

            card.addEventListener('click', () => {
                cleanup()
                resolve(badge)
            })
        })

        const cancel = document.createElement('button')
        cancel.classList.add('badges-replace__cancel')
        cancel.textContent = 'Annuler'
        cancel.addEventListener('click', () => {
            cleanup()
            resolve(null)
        })

        modal.append(title, list, message, cancel)
        container.appendChild(modal)
        document.body.appendChild(container)

        function cleanup() {
            container.remove()
        }
    })
}