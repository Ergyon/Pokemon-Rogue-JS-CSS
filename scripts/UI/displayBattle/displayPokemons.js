import { displayMenuAttack } from "./displayMenus/displayMoveset.js"

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
export function displayPokemons(player, enemy, doAttack, trainerName = null) {
    const arena = document.getElementById('arena')

    const cardPlayer = createPokemonCard(player, 'player', doAttack)
    const cardEnemy = createPokemonCard(enemy, 'enemy', doAttack)
    arena.append(cardPlayer, cardEnemy)

    const textWrapper = document.querySelector(".battle-txt-container")

    const pokemonText = document.createElement('span')
    // si pokemon dresseur
    if (trainerName) {
        pokemonText.textContent = `${trainerName} envoie ${enemy.name} !`
    }
    // si pokemon sauvage 
    else {
        pokemonText.textContent = `Un ${enemy.name} sauvage apparait !`
    }
    
    pokemonText.classList.add('pokemon-txt')
    textWrapper.appendChild(pokemonText)
}


// Nouveau pokemon en cours de combat (apres ko ou switch)
export function displayNewPokemon(pokemon, side, doAttack=null) {
    const arena = document.getElementById('arena')
    const card = createPokemonCard(pokemon, side, doAttack)
    arena.appendChild(card)
}

