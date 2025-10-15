import { Badge } from "../game/class/badges.js";
import { TYPES } from './types.js';

const badgeForce = new Badge({
    name: "Force",
    img: '../../assets/img/items/badges/force.png',
    description: "Augmente légèrement l'attaque de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseAttack(1)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => pkmn.decreaseAttack(1))
    }
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
    reverseEffect: (team) => {
        team.forEach(pkmn => decreaseAttack(2))
    }
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
    reverseEffect: (team) => {
        team.forEach(pkmn => decreaseAttack(3))
    }
})

const badgeDefense = new Badge({
    name: 'Défense',
    img: '../../assets/img/items/badges/defense.png',
    description: "Augmente légèrement la défense de toute votre équipe",
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseDefense(1)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => decreaseDefense(1))
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
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseDefense(2)
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
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseDefense(3)
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
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.maxHP -= 30
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
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.maxHP -= 50
        })
    }
})

const badgeCritic = new Badge({
    name: 'Critique',
    img: '../../assets/img/items/badges/critic.png',
    description: 'Augmente le taux de coup critique',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseCriticalRate(8)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseCriticalRate(8)
        })
    }
})

const badgePrecision = new Badge({
    name: 'Cible',
    img: '../../assets/img/items/badges/precision.png',
    description: 'Augmente la précision des attaques',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increasePrecision(10)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreasePrecision(10)
        })
    }
})

const badgeEndurance = new Badge({
    name: 'Endurance',
    img: '../../assets/img/items/badges/endurance.png',
    description: 'Augmente les PP maximum des attaques',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.moves.forEach(move => {
                move.maxPP += 5
                move.pp += 5
            })
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.moves.forEach(move => {
                move.maxPP -= 5
            })
        })
    }
})

const badgeBrut = new Badge({
    name: 'Brut',
    img: '../../assets/img/items/badges/brut.png',
    description: 'Augmente les attaques de type Normal',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.NORMAL, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.NORMAL, 1.15)
        })
    }
})

const badgeFlamme = new Badge({
    name: 'Flamme',
    img: '../../assets/img/items/badges/flamme.png',
    description: 'Augmente les attaques de type Feu',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.FEU, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.FEU, 1.15)
        })
    }
})

const badgeMer = new Badge({
    name: 'Mer',
    img: '../../assets/img/items/badges/mer.png',
    description: 'Augmente les attaques de type Eau',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.EAU, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.EAU, 1.15)
        })
    }
})

const badgeJardin = new Badge({
    name: 'Jardin',
    img: '../../assets/img/items/badges/jardin.png',
    description: 'Augmente les attaques de type Plante',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.PLANTE, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.PLANTE, 1.15)
        })
    }
})

const badgeOrage = new Badge({
    name: 'Orage',
    img: '../../assets/img/items/badges/orage.png',
    description: 'Augmente les attaques de type Foudre',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.FOUDRE, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.FOUDRE, 1.15)
        })
    }
})

const badgePoing = new Badge({
    name: 'Poing',
    img: '../../assets/img/items/badges/combat.png',
    description: 'Augmente les attaques de type Combat',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.COMBAT, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.COMBAT, 1.15)
        })
    }
})

const badgeTempete = new Badge({
    name: 'Tempête',
    img: '../../assets/img/items/badges/tempete.png',
    description: 'Augmente les attaques de type Vol',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.VOL, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.VOL, 1.15)
        })
    }
})

const badgeMental = new Badge({
    name: 'Mental',
    img: '../../assets/img/items/badges/mental.png',
    description: 'Augmente les attaques de type Psy',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.PSY, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.PSY, 1.15)
        })
    }
})

const badgeTerre = new Badge({
    name: 'Terre',
    img: '../../assets/img/items/badges/terre.png',
    description: 'Augmente les attaques de type Sol',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.SOL, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.SOLL, 1.15)
        })
    }
})

const badgeNeige = new Badge({
    name: 'Neige',
    img: '../../assets/img/items/badges/neige.png',
    description: 'Augmente les attaques de type Glace',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.GLACE, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.GLACE, 1.15)
        })
    }
})

const badgeEsprit = new Badge({
    name: 'Esprit',
    img: '../../assets/img/items/badges/esprit.png',
    description: 'Augmente les attaques de type Spectre',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.SPECTRE, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.SPECTRE, 1.15)
        })
    }
})

const badgeTemple = new Badge({
    name: 'Temple',
    img: '../../assets/img/items/badges/temple.png',
    description: 'Augmente les attaques de type Dragon',
    effect: (team) => {
        team.forEach(pkmn => {
            pkmn.increaseTypeDamage(TYPES.DRAGON, 1.15)
        })
    },
    reverseEffect: (team) => {
        team.forEach(pkmn => {
            pkmn.decreaseTypeDamage(TYPES.DRAGON, 1.15)
        })
    }
})


export const allBadges = [

    badgeForce, badgePuissance, badgeTitan,
    badgeDefense, badgeArmure, badgeForteresse,
    badgeVitalite, badgeGaia,
    badgeCritic, badgePrecision, badgeEndurance,
    badgeBrut, badgeFlamme, badgeMer, badgeJardin, badgeOrage, badgePoing,
    badgeTempete, badgeMental, badgeTerre, badgeNeige, badgeEsprit, badgeTemple
] 
