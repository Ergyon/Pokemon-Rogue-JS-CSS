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