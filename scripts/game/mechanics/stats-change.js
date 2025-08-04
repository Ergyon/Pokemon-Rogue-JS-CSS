//  buff attaque
export function boostAttack(stageAmount = 1) {
    return (user, target, messages) => {
        user.changeStage('attack', stageAmount)
        messages.push(`${user.name} augmente son attaque.`)
    }
}

// buff defense
export function boostDefense(stageAmount = 1) {
    return (user, target, messages) => {
        user.changeStage('defense', stageAmount)
        messages.push(`${user.name} augmente sa défense.`)
    }
}

// debuff attaque
export function lowerAttack(stageAmount = -1) {
    return (user, target, messages) => {
        target.changeStage('attack', stageAmount)
        messages.push(`L'attaque de ${target.name} baisse.`)
    }
}

// debuff defense
export function lowerDefense(stageAmount = -1) {
    return (user, target, messages) => {
        target.changeStage('defense', stageAmount)
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
export function healingSelf(amount = 1) {
    return (user, target, messages) => {
        if (user.hp < user.maxHP) {
            user.hp = Math.min(user.hp + amount, user.maxHP)
            messages.push(`${user.name} se soigne.`)
        } else {
            messages.push(`Les PV de ${user.name} sont au maximum.`)
        }
    }
}