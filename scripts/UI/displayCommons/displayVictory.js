
// Modale de victoire + choix de badges
export function displayVictory({
    money = 0,
    trainerName = '',
    getRandomBadge
} = {} ) {
    return new Promise ((resolve) => {
        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        const modal = document.createElement('div')
        modal.classList.add('modal-victory')

        const title = document.createElement('h2')
        title.classList.add('modal-victory__title')
        title.textContent = 'Victoire !'

        const msg = document.createElement('h4')
        msg.classList.add('modal-victory__message')
        msg.textContent = `Félicitations, vous avez vaincu ${trainerName}.`

        const moneyTxt = document.createElement('span')
        moneyTxt.classList.add('modal-victory__money')
        moneyTxt.textContent = `Vous gagnez ${money}$`

        const badgeTitle = document.createElement('h3')
        badgeTitle.classList.add('modal-victory__badge-title')
        badgeTitle.textContent = 'Choisissez un Badge'

        const badgeSection = document.createElement('div')
        badgeSection.classList.add('modal-victory__badge-section')


        // genere 2 badges random
        let badge1 = getRandomBadge()
        let badge2 = getRandomBadge()

        while (badge1.name === badge2.name) {
            badge2 = getRandomBadge()
        }

        const badgeWrapper = document.createElement('div')
        badgeWrapper.classList.add('modal-victory__badge-wrapper')

        const card1 = createBadge(badge1, () => {
            cleanup()
            resolve(badge1)
        })
        const card2 = createBadge(badge2, () => {
            cleanup()
            resolve(badge2)
        })

        badgeWrapper.append(card1, card2)
        badgeSection.append(badgeTitle, badgeWrapper)
        modal.append(title, msg, moneyTxt, badgeSection)
        overlay.appendChild(modal)
        document.body.appendChild(overlay)

        function cleanup() {
            overlay.remove()
        }
    })
}


// carte badge
function createBadge(badge, onSelect) {
    const card = document.createElement('div')
    card.classList.add('modal-victory__badge-card')

    const img = document.createElement('img')
    img.classList.add('modal-victory__badge-img')
    img.src = badge.img
    img.alt = badge.name

    const infos = document.createElement('div')
    infos.classList.add('modal-victory__badge-infos')

    const name = document.createElement('span')
    name.classList.add('modal-victory__badge-name')
    name.textContent = badge.name

    const desc = document.createElement('span')
    desc.classList.add('modal-victory__badge-desc')
    desc.textContent = badge.description

    card.addEventListener('click', () => {
        card.classList.add('modal-victory__badge-card--selected')
        setTimeout(() => {
            onSelect()
        }, 1000) 
    })

    infos.append(name, desc)
    card.append(img, infos)
    return card
}