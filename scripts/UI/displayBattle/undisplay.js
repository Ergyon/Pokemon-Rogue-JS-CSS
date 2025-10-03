// pokemon ko
export async function displayKO(side) {
    const card = document.querySelector(`.${side}-appears`)
    if (!card) return
           
    const img = card.querySelector('.arena__card__pkmn')
    img.classList.add('arena__card__pkmn--ko')

    await new Promise((res) => setTimeout(res, 1600))
    card.remove()
}

// changement de pokemon
export async function displaySwitch(side) {
    const card = document.querySelector(`.${side}-appears`)
    if (!card) return

    const img = card.querySelector('.arena__card__pkmn')
    img.classList.add('arena__card__pkmn--switch')

    await new Promise((res) => setTimeout(res, 800))
    card.remove()
}


// vider l'arene
export function undisplayPokemons() {
    const cards = document.querySelectorAll('.arena__card')
    cards.forEach(card => card.remove())
}