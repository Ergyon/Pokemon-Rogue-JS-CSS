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

        const currentHp = user.hp
        const maxHp = user.maxHP
        
        // check si pv deja au maximum
        if (currentHp >= maxHp) {
            if (messages && Array.isArray(messages)) {
                messages.push(`Les PV de ${user.name} sont déjà au maximum.`)
            } else {
                console.log(`Les PV de ${user.name} sont déjà au maximum.`)
            }
            return
        }

        const healedAmount = Math.min(amount, maxHp - currentHp)
        user.hp = currentHp + healedAmount

        if (messages && Array.isArray(messages)) {
            messages.push(`${user.name} récupère ${healedAmount} PV.`)
        } else {
            console.log(`${user.name} récupère ${healedAmount} PV.`)
        }
    }  
}