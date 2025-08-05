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