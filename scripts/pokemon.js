// Pokemon
class Pokemon {
    constructor(name, type, hp, attack, defense, critical, moves = [], img = '', rank) {
        this.name = name
        this.type = type 
        this.hp = hp
        this.attack = attack
        this.defense = defense 
        this.critical = critical
        this.moves = moves
        this.img = img 
        this.rank = rank
    }

    doMove(move){
        let totalDamage = move.damage

        // Calcul coup critique
        const critRoll = Math.random() * 100
        const isCrit = critRoll < move.critical
        if (isCrit) {
            const critBonus = move.damage * this.critical
            totalDamage += critBonus
        }

        return totalDamage
    }
}

export { Pokemon }