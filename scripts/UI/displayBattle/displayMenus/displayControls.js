import { displaySwitch } from "../undisplay.js"
import { displayInventory } from "./displayInventory.js"
import { displayTeam } from "./displayTeam.js"

// afficher menu du joueur (team, iventory, badges, switch)
export function displayControls(player, active, onAction, doAttack=null) {
    const wrapper = document.querySelector('.battlefield')

    const existingMenu = wrapper.querySelector('.controls-menu')
    if (existingMenu) existingMenu.remove()

    const menu = document.createElement('div')
    menu.classList.add('controls-menu')

    // argent 
    const money = document.createElement('span')
    money.classList.add('money')
    money.textContent = `${player.money} $`

    // team
    const teamBtn = document.createElement('button')
    teamBtn.classList.add('controls-menu__btn', 'controls-menu__btn--team')
    teamBtn.textContent = 'Équipe'
    teamBtn.onclick = async () => {
        console.log('pokemon actif : ', active.player.name)
        await displayTeam({
            team: player.team,
            current: active.player,
        })
    }

    // changer de pokemon
    const switchBtn = document.createElement('button')
    switchBtn.classList.add('controls-menu__btn', 'controls-menu__btn--switch')
    switchBtn.textContent = 'Changer de Pokémon'

    const alivePkmn = player.team.filter(p => !p.isKO() && p !== active.player)
    switchBtn.disabled = alivePkmn.length === 0

    switchBtn.onclick = async () => {
        const chosen = await displayTeam({
            team: player.team,
            current: active.player,
            disableKo: true,
            title: 'Choisir un Pokémon',
            mode: 'switch',
        })

        if (chosen && chosen !== active.player) {
            if (typeof onAction === 'function') {
                await displaySwitch('player')
                onAction({type: 'switch', payload: chosen})
            }
        } 
    }

    // inventaire
    const inventoryBtn = document.createElement('button')
    inventoryBtn.classList.add('controls-menu__btn', 'controls-menu__btn--inventory')
    inventoryBtn.textContent = 'Objets'

    inventoryBtn.disabled = !player.inventory || player.inventory.length === 0

    inventoryBtn.onclick = async () => {
        await displayInventory(player, active)
    }

    // badges
    const badgesBtn = document.createElement('button')
    badgesBtn.classList.add('controls-menu__btn', 'controls-menu__btn--badges')
    badgesBtn.textContent = 'Badges'

    badgesBtn.disabled = !player.badges || player.badges.length === 0

    badgesBtn.onclick = async () => {
        // await displayBadges()
    }

    menu.append(teamBtn, inventoryBtn, switchBtn, badgesBtn)
    wrapper.append(menu, money)
}

// met a jour les boutons (si inventaire vide ou un seul pokemon dans l'equipe)
export function updateControls(player, active) {
    const menu = document.querySelector('.controls-menu')
    if (!menu) return

    const switchBtn = menu.querySelector('.controls-menu__btn--switch')
    if (switchBtn) {
        const alivePkmn = player.team.filter(p => !p.isKO() && p !== active.player)
        switchBtn.disabled = alivePkmn.length === 0
    }

    const inventoryBtn = menu.querySelector('.controls-menu__btn--inventory')
    if (inventoryBtn) {
        inventoryBtn.disabled = !player.inventory || player.inventory.length === 0 
    }
}