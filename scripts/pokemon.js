
// Pokemon
class Pokemon {
    constructor(name, type, hp, attack, defense, critical, moves = [], img = '', rank) {
        this.name = name
        this.type = type 
        this.hp = hp
        this.maxHP = hp
        this.attack = attack
        this.defense = defense 
        this.critical = critical
        this.moves = moves
        this.img = img 
        this.rank = rank
    }

    // Lancer un move
    doMove(move, target){
        let messages = []
        // Si pp restant
        if (move.pp <= 0) {
            messages.push(`${this.name} ne peut plus utiliser ${move.name}...`)
            return 
        }
        
        // attaque de base
        messages.push(`${this.name} utilise ${move.name}`)
        let damage = move.damage + this.attack - target.defense
        damage = Math.max(1, damage)
        
        // attaque ratee
        const precisRoll = Math.random() * 100
        const miss = precisRoll > move.precision
        if (miss) {
            messages.push(`${this.name} rate son attaque...`)
            return messages.join('\n')
        }
        
        // coup critique
        const critRoll = Math.random() * 100;
        const isCrit = critRoll < move.criticChance
        if (isCrit) {
            const critBonus = move.damage * this.critical
            damage += critBonus
            messages.push('Coup critique !')
        }

        // apllication des degats
        target.hp -= Math.floor(damage)
        move.pp--
        
        if (target.hp <= 0) {
            messages.push(`${target.name} est KO...`)
        }

        return messages.join('\n')
    }

    // Etre KO
    isKO() {
        return this.hp <= 0
    }
    
}

export { Pokemon }

