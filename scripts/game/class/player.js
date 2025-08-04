export class Player {
    constructor(name, img) {
        this.name = name
        this.team = []
        this.inventory = []
        this.money = 1000
        this.badges = []
        this.img = img
    }

    addPokemon(pokemon) {
        if (this.team.length < 3) {
            this.team.push(pokemon)
        } else {
            console.log("Vous ne pouvez pas avoir plus de 3 Pokémons.")

        }
    } 

    earnMoney(amount) {
        this.money += amount
    }

    getItem(item) {
        if (this.inventory.length < 3) {
            this.inventory.push(item)
        } else {
            console.log("Vous ne pouvez pas avoir plus de 3 objets.")
        }
    }

    useItem(item, pokemon) {
        if (item.canUse(pokemon)) {
            item.applyEffect(pokemon)
            this.removeItem(item)
        }
    }

    removeItem(item) {
        const index = this.inventory.indexOf(item)
        if (index !== -1) this.inventory.splice(item)
    }

    buyItem(item, price) {
        if (this.money >= price) {
            this.money -= price
            this.inventory.push(item)
        }
    }
}