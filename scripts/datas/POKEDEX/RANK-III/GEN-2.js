import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"

const mentali = new Pokemon({
    name: 'Mentali',
    type: TYPES.PSY,
    hp: 225,
    attack: 55,
    defense: 46,
    critical: 1.05,
    moves: [allMoves.psyko, allMoves.tonnerre, allMoves.plaquage, allMoves.laserglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif",
    rank: 3
})

const noctali = new Pokemon({
    name: 'Noctali',
    type: TYPES.TENEBRES,
    hp: 225,
    attack: 46,
    defense: 55,
    critical: 0.65,
    moves: [allMoves.meteores, allMoves.vibrobscur, allMoves.toxik, allMoves.ballombre],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif",
    rank: 3
})


const meganium = new Pokemon({
    name: 'Méganium',
    type: TYPES.PLANTE,
    hp: 230,
    attack: 44,
    defense: 48,
    critical: 0.55,
    moves: [allMoves.plaquage, allMoves.ecosphere, allMoves.megasangsue, allMoves.synthese],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/meganium.gif",
    rank: 3
})

const typhlosion = new Pokemon({
    name: 'Typhlosion',
    type: TYPES.FEU,
    hp: 221,
    attack: 52,
    defense: 42,
    critical: 0.75,
    moves: [allMoves.exploforce, allMoves.lanceflamme, allMoves.seisme, allMoves.canicule],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif",
    rank: 3
})

const aligatueur = new Pokemon({
    name: 'Aligatueur',
    type: TYPES.EAU,
    hp: 225,
    attack: 56,
    defense: 46,
    critical: 0.7,
    moves: [allMoves.hydrocanon, allMoves.surf, allMoves.machouille, allMoves.laserglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
    rank: 3
})

const nostenfer = new Pokemon({
    name: 'Nostenfer',
    type: TYPES.POISON,
    hp: 210,
    attack: 50,
    defense: 42,
    critical: 0.8,
    moves: [allMoves.lamedair, allMoves.hypnose, allMoves.vibrobscur, allMoves.ballombre],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/crobat.gif",
    rank: 3
})

const pharamp = new Pokemon({
    name: 'Pharamp',
    type: TYPES.FOUDRE,
    hp: 220,
    attack: 48,
    defense: 45,
    critical: 0.65,
    moves: [allMoves.tonnerre, allMoves.poingfeu, allMoves.poingglace, allMoves.fatalfoudre],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif",
    rank: 3
})

const roigada = new Pokemon({
    name: 'Roigada',
    type: TYPES.EAU,
    hp: 228,
    attack: 42,
    defense: 52,
    critical: 0.5,
    moves: [allMoves.psyko, allMoves.psykoudboul, allMoves.surf, allMoves.blizzard],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowking.gif",
    rank: 3
})

const steelix = new Pokemon({
    name: 'Steelix',
    type: TYPES.ROCHE,
    hp: 215,
    attack: 46,
    defense: 60,
    critical: 0.6,
    moves: [allMoves.telluriforce, allMoves.lamederoc, allMoves.crocseclair, allMoves.ultralaser],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif",
    rank: 3
})

const cochignon = new Pokemon({
    name: 'Cochignon',
    type: TYPES.GLACE,
    hp: 210,
    attack: 50,
    defense: 44,
    critical: 0.65,
    moves: [allMoves.laserglace, allMoves.seisme, allMoves.blizzard, allMoves.plaquage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/piloswine.gif",
    rank: 3
})

const demolosse = new Pokemon({
    name: 'Démolosse',
    type: TYPES.FEU,
    hp: 208,
    attack: 54,
    defense: 40,
    critical: 0.8,
    moves: [allMoves.deflagration, allMoves.vibrobscur, allMoves.crocsfeu, allMoves.machouille],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif",
    rank: 3
})

const hyporoi = new Pokemon({
    name: 'Hyporoi',
    type: TYPES.EAU,
    hp: 212,
    attack: 52,
    defense: 48,
    critical: 0.7,
    moves: [allMoves.hydrocanon, allMoves.dracochoc, allMoves.surf, allMoves.laserglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kingdra.gif",
    rank: 3
})

const tyranocif = new Pokemon({
    name: 'Tyranocif',
    type: TYPES.ROCHE,
    hp: 240,
    attack: 58,
    defense: 55,
    critical: 0.75,
    moves: [allMoves.lamederoc, allMoves.seisme, allMoves.vibrobscur, allMoves.dracogriffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/tyranitar.gif",
    rank: 3
})


export const RANK_III_GEN_2 = [
    mentali, noctali, meganium, typhlosion, aligatueur, nostenfer, pharamp,
    roigada, steelix, cochignon, demolosse, hyporoi, tyranocif
]