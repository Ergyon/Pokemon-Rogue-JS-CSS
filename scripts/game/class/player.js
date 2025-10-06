import { displayTeam } from "../../UI/displayBattle/displayMenus/displayTeam.js"

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
        if (this.team.length < 3) {
            this.team.push(pokemon)
        } else {
            console.log("Vous ne pouvez pas avoir plus de 4 Pokémons.")

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
        if (this.inventory.length < 3) {
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

