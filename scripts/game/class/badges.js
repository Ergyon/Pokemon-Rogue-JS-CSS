export class Badge {
    constructor(config) {
        this.name = config.name
        this.img = config.img
        this.description = config.description
        this.effect = config.effect
        this.reverseEffect = config.reverseEffect
    }

    applyBonus(team) {
        this.effect(team)
    }

    removeBonus(team) {
        if (this.reverseEffect) {
            this.reverseEffect(team)
        }
    }
}
