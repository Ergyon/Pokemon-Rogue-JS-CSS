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
    SPECTRE: {name: "SPECTRE"},
    DRAGON: {name: "DRAGON"}
}

// faiblesses
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
    TENEBRES: ["COMBAT"],
    SPECTRE: ["SPECTRE", "TENEBRES"],
    DRAGON: ["DRAGON"]
}

// resistances
const resistances = {
    EAU: ["EAU", "FEU"],
    FEU: ["FEU", "PLANTE"],
    PLANTE: ["PLANTE", "EAU", "SOL", "FOUDRE"],
    NORMAL: [""],
    VOL: ["COMBAT", "PLANTE", "SOL"],
    FOUDRE: ["FOUDRE", "VOL"],
    ROCHE: ["NORMAL", "FEU", "POISON", "VOL"],
    COMBAT: ["ROCHE", "TENEBRES"],
    SOL: ["POISON", "ROCHE"],
    POISON: ["COMBAT", "PLANTE", "POISON"],
    TENEBRES: ["TENEBRES"],
    SPECTRE: ["POISON"],
    DRAGON: ["EAU", "FOUDRE", "FEU", "PLANTE"]
}

// immunites
const immunities = {
    VOL: ["SOL"],
    SOL: ["FOUDRE"],
    TENEBRES: ["PSY"],
    SPECTRE: ["COMBAT", "NORMAL"]
}

export function typeAdvantage(attType, defType) {
    if (weaknesses[defType.name]?.includes(attType.name)) {
        const weaknessBonus = Math.random() * (2 - 1.5) + 1.5
        return weaknessBonus
    } 
    else if (resistances[defType.name]?.includes(attType.name)) {
        return 0.5
    }
    else if (immunities[defType.name]?.includes(attType.name)) {
        return 0
    }
    return 1
}

// function getTypeMultiplier(attackType, targetType) {
//     const table = {
//         FEU: { PLANTE: 2, EAU: 0.5 },
//         EAU: { FEU: 2, PLANTE: 0.5 },
//         PLANTE: { EAU: 2, FEU: 0.5 },
//         // etc.
//     }
//     return (table[attackType]?.[targetType] ?? 1)
// }
