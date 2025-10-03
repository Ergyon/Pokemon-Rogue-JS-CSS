export class Item {
    constructor(config) {
        this.name = config.name
        this.desc = config.desc
        this.effect = config.effect
        this.category = config.category
        this.rank = config.rank
        this.price = config.price
        this.img = config.img
        this.canUseFunction = config.canUse
    }

    canUse(pokemon) {
        if (this.canUseFunction) {
            return this.canUseFunction(pokemon)
        }
        return !pokemon.isKO()
    }

    applyEffect(pokemon) {
        this.effect(pokemon)
    }
}


