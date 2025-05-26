// Chose a Pokemon starter
const pokeball_1 = document.getElementById('pokeball-1')
const pokeball_2 = document.getElementById('pokeball-2')
const pokeball_3 = document.getElementById('pokeball-3')
const messageWrapper = document.querySelector('.message-wrapper')
const allPokeballs = [pokeball_1, pokeball_2, pokeball_3]

function revealPokemon(pokeball, imagePath) {
    pokeball.addEventListener('click', () => {
        pokeball.setAttribute('src', imagePath)
        pokeball.classList.add('pokemon')
        pokeball.classList.remove('pokeball')

        const fileName = imagePath.split('/').pop()
        const imageName = fileName.split('.')[0]
        const pokemonName = imageName.charAt(0).toUpperCase() + imageName.slice(1)

        const message = document.createElement('span')
        message.textContent = `Vous obtenez ${pokemonName} !`
        message.classList.add('pokeball-message')
        messageWrapper.appendChild(message)

        if (pokemonName === 'Hericendre') {
            message.style.color = 'tomato'
        } else if (pokemonName === 'Kaiminus') {
            message.style.color = 'darkturquoise'
        } else {
            message.style.color = 'limegreen'
        }

        allPokeballs.forEach(ball => {
            if (ball !== pokeball) {
                ball.classList.add('disabled')
            }
        })
    })
}

revealPokemon(pokeball_1, 'img/hericendre.png')
revealPokemon(pokeball_2, 'img/kaiminus.png')
revealPokemon(pokeball_3, 'img/germignon.png')