import { typeAdvantage } from "../datas/types.js"

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
        this.status = status || null
        this.statusDuration = statusDuration
        this.poisonDamage = poisonDamage
        this.stages = {
            attack: 0,
            defense: 0
        }
        
    }


    // Etre KO
    isKO() {
        return this.hp <= 0
    }


    // Lancer un move
    doMove(move, target){
        let messages = []

        // Si pp restant
        if (move.pp <= 0) {
            messages.push(`${this.name} ne peut plus utiliser ${move.name}...`)
            return messages.join('\n')
        }
        
        // attaque de base
        if (move.category === 'physical') {
            messages.push(`${this.name} utilise ${move.name} !`)
            
            let stageAttack = this.attack * this.stageMultiplier(this.stages.attack)
            let stageDefense = this.defense * this.stageMultiplier(this.stages.defense)
            let damage = move.damage + stageAttack - stageDefense

            const damageBonus = typeAdvantage(move.type, target.type)
            let totalDamage = Math.max(0, damage * damageBonus)

            if (damageBonus === 0) {
                totalDamage = 0 
                messages.push(`Ça n'affecte pas ${target.name}`)
                return messages.join('\n')
            }
            
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
                const critBonus = 1 + this.critical
                totalDamage += critBonus
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
            messages.push(`${this.name} utilise ${move.name} !`)
            move.effect(this, target, messages)
            move.pp --
        }
        return messages.join('\n')
    }
    

    // Effets status
    applyStatusEffect(messages) {
        // poison
        if (this.status === 'poison' && this.statusDuration > 0) {
        const poisonDamage = this.poisonDamage 
        this.hp -= poisonDamage

        if (this.hp < 0) this.hp = 0

        messages.push(`${this.name} souffre du poison...`)
        this.statusDuration--

        if (this.statusDuration <= 0) {
            this.status = null
            messages.push(`${this.name} n'est plus empoisonné !`)
        } 
        }

        // sommeil
        if (this.status === 'sleep') {
            if (this.statusDuration > 0) {
                messages.push(`${this.name} dort encore...`)
                console.log(this.statusDuration)
                this.statusDuration--
                return false
            } else {
                this.status = null
                messages.push(`${this.name} se réveille !`)
                console.log(this.statusDuration)
                return true
            }
        }
        return true
    }


    // changement de stage, multiplicateur selon le niveau et reset des stages
    changeStage(stat, amount) {
        this.stages[stat] = Math.max(-5, Math.min(5, this.stages[stat] + amount))
    }
    stageMultiplier(stage) {
        const mult = 1 + (stage * 0.2)
        return Math.max(0.03, mult)
    }
    resetStage() {
        for (let stat in this.stages) {
            this.stages[stat] = 0
        }
    }

    
}

export { Pokemon }

