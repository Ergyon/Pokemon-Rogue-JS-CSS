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
        // Si pp restant
        if (move.pp <= 0) {
            console.log(`${this.name} ne peut plus utiliser ${move.name}...`)
            return 
        }
        
        // attaque ratee
        const precisRoll = Math.random() * 100
        const miss = precisRoll > move.precision
        if (miss) {
            console.log(`${this.name} rate son attaque...`)
            return 
        }
        
        // degats de base
        let damage = move.damage + this.attack - target.defense
        damage = Math.max(1, damage)
        
        // coup critique
        const critRoll = Math.random() * 100;
        const isCrit = critRoll < move.criticChance
        if (isCrit) {
            const critBonus = move.damage * this.critical
            damage += critBonus
            console.log('Coup critique !')
        }

        // apllication des degats
        target.hp -= Math.floor(damage)
        move.pp--
        
    }

    // Etre KO
    isKO() {
        return this.hp <= 0
    }
    
}

export { Pokemon }