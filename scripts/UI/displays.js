// Creation d'un display pokemon
function createPokemonCard(pokemon, side, doAttack) {
    const card = document.createElement('div')
    card.dataset.side = side
    const name = document.createElement('span')
    const img = document.createElement('img')
    const HpBar = document.createElement('div')
    const HpFill = document.createElement('div')
    const HpValue = document.createElement('span')

    name.textContent = pokemon.name
    img.src = pokemon.img
    img.alt = pokemon.name
    HpValue.textContent = `${pokemon.hp}/${pokemon.maxHP}`

    if (side === 'player') {
        img.addEventListener('click', () => displayMenuAttack(pokemon, doAttack))
    }

    card.classList.add("arena__card", `${side}-appears`);
    name.classList.add("arena__card__name");
    img.classList.add("arena__card__pkmn");
    HpBar.classList.add('hp-bar');
    HpFill.classList.add('hp-fill');
    HpValue.classList.add('hp-value');

    HpBar.appendChild(HpFill);
    card.append(name, img, HpBar, HpValue);

    return card;
}


// Display les deux pokemons
export function displayPokemons(player, enemy, doAttack) {
    const arena = document.getElementById('arena')

    const cardPlayer = createPokemonCard(player, 'player', doAttack)
    const cardEnemy = createPokemonCard(enemy, 'enemy', doAttack)
    arena.append(cardPlayer, cardEnemy)

    const battleTextWrapper = document.querySelector(".battle-txt-container")
    const pokemonText = document.createElement('span')
    pokemonText.textContent = `Un ${enemy.name} sauvage apparait !`
    pokemonText.classList.add('pokemon-txt')
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


// Bulle message combat
export function showMessage(text) {
    const TextWrapper = document.querySelector(".battle-txt-container")
    TextWrapper.innerHTML =''
    const attackText = document.createElement('span')
    attackText.classList.add('battle-txt')
    attackText.textContent = text
    TextWrapper.appendChild(attackText)
}


// Animation barre de vie
export function updateHp(pokemon, side) {
    const card = document.querySelector(`[data-side="${side}"]`)
    if (!card) return
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


// Update UI battle
export function updateBattleUI(player, enemy, messages) {
    setTimeout(() => {
        updateHp(player, 'player')
        updateHp(enemy, 'enemy')
    }, 1400)
    const lastMsg = messages[messages.length - 1]
    if (lastMsg) {
        showMessage(lastMsg)
    }
}


// colorer les attaques dans le menu en fonction du type
function attackColor(type) {
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
        case 'SPECTRE': return 'type=Spectre'
        case 'TENEBRES': return 'type-Tenebres'
        default : return 'type-Normal'
    }
}

// pokemon ko
export async function displayKO(side) {
    const card = document.querySelector(`.${side}-appears`)
    if (!card) return
           
    const img = card.querySelector('.arena__card__pkmn')
    img.classList.add('arena__card__pkmn--ko')

    await new Promise((res) => setTimeout(res, 1600))
    card.remove()
}

// vider l'arene
export function undisplayPokemons() {
    const cards = document.querySelectorAll('.arena__card')
    cards.forEach(card => card.remove())
}

// delay pour boucle tour
export function delay(ms) {
    return new Promise(resume => setTimeout(resume, ms))
}

// to do
// export function updateStatus(pokemon, side) {
//     const container = document.querySelector(`.${side}-status`);
//     container.textContent = pokemon.status ? `Statut : ${pokemon.status}` : '';
// }
