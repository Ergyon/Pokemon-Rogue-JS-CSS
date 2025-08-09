import { MOVES_EAU } from "./Eau.js"
import { MOVES_FEU } from "./Feu.js"
import { MOVES_FOUDRE } from "./Foudre.js"
import { MOVES_NORMAL } from "./Normal.js"
import { MOVES_PLANTE } from "./Plante.js"
import { MOVES_POISON } from "./Poison.js"
import { MOVES_PSY } from "./Psy.js"
import { MOVES_ROCHE } from "./Roche.js"
import { MOVES_SOL } from "./Sol.js"
import { MOVES_SPECTRE } from "./Spectre.js"
import { MOVES_TENEBRES } from "./Tenebres.js"
import { MOVES_VOL } from "./Vol.js"

export const allMoves = {
    ...MOVES_NORMAL,
    ...MOVES_EAU,
    ...MOVES_FEU,
    ...MOVES_PLANTE,
    ...MOVES_FOUDRE,
    ...MOVES_POISON,
    ...MOVES_SOL,
    ...MOVES_VOL,
    ...MOVES_ROCHE,
    ...MOVES_SPECTRE,
    ...MOVES_TENEBRES,
    ...MOVES_PSY
}