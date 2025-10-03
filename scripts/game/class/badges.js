export class Badge {
    constructor(config) {
        this.name = config.name
        this.img = config.img
        this.description = config.description
        this.effect = config.effect
    }

    applyBonus(team) {
        this.effect(team)
    }
}