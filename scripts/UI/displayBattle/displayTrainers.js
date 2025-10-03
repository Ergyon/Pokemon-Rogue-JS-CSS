
export function displayTrainer(trainer) {
    const arena = document.getElementById('arena')

    const card = document.createElement('div')
    const name = document.createElement('span')
    const img = document.createElement('img')

    name.textContent = trainer.name
    img.src = trainer.img
    img.alt = trainer.name

    card.classList.add("trainer")
    name.classList.add('trainer__name')
    img.classList.add("trainer__img")

    card.append(name, img)
    arena.appendChild(card)
}

export async function undisplayTrainer() {
    const card = document.querySelector('.trainer')
    card.remove()
}