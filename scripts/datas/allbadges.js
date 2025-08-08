import { Badge } from "../game/class/badges.js";

const attackBadge = new Badge({
    name: "Badge Attaque",
    img: '',
    description: "Augmente légèrement l'attaque de toute votre équipe",
    // effect: increaseAttack(1),
    rank: 1,
})

const defenseBadge = new Badge({
    name: 'Badge Défense',
    img: '',
    description: "Augmente légèrement la défense de toute votre équipe",
    // effect: increaseDefense(1),
    rank: 1,
})



export const allBadges = [
    // rank I
    attackBadge, defenseBadge
    // rank II

    // rank III
] 