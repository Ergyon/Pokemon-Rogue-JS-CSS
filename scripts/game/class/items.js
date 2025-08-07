export class Item {
    constructor(config) {
        this.name = config.name
        this.effect = config.effect
        this.category = config.category
        this.rank = config.rank
        this.price = config.price
    }

    canUse(pokemon) {
        return true
    }

    applyEffect(pokemon) {
        this.effect(pokemon)
    }
}


