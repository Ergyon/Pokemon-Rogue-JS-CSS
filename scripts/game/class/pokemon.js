import { StatusEffect } from "../mechanics/status-effect.js"
import { typeAdvantage } from "../mechanics/types-table.js"

// Pokemon
class Pokemon {
    constructor(config) {
        this.name = config.name
        this.type = config.type
        this.hp = config.hp
        this.maxHP = config.hp
        this.baseAttack = config.attack
        this.baseDefense = config.defense
        this.attack = config.attack   
        this.defense = config.defense
        this.critical = config.critical
        this.moves = config.moves || []
        this.rank = config.rank

        // image
        this.img = config.img || ''
        
        // statut
        this.status = config.status || null
        this.statusDuration = config.statusDuration || 0

        // degats elementaires
        this.poisonDamage = config.poisonDamage || Math.floor(config.hp * 0.1)
        this.burnDamage = config.burnDamage || Math.floor(config.hp * 0.1)

        // stages 
        this.stages = {
            attack: 0,
            defense: 0
        }
    }


    // Etre KO
    isKO() {
        return this.hp <= 0
    }


    // changement de stage, multiplicateur selon le niveau et reset des stages
    getAttack() {
        return Math.floor(this.baseAttack * this.stageMultiplier(this.stages.attack))
    }
    getDefense(){
        return Math.floor(this.baseDefense * this.stageMultiplier(this.stages.defense))
    }
    changeStage(stat, amount) {
        this.stages[stat] = Math.max(-10, Math.min(10, this.stages[stat] + amount))
    }
    stageMultiplier(stage) {
        return Math.max(0.03, 1 + (stage * 0.1))
    }
    resetStage() {
        for (let stat in this.stages) {
            this.stages[stat] = 0
        }
    }


    // effets status
    applyStatusEffect(messages) {
        return StatusEffect.apply(this, messages)
    }


    // Lancer un move
    doMove(move, target){
        let messages = []

        // si pp restant
        if (move.pp <= 0) {
            messages.push(`${this.name} ne peut plus utiliser ${move.name}...`)
            return messages.join('\n')
        }  

        // attaque de base
        if (move.category === 'physical') {
            messages.push(`${this.name} utilise ${move.name} !`)
            
            const atk = this.getAttack()
            const def = target.getDefense()
            let baseDamage = move.damage
            let damage = Math.floor(baseDamage * (atk / def))

            const {bonus:damageBonus, base: typeBase} = typeAdvantage(move.type, target.type)
            let totalDamage = Math.floor(Math.max(0, damage * damageBonus))
            
            // attaque ratee
            const precisRoll = Math.random() * 100
            const miss = precisRoll > move.precision
            if (miss) {
                messages.push(`${this.name} rate son attaque...`)
                return messages.join('\n')
            }  
            
            // avatange de type ou non
            if (typeBase === 0) {
                totalDamage = 0 
                messages.push(`Ça n'affecte pas ${target.name}`)
                return messages.join('\n')
            } 
            else if (typeBase === 2) {
                messages.push("C'est super efficace !")
            } 
            else if (typeBase === 0.5) {
                messages.push("Ce n'est pas très efficace...")
            }
            
            // coup critique
            const critRoll = Math.random() * 100;
            const isCrit = critRoll < move.criticChance
            if (isCrit) {
                const critBonus = Math.floor(1 + this.critical)
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
}

export { Pokemon }

