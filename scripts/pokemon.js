import { typeAdvantage } from "./types.js"

// Pokemon
class Pokemon {
    constructor(
        name,
        type, 
        hp, 
        attack, 
        defense, 
        critical, 
        moves = [], 
        img = '', 
        rank, 
        status, 
        statusDuration = 0,
        poisonDamage = 0
    ) {
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
        this.status = status
        this.statusDuration = statusDuration
        this.poisonDamage = poisonDamage
    }

    // Lancer un move
    doMove(move, target){
        let messages = []

        // check status
        this.applyStatusEffect(messages)
        if (this.status === 'sleep') return messages.join('\n')

        // Si pp restant
        if (move.pp <= 0) {
            messages.push(`${this.name} ne peut plus utiliser ${move.name}...`)
            return messages.join('\n')
        }
        
        // attaque de base
        if (move.category === 'physical') {
            messages.push(`${this.name} utilise ${move.name}`)
            let damage = move.damage + this.attack - target.defense
            const damageBonus = typeAdvantage(move.type, target.type)
            const totalDamage = Math.max(0, damage * damageBonus)
            
            // attaque ratee
            const precisRoll = Math.random() * 100
            const miss = precisRoll > move.precision
            if (miss) {
                messages.push(`${this.name} rate son attaque...`)
                return messages.join('\n')
            }
    
            if (damageBonus > 1) {
                messages.push("C'est super efficace !")
            } else if (damageBonus < 1)  {
                messages.push("Ce n'est pas très efficace...")
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
            target.hp -= Math.floor(totalDamage)
            move.pp--
            
            if (target.hp <= 0) {
            messages.push(`${target.name} est KO...`)
            } else if (typeof move.effect === 'function') {
                move.effect(this, target, messages)
            }
            
        }

        // attaque non physique
        else if((move.category === 'status' || move.category === 'stats') && typeof move.effect === 'function') {
            messages.push(`${this.name} utilise ${move.name}`)
            move.effect(this, target, messages)
            move.pp --
        }
        return messages.join('\n')
    }

    // Etre KO
    isKO() {
        return this.hp <= 0
    }
    
    // Effets status
    applyStatusEffect(messages) {
    if (this.status === 'poison') {
        const poisonDamage = this.poisonDamage
        this.hp -= poisonDamage
        messages.push(`${this.name} souffre du poison...`)
        this.statusDuration--
        if (this.statusDuration <= 0) {
            this.status = null
            messages.push(`${this.name} n'est plus empoisonné !`)
        } 
    } 
    else if (this.status === 'sleep') {
        this.statusDuration--
        if (this.statusDuration <= 0) {
            this.status = null
            messages.push(`${this.name} se réveille !`)
        } else {
            messages.push(`${this.name} dort encore...`)
        }
    }
}

    
}

export { Pokemon }

