
// Increase and decrease button
const increase = document.getElementById('increase-btn')
const resetBtn = document.getElementById('reset-btn')
const decrease = document.getElementById('decrease-btn')
const counterTxt = document.getElementById('counter-txt')
let counter = 0 

increase.addEventListener('click', () => {
    counter++
    counterTxt.textContent = counter
})

decrease.addEventListener('click', () => {
    counter--
    counterTxt.textContent = counter
})

resetBtn.addEventListener('click', () => {
    counter = 0
    counterTxt.textContent = counter
})



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


// Pokemons battle
const pokemons = document.querySelectorAll('.pkmnBattle')
const menuAttack = document.querySelectorAll('.attack-menu')


// Show only the selected pokemon's menu
pokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        document.querySelectorAll(".attack-menu").forEach(menu => {
            menu.style.display = 'none'
        })
        
        const menu = pokemon.parentElement.querySelector('.attack-menu')
        
        if (menu) {
            menu.style.display = 'block'
        }
        
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && event.target !== pokemon) {
                menu.style.display = 'none'
            }
        })
    })
})

// Color cells based on the type
const typeColors = {
    Feu: '#f1570fde',     
    Eau: '#3b9cf1',     
    Normal: '#e7eff0d7',  
    Plante: '#7AC74C',
}

document.querySelectorAll('.attack-menu tbody tr').forEach(row => {
    const attackCell = row.querySelector('td.attack')
    const typeCell = attackCell.nextElementSibling
    const typeTxt = typeCell.textContent.trim()

    if (typeColors[typeTxt]) {
        const color = typeColors[typeTxt]
        typeCell.style.background = color
    }
})


function selectAttack(attackName) {
    const attackTxtWrapper = document.querySelector('.attack-txt-container')
    attackTxtWrapper.innerHTML = ''
    
    const attackTxt = document.createElement('span')
    attackTxt.classList.add('attack-txt')
    attackTxt.innerText = "Vous lancez l'attaque " + attackName
    attackTxtWrapper.appendChild(attackTxt)
    
}
