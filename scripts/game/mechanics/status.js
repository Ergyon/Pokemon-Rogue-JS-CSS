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
    poisonDamage = 0,
    duration = 1
) {    
    return (user, target, messages) => {
        if (target.status !== 'poison' && target.status !== 'sleep' && Math.random() < chance) {
            target.status = STATUS.POISON
            target.statusDuration = duration
            target.poisonDamage = poisonDamage
            messages.push(`${target.name} est empoisonné !`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
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
        if (target.status !== 'burnt' && target.status !== 'poison' && Math.random() < chance) {
            target.status = STATUS.BURN
            target.statusDuration = duration
            target.burnDamage = burnDamage
            messages.push(`${target.name} est brûlé !`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
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
export function isFrozen(duration = 0, chance = 0.05) {
    return (user, target, messages) => {
        if (target.status !== 'frozen' && Math.random() < chance) {
            target.status = STATUS.FROZEN
            target.statusDuration = duration
            messages.push(`${target.name} est gelé !`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
        }
    }
}


// paralysie
export function isParalyzed(duration= 0, chance = 0.1) {
    return (user, target, messages) => {
        if (target.status !== 'paralyzed' && target.status !== 'sleep' && Math.random() < chance) {
            target.status = STATUS.PARALYZED
            target.statusDuration = duration
            messages.push(`${target.name} est paralysé !`)
        }
    }
}