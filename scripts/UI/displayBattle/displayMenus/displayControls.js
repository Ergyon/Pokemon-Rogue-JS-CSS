
// bouton changer de pokemon 
export function switchPokemon(onSwitch, {disabled=false} ={}) {
    const wrapper = document.querySelector('.battlefield')
    const controls = document.createElement('div')
    controls.classList.add('player-controls')
    wrapper.appendChild(controls)

    const btn = document.createElement('button')
    btn.classList.add('player-controls__switchPkmn')
    btn.textContent = 'Changer de Pokémon'
    controls.appendChild(btn)

    btn.disabled = !!disabled
    btn.onclick = () => {
        if (!btn.disabled && typeof onSwitch ==="function") onSwitch()
    }
}

