import { displayTeam } from "./displayTeam.js"

// afficher menu du joueur (team, iventory)
export function displayControls(player, active, onAction) {
    const wrapper = document.querySelector('.battlefield')

    const existingMenu = wrapper.querySelector('.controls-menu')
    if (existingMenu) existingMenu.remove()

    const menu = document.createElement('div')
    menu.classList.add('controls-menu')

    // bouton team
    const teamBtn = document.createElement('button')
    teamBtn.classList.add('controls-menu__btn', 'controls-menu__btn--team')
    teamBtn.textContent = 'Équipe'
    teamBtn.onclick = async () => {
        await displayTeam({
            team: player.team,
            current: active.player,
        })
    }

    // bouton changer de pokemon
    const switchBtn = document.createElement('button')
    switchBtn.classList.add('controls-menu__btn', 'controls-menu__btn--switch')
    switchBtn.textContent = 'Changer de Pokémon'

    const alivePkmn = player.team.filter(p => !p.isKO() && p !== active.player)
    switchBtn.disabled = alivePkmn.length === 0
    console.log('Pokémon vivants disponibles:', alivePkmn.length, alivePkmn.map(p => p.name))

    switchBtn.onclick = async () => {
        const chosen = await displayTeam({
            team: player.team,
            current: active.player,
            disableKo: true,
            title: 'Choisir un Pokémon',
            onCancel: () => displayControls(player, active, onAction)
        })

        if (chosen && chosen !== active.player) {
            menu.remove()
            if (typeof onAction === 'function') {
                onAction({type: 'switch', payload: chosen})
            }
        } else if (chosen === null) {
            displayControls(player, active, onAction)
        }
    }

    // bouton inventaire
    const inventoryBtn = document.createElement('button')
    inventoryBtn.classList.add('controls-menu__btn', 'controls-menu__btn--inventory')
    inventoryBtn.textContent = 'Inventaire'

    inventoryBtn.disabled = !player.inventory || player.inventory.length === 0

    inventoryBtn.onclick = async () => {
        // await displayInventory()
        console.log('inventaire', player.inventory)
    }

    menu.append(teamBtn, inventoryBtn, switchBtn)
    wrapper.appendChild(menu)
}