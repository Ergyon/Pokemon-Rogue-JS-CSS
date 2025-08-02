// Faire apparaitre les pokemons au combat
export function displayPokemons(player, enemy, doAttack){
    const arena = document.getElementById("arena")

    const cardPlayer = document.createElement("div")
    const pkmnPlayerName = document.createElement("span")
    const pkmnPlayerImg = document.createElement("img")
    const pvBarPlayer = document.createElement("div")
    const pvFillPlayer = document.createElement("div")
    const pvValuePlayer = document.createElement('span')
    
    const cardEnemy = document.createElement("div")
    const pkmnEnemyName = document.createElement("span")
    const pkmnEnemyImg = document.createElement("img")
    const pvBarEnemy = document.createElement("div")
    const pvFillEnemy = document.createElement("div")
    const pvValueEnemy = document.createElement('span')
    
    pkmnPlayerName.textContent = player.name
    pkmnPlayerImg.src = player.img
    pkmnPlayerImg.alt = player.name
    pvValuePlayer.textContent = `${player.hp}/${player.maxHP}`

    pkmnPlayerImg.addEventListener("click", () => {
        displayMenuAttack(player, doAttack)
    })

    pkmnEnemyName.textContent = enemy.name
    pkmnEnemyImg.src = enemy.img
    pkmnEnemyImg.alt = enemy.name
    pvValueEnemy.textContent = `${enemy.hp}/${enemy.maxHP}`
    

    cardPlayer.classList.add("arena__card", "player-appears")
    pkmnPlayerName.classList.add("arena__card__name")
    pkmnPlayerImg.classList.add("arena__card__pkmn")
    pvBarPlayer.classList.add('hp-bar')
    pvFillPlayer.classList.add('hp-fill')
    pvValuePlayer.classList.add('hp-value')
    
    cardEnemy.classList.add("arena__card", "enemy-appears")
    pkmnEnemyName.classList.add("arena__card__name")
    pkmnEnemyImg.classList.add("arena__card__pkmn")
    pvBarEnemy.classList.add('hp-bar')
    pvFillEnemy.classList.add('hp-fill')
    pvValueEnemy.classList.add('hp-value')

    pvBarPlayer.appendChild(pvFillPlayer)
    cardPlayer.append(pkmnPlayerName, pkmnPlayerImg, pvBarPlayer, pvValuePlayer)

    pvBarEnemy.appendChild(pvFillEnemy)
    cardEnemy.append(pkmnEnemyName, pkmnEnemyImg, pvBarEnemy, pvValueEnemy)

    arena.append(cardPlayer, cardEnemy,)

    const battleTextWrapper = document.querySelector(".battle-txt-container")
    const pokemonText = document.createElement("span")
    pokemonText.textContent = `Un ${enemy.name} sauvage apparait !`
    pokemonText.classList.add("pokemon-txt")

    battleTextWrapper.appendChild(pokemonText)
}


// Creer moveset du pokemon player
export function displayMenuAttack(pokemon, doAttack) {
    const menu  = document.getElementById("attackMenu")
    menu.innerHTML = ''
    menu.classList.remove('hidden')

    const table = document.createElement('table')
    const header = document.createElement('tr')
    header.innerHTML = "<th>Attaques</th><th>PP</th>"
    table.appendChild(header)

    pokemon.moves.forEach((move) => {
        const row = document.createElement('tr')

        const moveName = document.createElement('td')
        moveName.classList.add('attack')
        moveName.textContent = move.name

        const typeColor = attackColor(move.type)
        moveName.classList.add(typeColor)

        const movePP = document.createElement('td')
        movePP.classList.add('pp')
        movePP.textContent = `${move.pp}/${move.maxPP}`

        row.appendChild(moveName)
        row.appendChild(movePP)

        moveName.addEventListener("click", () => {
            if (move.pp <= 0) {
                // petite animation
                return
            }
            hideMenu()
            doAttack(move)
        })

        table.appendChild(row)
    })

    menu.appendChild(table)
}

// Bulle message combat
export function showMessage(text) {
    const TextWrapper = document.querySelector(".battle-txt-container")
    TextWrapper.innerHTML = ''
    const attackText = document.createElement('span')
    attackText.classList.add('battle-txt')
    attackText.textContent = text
    TextWrapper.appendChild(attackText)
}

// Masquer moveset
function hideMenu() {
    document.getElementById('attackMenu').classList.add("hidden")
}
document.addEventListener("click", (e) => {
    const menu = document.getElementById("attackMenu")
    const isMenu = menu.contains(e.target)
    const isImg = e.target.classList.contains('arena__card__pkmn')

    if (!isMenu && !isImg) {
        hideMenu()
    }
})

// Animation barre de vie
export function updateHp(pokemon, side) {
    const card = document.querySelector(`.${side}-appears`)
    const hpValue = card.querySelector('.hp-value')
    const hpFill = card.querySelector('.hp-fill')

    const ratio = pokemon.hp / pokemon.maxHP
    const pourcentage = Math.max(0, Math.floor(ratio * 100))

    hpValue.textContent = `${Math.max(0, pokemon.hp)} / ${pokemon.maxHP}`
    hpFill.style.width = `${pourcentage}%`

    hpFill.classList.remove('low', 'mid')
    if (pourcentage < 15) {
        hpFill.classList.add('low')
    } else if (pourcentage < 40) {
        hpFill.classList.add('mid')
    }
}

// colorer les attaques dans le menu en fonction du type
function attackColor(typeObj) {
    const type = typeObj.name
    switch(type) {
        case 'FEU': return 'type-Feu'
        case 'EAU': return 'type-Eau'
        case 'PLANTE': return 'type-Plante'
        case 'FOUDRE': return 'type-Foudre'
        case 'PSY': return 'type-Psy'
        case 'POISON': return 'type-Poison'
        case 'VOL': return 'type-Vol'
        case 'ROCHE': return 'type-Roche'
        case 'COMBAT': return 'type-Combat'
        case 'SOL': return 'type-Sol'
        case 'DRAGON': return 'type-Dragon'
        case 'TENEBRES': return 'type-Tenebres'
        default : return 'type-Normal'
    }
}

