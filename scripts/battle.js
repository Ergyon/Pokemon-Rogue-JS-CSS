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