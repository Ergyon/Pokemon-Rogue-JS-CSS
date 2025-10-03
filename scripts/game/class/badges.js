export class Badge {
    constructor(config) {
        this.img = config.img
        this.name = config.name
        this.description = config.description
        this.effect = config.effect
    }

    applyBonus(team) {
        this.effect(team)
    }
}