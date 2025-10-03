// status possibles
export const STATUS = {
    POISON: 'poison',
    SLEEP: 'sleep',
    PARALYZED: 'paralyzed',
    BURN: 'burnt',
    FROZEN: 'frozen',
    CONFUS: 'confused'
}


// poison
export function isPoisoned(
    chance = 0.2,
    poisonDamage = 1,
    duration = 1
) {    
    return (user, target, messages) => {
        if (target.status !== 'poison' && target.status !== 'sleep' && Math.random() < chance) {
            target.status = STATUS.POISON
            target.statusDuration = duration
            target.poisonDamage = poisonDamage
            messages.push(`${target.name} est empoisonné !`)
        }
    }
}


// brulure
export function isBurned(
    chance = 0.1,
    burnDamage = 0,
    duration = 1
) {
    return (user, target, messages) => {
        if (target.status !== 'burnt' && Math.random() < chance) {
            target.status = STATUS.BURN
            target.statusDuration = duration
            target.burnDamage = burnDamage
            messages.push(`${target.name} est brûlé !`)
        }
    }
}


// sommeil
export function isAsleep(duration = 0) {
    return (user, target, messages) => {
        if (target.status !== 'sleep') {
            target.status = STATUS.SLEEP
            target.statusDuration = duration
            messages.push(`${target.name} s'endort... zzz`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
        }
    }
}


// gele
export function isFrozen(chance = 0.05, duration = 0,) {
    return (user, target, messages) => {
        if (target.status !== 'frozen' && Math.random() < chance) {
            target.status = STATUS.FROZEN
            target.statusDuration = duration
            messages.push(`${target.name} est gelé !`)
        }
    }
}


// paralysie
export function isParalyzed(chance = 0.1, duration = 0) {
    return (user, target, messages) => {
        if (target.status !== 'paralyzed' && target.status !== 'sleep' && Math.random() < chance) {
            target.status = STATUS.PARALYZED
            target.statusDuration = duration
            messages.push(`${target.name} est paralysé !`)
        }
    }
}

// heal status
export function healStatus() {
    return (pokemon) => {
        pokemon.status = null
        pokemon.statusDuration = 0
        console.log(`${pokemon.name} retrouve son état normal.`)
    }
}
