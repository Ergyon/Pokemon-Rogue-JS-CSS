import { displayTeam } from "../../UI/displayBattle/displayMenus/displayTeam.js"
import { showNotif } from "../../UI/displayBattle/displayText.js"

export class Player {
    constructor({name, img}) {
        this.name = name
        this.team = []
        this.inventory = []
        this.money = 1000
        this.badges = []
        this.img = img
    }

    // ajouter un pokemon
    addPokemon(pokemon) {
        if (this.team.length < 4) {
            this.team.push(pokemon)
        } else {
            showNotif("Vous ne pouvez pas avoir plus de 4 Pokémons.", 'error')

        }
    } 

    // choisir un autre pokemon en combat
    async choosePokemon({current=null, force=true} = {}) {
        const chosen = await displayTeam({
            team: this.team,
            current: current,
            disableKo: true,
            title: 'Choisissez un Pokémon',
            mode: 'switch',
            onCancel: force ? null : () => null
        })
        return chosen || null
    }

    // remplacer un pokemon
    replacePokemon(oldPkmn, newPkmn) {
        const index = this.team.indexOf(oldPkmn)
        if (index !== -1) {
            this.team[index] = newPkmn
            showNotif(`${oldPkmn.name} à été remplacé par ${newPkmn.name}`, 'success')
        } else {
            showNotif('Pokemon à remplacer introuvable', 'error')
        }
    }

    // gagner de l'argent
    earnMoney(amount) {
        this.money += amount 
    }

    // obtenir un badge
    getBadge(badge) {
        this.badges.push(badge)
    }

    // posseder un objet
    getItem(item) {
        if (this.inventory.length < 4) {
            this.inventory.push(item)
        } else {
            console.log("Vous ne pouvez pas avoir plus de 4 objets.")
        }
    }

    // utiliser un objet
    useItem(item, pokemon) {
        if (item.canUse(pokemon)) {
            item.applyEffect(pokemon)
            this.removeItem(item)
        }
    }

    // retirer un objet
    removeItem(item) {
        const index = this.inventory.indexOf(item)
        if (index !== -1) this.inventory.splice(index, 1)
    }

    // acheter un objet
    buyItem(item, price) {
        if (this.money >= price) {
            this.money -= price
            this.inventory.push(item)
        }
    }

    // remplacer un objet
    replaceItem(oldItem, newItem) {
        const index = this.inventory.indexOf(oldItem)
        if (index !== -1) {
            this.inventory[index] = newItem
            showNotif(`${oldItem.name} à été remplacé par ${newItem.name}`, 'success')
        } else {
            showNotif('Objet à remplacer introuvable', 'error')
        }
    }


    // soigner equipe
    healTeam() {
        this.team.forEach(pokemon => {
            pokemon.hp = pokemon.maxHP
            pokemon.resetStage()
            pokemon.status = null
            pokemon.statusDuration = 0
        })
    }
}



// nom et avatar du joueur
export const mainPlayer = new Player({
    name: '',
    img: ''
})

