// Faiblesses, resistances, immunites
const TYPES_TABLE = {
    FEU:     { PLANTE: 2, INSECTE: 2, EAU: 0.5, FEU: 0.5, DRAGON: 0.5, ROCHE: 0.5 },
    EAU:     { FEU: 2, ROCHE: 2, SOL: 2, PLANTE: 0.5, EAU: 0.5, DRAGON: 0.5, FOUDRE: 0.5, },
    PLANTE:  { EAU: 2, ROCHE: 2, SOL: 2, FEU: 0.5, PLANTE: 0.5, INSECTE: 0.5, DRAGON: 0.5 },
    INSECTE: { PLANTE: 2, PSY: 2, TENEBRES: 2, COMBAT: 0.5, FEU: 0.5, POISON: 0.5, SPECTRE: 0.5, VOL: 0.5},
    NORMAL:  { ROCHE: 0.5, SPECTRE: 0},
    VOL:     { PLANTE: 2, COMBAT: 2, INSECTE: 0.5, ROCHE: 0.5, FOUDRE: 0.5 },
    FOUDRE:  { EAU: 2, VOL: 2, PLANTE: 0.5, FOUDRE: 0.5, DRAGON: 0.5, SOL: 0 },
    ROCHE:   { FEU: 2, VOL: 2, INSECTE: 0.5, COMBAT: 0.5, SOL: 0.5},
    COMBAT:  { NORMAL: 2, ROCHE: 2, TENEBRES: 2, VOL: 0.5, PSY: 0.5, POISON: 0.5, INSECTE: 0.5, SPECTRE: 0 },
    SOL:     { FEU: 2, FOUDRE: 2, POISON: 2, ROCHE: 2, PLANTE: 0.5, INSECTE: 0.5, VOL: 0 },
    GLACE:   {PLANTE: 2, DRAGON: 2, VOL: 2, SOL: 2, EAU: 0.5, FEU: 0.5, GLACE: 0.5},
    POISON:  { PLANTE: 2, SOL: 0.5, POISON: 0.5, ROCHE: 0.5, SOL: 0.5, SPECTRE: 0.5},
    PSY:     { COMBAT: 2, POISON: 2, PSY: 0.5, TENEBRES: 0 },
    TENEBRES:{ PSY: 2, SPECTRE: 2, TENEBRES: 0.5, COMBAT: 0.5},
    SPECTRE: { SPECTRE: 2, PSY: 2, TENEBRES: 0.5, NORMAL: 0 },
    DRAGON:  { DRAGON: 2 }
}


// degats en fonction du type
export function typeAdvantage(attType, defType) {
    const attack = attType
    const defense = defType

    const multiplier = TYPES_TABLE[attack]?.[defense]

    if (multiplier === 2) {
        const bonus = Math.random() * (1.5 - 1.25) + 1.25
        return {bonus, base: 2}
    }

    return {bonus: multiplier ?? 1, base: multiplier ?? 1}
}
