import { Badge } from "../game/class/badges";

const attackBadge = new Badge({
    name: "Badge Attaque",
    img: '../../assets/img/badges/attackbadge.png',
    description: "Augmente légèrement l'attaque de toute votre équipe",
    effect: increaseAttack(1),
    rank: 1,
})

const defenseBadge = new Badge({
    name: 'Badge Défense',
    img: '../../assets/img/badges/defensebadge.png',
    description: "Augmente légèrement la défense de toute votre équipe",
    effect: increaseDefense(1),
    rank: 1,
})



export const allBadges = [
    // rank I
    attackBadge, defenseBadge
    // rank II

    // rank III
] 