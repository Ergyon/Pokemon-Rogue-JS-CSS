                    // STATUS //

// poison
export function poisonEffect(
    chance = 0.2,
    poisonDamage = 0,
    duration = 1
) {    
    return (user, target, messages) => {
        if (!target.status && Math.random() < chance) {
            target.status = 'poison'
            target.statusDuration = duration
            target.poisonDamage = poisonDamage
            messages.push(`${target.name} est empoisonné !`)
        }
    }
}

// sommeil
export function isAsleep(amount = 0) {
    return (user, target, messages) => {
        if (target.status !== 'sleep') {
            target.status = 'sleep'
            target.statusDuration = amount
            messages.push(`${target.name} s'endort profondément... zzz`)
        } else {
            messages.push("Mais ça n'a aucun effet.")
        }
    }
}



                    //  STATS //

//  buff attaque
export function boostAttack(stageAmount = 0) {
    return (user, target, messages) => {
        user.stageMultiplier('attack', stageAmount)
        messages.push(`${user.name} augmente son attaque.`)
    }
}

// buff defense
export function boostDefense(stageAmount = 0) {
    return (user, target, messages) => {
        user.stageMultiplier('defense', stageAmount)
        messages.push(`${user.name} augmente sa défense.`)
    }
}

// debuff attaque
export function lowerAttack(stageAmount = 0) {
    return (user, target, messages) => {
        target.stageMultiplier('attack', stageAmount)
        messages.push(`L'attaque de ${target.name} baisse.`)
    }
}

// debuff defense
export function lowerDefense(stageAmount = 0) {
    return (user, target, messages) => {
        target.stageMultiplier('defense', stageAmount)
        messages.push(`La défense de ${target.name} baisse.`)
    }
}

// debuff precision
export function lowerPrecision(amount = 0) {
    return (user, target, messages) => {
        target.moves.forEach(move => move.precision *= amount)
        messages.push(`La précision de ${target.name} baisse.`)
    }
}

// soin
export function healingSelf(amount = 0) {
    return (user, target, messages) => {
        if (user.hp < user.maxHP) {
            user.hp = Math.min(user.hp + amount, user.maxHP)
            messages.push(`${user.name} se soigne.`)
        } else {
            messages.push(`Les PV de ${user.name} sont au maximum.`)
        }
    }
}