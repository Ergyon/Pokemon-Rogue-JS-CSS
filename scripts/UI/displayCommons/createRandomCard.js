// Creer une carte random selectionnable
export function createRandomCard(el, onSelect, container,) {
    if (!el) {
    console.warn('[createRandomCard] élément invalide:', el);
    return null;
    }

    const card = document.createElement('div')
    card.classList.add('random-card')

    const img = document.createElement('img')
    img.classList.add('random-card__img')
    img.src = el.img
    img.alt = el.name
    card.appendChild(img)

    const name = document.createElement('span')
    name.classList.add('random-card__title')
    name.textContent = el.name
    card.appendChild(name)

    // + description si badge
    if (el.description) {
        const text = document.createElement('span')
        text.classList.add('random-card__description')
        text.textContent = el.description
        card.appendChild(text)
    }

    // selectionne
    card.addEventListener('click', () => {
        const alreadySelected = container.querySelector('.random-card--selected')
        if (alreadySelected) return 
        
        card.classList.add('random-card--selected')

        // desactive
        container.querySelectorAll('.random-card').forEach(c => {
            if (c !== card) c.style.pointerEvents = 'none'
            c.classList.add('random-card--disabled')
        })
        onSelect(el)
    })

    return card
}