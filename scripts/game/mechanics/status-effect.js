import { STATUS } from "./status.js";

// Appliquer les effets de statuts
export class StatusEffect {
    static apply(pokemon, messages) {
        const { status, statusDuration } = pokemon

        switch (status) {
            case STATUS.POISON:
                this.handlePoison(pokemon, messages)
                break

            case STATUS.BURN:
                this.handleBurn(pokemon, messages)
                break

            case STATUS.SLEEP:
                return this.handleSleep(pokemon, messages)

            case STATUS.PARALYZED:
                return this.handleParalysis(pokemon, messages)

            case STATUS.FROZEN:
                return this.handleFrozen(pokemon, messages)

            case STATUS.CONFUS:
                this.handleConfusion(pokemon, messages)
                break

            default: return true
        }

        return true
    }

    // poison
    static handlePoison(pokemon, messages) {
        if (pokemon.statusDuration > 0) {
            pokemon.hp -= pokemon.poisonDamage
            if (pokemon.hp < 0) pokemon.hp = 0

            messages.push(`${pokemon.name} souffre du poison...`)
            pokemon.statusDuration--

            if (pokemon.statusDuration <= 0) {
                pokemon.status = null
                messages.push(`${pokemon.name} n'est plus empoisonné !`)
            }
        }   

    }

    // brulure
    static handleBurn(pokemon, messages) {
        if (pokemon.statusDuration > 0) {
            pokemon.hp -= pokemon.burnDamage
            if (pokemon.hp < 0) pokemon.hp = 0

            messages.push(`${pokemon.name} brûle...`)
            pokemon.statusDuration--

            if (pokemon.statusDuration <= 0) {
                pokemon.status = null
                messages.push(`${pokemon.name} n'est plus brûlé !`)
            }
        }
    }

    // sommeil
    static handleSleep(pokemon, messages) {
        if (pokemon.statusDuration > 0) {
            messages.push(`${pokemon.name} est endormi...`)
            pokemon.statusDuration--
            return false
        } else {
            pokemon.status = null
            messages.push(`${pokemon.name} se réveille !`)
            return true
        }
    }

    // paralysie
    static handleParalysis(pokemon,messages) {
        if (pokemon.statusDuration > 0) {
            pokemon.statusDuration--
            if (Math.random() < 0.25) {
                messages.push(`${pokemon.name} est paralysé et ne peut pas attaquer.`)
                return false
            }
        } else {
            pokemon.status = null
            messages.push(`${pokemon.name} n'est plus paralysé !`)
        }
        return true
    }

    // congelation
    static handleFrozen(pokemon, messages) {
        if (pokemon.statusDuration > 0) {
            messages.push(`${pokemon.name} est gelé.`)
            pokemon.statusDuration--
            return false
        } else {
            pokemon.status = null
            messages.push(`${pokemon.name} n'est plus gelé !`)
            return true
        }
    }

    // confusion
    static handleConfusion(pokemon, messages) {
        if (pokemon.statusDuration > 0) {
            pokemon.statusDuration--

            if (Math.random() < 0.5) {
                const selfDamage = pokemon.maxHP * 0.1
                pokemon.hp -= selfDamage
                if (pokemon.hp <= 0) pokemon.hp = 0

                messages.push(`${pokemon.name} se blesse dans sa confusion.`)
                return false
            } else {
                messages.push(`${pokemon.name} est confus...`)
                messages.push('Mais il tient bon !')
                return true
            }

        }  else {
            pokemon.status = null
            messages.push(`${pokemon.name} n'est plus confus !`)
            return true
        }
    }
}