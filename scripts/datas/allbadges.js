import { Badge } from "../game/class/badges.js";

const badgeForce = new Badge({
    name: "Force",
    img: '../../assets/img/items/badges/force.png',
    description: "Augmente légèrement l'attaque de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseAttack(1)
        })
    },
})

const badgePuissance = new Badge({
    name: "Puissance",
    img: '../../assets/img/items/badges/puissance.png',
    description: "Augmente l'attaque de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseAttack(2)
        })
    },
})

const badgeTitan= new Badge({
    name: "Titan",
    img: '../../assets/img/items/badges/titan.png',
    description: "Augmente considérablement l'attaque de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseAttack(3)
        })
    },
})

const badgeDefense = new Badge({
    name: 'Défense',
    img: '../../assets/img/items/badges/defense.png',
    description: "Augmente légèrement la défense de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseDefense(1)
        })
    }
})

const badgeArmure = new Badge({
    name: 'Armure',
    img: '../../assets/img/items/badges/armure.png',
    description: "Augmente la défense de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseDefense(2)
        })
    }
})

const badgeForteresse = new Badge({
    name: 'Forteresse',
    img: '../../assets/img/items/badges/forteresse.png',
    description: "Augmente considérablement la défense de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseDefense(3)
        })
    }
})

const badgeVitalite = new Badge({
    name: 'Vitalité',  
    img: '../../assets/img/items/badges/vitalite.png',
    description: 'Augmente les PV de tout vos Pokémons de 30',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.maxHP += 30
        })
    }
})

const badgeGaia = new Badge({
    name: 'Gaia',  
    img: '../../assets/img/items/badges/gaia.png',
    description: 'Augmente les PV de tout vos Pokémons de 50',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.maxHP += 50
        })
    }
})


export const allBadges = [

    badgeForce, badgePuissance, badgeTitan,
    badgeDefense, badgeArmure, badgeForteresse,
    badgeVitalite, badgeGaia


] 

