// Move
class Move {
    constructor({
        name,
        type,
        damage = 0,
        precision = 100,
        criticChance = 0,
        img = '',
        pp = 10,
        category = 'physical',
        effect = null
    }) {
        this.name = name
        this.type = type
        this.damage = damage
        this.precision = precision
        this.criticChance = criticChance
        this.img = img
        this.pp = pp
        this.maxPP = pp
        this.category = category
        this.effect = effect
    }
}

export function createMove(config) {
    return new Move(config);
}




        

    

    




