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
        // healing via attaque
        if (messages && Array.isArray(messages)) {
            if (user.hp < user.maxHP) {
                const healed = Math.min(amount, user.maxHP - user.hp)
                    user.hp = Math.min(user.hp + amount, user.maxHP)
                    messages.push(`${user.name} récupère ${healed} PV.`)
            } else {
                messages.push(`Les PV de ${user.name} sont déjà au maximun.`)
            }
        }
        // healing via objet 
        else {
            const pokemon = user
            const healed = Math.min(amount, pokemon.maxHP - pokemon.hp)
            pokemon.hp = Math.min(pokemon.hp + amount, pokemon.maxHP)
            console.log(`${pokemon.name} recupere ${healed} pv`)
        }
    }  
}