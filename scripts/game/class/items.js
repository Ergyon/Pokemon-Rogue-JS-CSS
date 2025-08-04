import { healingSelf } from "../mechanics/stats-change"

export class Item {
    constructor(name, effect, category = 'stats', rank = 1) {
        this.name = name
        this.effect = effect
        this.category = category
        this.rank = rank
    }

    canUse(pokemon) {
        return true
    }

    applyEffect(pokemon) {
        this.effect(pokemon)
    }
}


// rank I
const potion = new Item('Potion', healingSelf(30), 'stats', 1)



const allItems = {
    potion
}


 export { allItems }

