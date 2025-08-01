export const TYPES = {
    EAU: {name: "EAU" },
    FEU: {name: "FEU" },
    PLANTE: {name: "PLANTE" },
    NORMAL: {name: "NORMAL" },
    VOL: {name: "VOL" },
    PSY: {name: "PSY"},
    FOUDRE: {name: "FOUDRE" },
    ROCHE: {name: "ROCHE"},
    COMBAT: {name: "COMBAT"},
    SOL: {name: "SOL" },
    POISON: {name: "POISON" },
    TENEBRES: {name: "TENEBRES"},
    DRAGON: {name: "DRAGON"},
}

const weaknesses = {
    EAU: ["PLANTE", "FOUDRE"],
    FEU: ["EAU", "SOL"],
    PLANTE: ["FEU", "POISON", "VOL"],
    NORMAL: ["COMBAT"],
    VOL: ["FOUDRE", "ROCHE"],
    FOUDRE: ["SOL"],
    ROCHE: ["EAU", "PLANTE", "COMBAT"],
    COMBAT: ["VOL", "PSY"],
    SOL: ["PLANTE", "EAU"],
    POISON: ["PSY", "SOL"],
    TENEBRES: ["COMBAT",],
    DRAGON: ["DRAGON"]
}


export function typeAdvantage(attType, defType) {
    if (weaknesses[defType.name]?.includes(attType.name)) {
        const weaknessBonus = Math.random() * (2.2 - 1.3) + 1.3
        return weaknessBonus
    }

    if (attType.name === defType.name) {
        return 0.5
    }
    return 1
}