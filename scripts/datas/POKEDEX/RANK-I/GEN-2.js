import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"


const germignon = new Pokemon({
    name: 'Germignon',
    type: TYPES.PLANTE,
    hp: 126,
    attack: 15,
    defense: 16,
    critical: 0.74,
    moves: [allMoves.fouetliane, allMoves.charge, allMoves.rugissement, allMoves.tranchherb],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif",
    rank: 1
})

const hericendre = new Pokemon({
    name: 'Héricendre',
    type: TYPES.FEU,
    hp: 118,
    attack: 17,
    defense: 14,
    critical: 0.91,
    moves: [allMoves.flammeche, allMoves.viveattaque, allMoves.griffe, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif",
    rank: 1
})

const kaiminus = new Pokemon({
    name: 'Kaiminus',
    type: TYPES.EAU,
    hp: 124,
    attack: 18,
    defense: 15,
    critical: 0.82,
    moves: [allMoves.pistoletao, allMoves.griffe, allMoves.morsure, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif",
    rank: 1
})

const fouinette = new Pokemon({
    name: 'Fouinette',
    type: TYPES.NORMAL,
    hp: 115,
    attack: 14,
    defense: 13,
    critical: 0.68,
    moves: [allMoves.viveattaque, allMoves.rugissement, allMoves.grozyeux, allMoves.morsure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sentret.gif",
    rank: 1
})

const hoothoot = new Pokemon({
    name: 'Hoothoot',
    type: TYPES.VOL,
    hp: 122,
    attack: 13,
    defense: 14,
    critical: 0.59,
    moves: [allMoves.picpic, allMoves.rugissement, allMoves.hypnose, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/hoothoot.gif",
    rank: 1
})

const coxy = new Pokemon({
    name: 'Coxy',
    type: TYPES.INSECTE,
    hp: 112,
    attack: 11,
    defense: 12,
    critical: 0.77,
    moves: [allMoves.griffe, allMoves.rugissement, allMoves.charge, allMoves.jetsable],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ledyba.gif",
    rank: 1
})

const mimigal = new Pokemon({
    name: 'Mimigal',
    type: TYPES.INSECTE,
    hp: 119,
    attack: 12,
    defense: 13,
    critical: 0.88,
    moves: [allMoves.morsure, allMoves.paraspore, allMoves.dardvenin, allMoves.armure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/spinarak.gif",
    rank: 1
})

const loupio = new Pokemon({
    name: 'Loupio',
    type: TYPES.FOUDRE,
    hp: 128,
    attack: 16,
    defense: 15,
    critical: 0.84,
    moves: [allMoves.etincelle, allMoves.pistoletao, allMoves.charge, allMoves.cageeclair],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/chinchou.gif",
    rank: 1
})

const togepi = new Pokemon({
    name: 'Togepi',
    type: TYPES.NORMAL,
    hp: 114,
    attack: 12,
    defense: 14,
    critical: 0.66,
    moves: [allMoves.charme, allMoves.coupdboule, allMoves.grozyeux, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/togepi.gif",
    rank: 1
})

const natu = new Pokemon({
    name: 'Natu',
    type: TYPES.PSY,
    hp: 118,
    attack: 13,
    defense: 12,
    critical: 0.78,
    moves: [allMoves.chocmental, allMoves.picpic, allMoves.viveattaque, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/natu.gif",
    rank: 1
})

const watwat = new Pokemon({
    name: 'Watwat',
    type: TYPES.FOUDRE,
    hp: 123,
    attack: 14,
    defense: 13,
    critical: 0.69,
    moves: [allMoves.etincelle, allMoves.charge, allMoves.cageeclair, allMoves.boularmure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mareep.gif",
    rank: 1
})

const joliflor = new Pokemon({
    name: 'Joliflor',
    type: TYPES.PLANTE,
    hp: 129,
    attack: 15,
    defense: 16,
    critical: 0.81,
    moves: [allMoves.fouetliane, allMoves.poudredodo, allMoves.paraspore, allMoves.volvie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellossom.gif",
    rank: 1
})

const maril = new Pokemon({
    name: 'Marill',
    type: TYPES.EAU,
    hp: 120,
    attack: 12,
    defense: 14,
    critical: 0.72,
    moves: [allMoves.boularmure, allMoves.ecumes, allMoves.rugissement, allMoves.bullesdo],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/marill.gif",
    rank: 1
})

const granivol = new Pokemon({
    name: 'Granivol',
    type: TYPES.PLANTE,
    hp: 117,
    attack: 11,
    defense: 12,
    critical: 0.76,
    moves: [allMoves.croissance, allMoves.volvie, allMoves.rugissement, allMoves.tranchherb],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/hoppip.gif",
    rank: 1
})

const capumain = new Pokemon({
    name: 'Capumain',
    type: TYPES.NORMAL,
    hp: 121,
    attack: 17,
    defense: 15,
    critical: 0.98,
    moves: [allMoves.charge, allMoves.coupdboule, allMoves.grozyeux, allMoves.jetsable],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/aipom.gif",
    rank: 1
})

const tournegrin = new Pokemon({
    name: 'Tournegrin',
    type: TYPES.PLANTE,
    hp: 128,
    attack: 14,
    defense: 18,
    critical: 0.74,
    moves: [allMoves.tranchherb, allMoves.charge, allMoves.rugissement, allMoves.croissance],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sunkern.gif",
    rank: 1
})

const yanma = new Pokemon({
    name: 'Yanma',
    type: TYPES.INSECTE,
    hp: 130,
    attack: 16,
    defense: 14,
    critical: 1.02,
    moves: [allMoves.viveattaque, allMoves.dardvenin, allMoves.grozyeux, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/yanma.gif",
    rank: 1
})

const axoloto = new Pokemon({
    name: 'Axoloto',
    type: TYPES.EAU,
    hp: 122,
    attack: 12,
    defense: 16,
    critical: 0.85,
    moves: [allMoves.pistoletao, allMoves.coupdboue, allMoves.griffe, allMoves.armure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif",
    rank: 1
})

const girafarig = new Pokemon({
    name: 'Girafarig',
    type: TYPES.PSY,
    hp: 129,
    attack: 18,
    defense: 17,
    critical: 0.89,
    moves: [allMoves.chocmental, allMoves.charge, allMoves.rugissement, allMoves.viveattaque],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/girafarig.gif",
    rank: 1
})

const pomdepik = new Pokemon({
    name: 'Pomdepik',
    type: TYPES.INSECTE,
    hp: 127,
    attack: 14,
    defense: 20,
    critical: 0.66,
    moves: [allMoves.charge, allMoves.picpic, allMoves.dardvenin, allMoves.armure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pineco.gif",
    rank: 1
})

const insolourdo = new Pokemon({
    name: 'Insolourdo',
    type: TYPES.NORMAL,
    hp: 133,
    attack: 15,
    defense: 14,
    critical: 0.88,
    moves: [allMoves.charge, allMoves.coupdboue, allMoves.boularmure, allMoves.pouvantique],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dunsparce.gif",
    rank: 1
})

const snubull = new Pokemon({
    name: 'Snubull',
    type: TYPES.NORMAL,
    hp: 119,
    attack: 17,
    defense: 15,
    critical: 0.77,
    moves: [allMoves.charme, allMoves.charge, allMoves.morsure, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/snubbull.gif",
    rank: 1
})

const qwilfish = new Pokemon({
    name: 'Qwilfish',
    type: TYPES.EAU,
    hp: 120,
    attack: 19,
    defense: 17,
    critical: 0.96,
    moves: [allMoves.pistoletao, allMoves.dardvenin, allMoves.grozyeux, allMoves.ecumes],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/qwilfish.gif",
    rank: 1
})

const caratroc = new Pokemon({
    name: 'Caratroc',
    type: TYPES.INSECTE,
    hp: 125,
    attack: 13,
    defense: 20,
    critical: 0.73,
    moves: [allMoves.charge, allMoves.jetpierre, allMoves.armure, allMoves.dardvenin],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/shuckle.gif",
    rank: 1
})

const teddiursa = new Pokemon({
    name: 'Teddiursa',
    type: TYPES.NORMAL,
    hp: 129,
    attack: 18,
    defense: 14,
    critical: 0.82,
    moves: [allMoves.charge, allMoves.armure, allMoves.griffe, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/teddiursa.gif",
    rank: 1
})

const limagma = new Pokemon({
    name: 'Limagma',
    type: TYPES.FEU,
    hp: 120,
    attack: 14,
    defense: 13,
    critical: 0.67,
    moves: [allMoves.flammeche, allMoves.boularmure, allMoves.charge, allMoves.brouillard],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/slugma.gif",
    rank: 1
})

const marcacrin = new Pokemon({
    name: 'Marcacrin',
    type: TYPES.GLACE,
    hp: 126,
    attack: 16,
    defense: 15,
    critical: 0.59,
    moves: [allMoves.rugissement, allMoves.charge, allMoves.morsure, allMoves.poudreuse],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/swinub.gif",
    rank: 1
})

const corayon = new Pokemon({
    name: 'Corayon',
    type: TYPES.EAU,
    hp: 122,
    attack: 14,
    defense: 17,
    critical: 0.74,
    moves: [allMoves.bullesdo, allMoves.armure, allMoves.ecumes, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/corsola.gif",
    rank: 1
})

const remoraid = new Pokemon({
    name: 'Remoraid',
    type: TYPES.EAU,
    hp: 118,
    attack: 17,
    defense: 13,
    critical: 0.9,
    moves: [allMoves.ecumes, allMoves.rayoncharge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/remoraid.gif",
    rank: 1
})

const malosse = new Pokemon({
    name: 'Malosse',
    type: TYPES.FEU,
    hp: 124,
    attack: 19,
    defense: 12,
    critical: 0.85,
    moves: [allMoves.flammeche, allMoves.morsure, allMoves.viveattaque, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/houndour.gif",
    rank: 1
})

const phanpy = new Pokemon({
    name: 'Phanpy',
    type: TYPES.SOL,
    hp: 132,
    attack: 18,
    defense: 16,
    critical: 0.64,
    moves: [allMoves.charge, allMoves.jetsable, allMoves.rugissement, allMoves.roulade],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/phanpy.gif",
    rank: 1
})

const cerfrousse = new Pokemon({
    name: 'Cerfrousse',
    type: TYPES.NORMAL,
    hp: 125,
    attack: 20,
    defense: 14,
    critical: 0.71,
    moves: [allMoves.charge, allMoves.viveattaque, allMoves.grozyeux, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/stantler.gif",
    rank: 1
})

const embrylex = new Pokemon({
    name: 'Embrylex',
    type: TYPES.SOL,
    hp: 130,
    attack: 19,
    defense: 15,
    critical: 0.77,
    moves: [allMoves.morsure, allMoves.jetsable, allMoves.jetpierre, allMoves.coupdboue],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/larvitar.gif",
    rank: 1
})





export const RANK_I_GEN_2 = [
    germignon, hericendre, kaiminus, fouinette, hoothoot, coxy, 
    mimigal, loupio, togepi, natu, watwat, joliflor, maril, 
    granivol,  capumain, tournegrin, yanma, axoloto, 
    girafarig, pomdepik, insolourdo, snubull, qwilfish, 
    caratroc, teddiursa, limagma, marcacrin, corayon, 
    remoraid, malosse, phanpy, cerfrousse, embrylex
]
