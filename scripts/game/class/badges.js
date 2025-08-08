export class Badge {
    constructor(config) {
        this.img = config.img
        this.name = config.name
        this.description = config.description
        this.effect = config.effect
        this.rank = config.rank
    }

    applyBonus(team) {
        this.effect(team)
    }
}