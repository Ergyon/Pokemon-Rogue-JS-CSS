import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from '../../moves.js'
import { TYPES } from "../../types.js"


const florizarre = new Pokemon({
  name: 'Florizarre',
  type: TYPES.PLANTE,
  hp: 228,
  attack: 48,
  defense: 52,
  critical: 0.58,
  moves: [allMoves.fouet_lianes, allMoves.tranchherbe, allMoves.dardvenin, allMoves.bombbeurk],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
  rank: 3
})

const dracaufeu = new Pokemon({
  name: 'Dracaufeu',
  type: TYPES.FEU,
  hp: 222,
  attack: 54,
  defense: 44,
  critical: 0.78,
  moves: [allMoves.flammèche, allMoves.danseflamme, allMoves.lanceflamme, allMoves.tornade],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
  rank: 3
})

const tortank = new Pokemon({
  name: 'Tortank',
  type: TYPES.EAU,
  hp: 236,
  attack: 46,
  defense: 58,
  critical: 0.5,
  moves: [allMoves.pistoletao, allMoves.morsure, allMoves.coudkrane, allMoves.hydrocanon],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
  rank: 3
})

const roucarnage = new Pokemon({
  name: 'Roucarnage',
  type: TYPES.VOL,
  hp: 208,
  attack: 47,
  defense: 40,
  critical: 0.72,
  moves: [allMoves.viveattaque, allMoves.tornade, allMoves.jetsable, allMoves.rugissement],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
  rank: 3
})

const nidoqueen = new Pokemon({
  name: 'Nidoqueen',
  type: TYPES.POISON,
  hp: 230,
  attack: 50,
  defense: 56,
  critical: 0.46,
  moves: [allMoves.dardvenin, allMoves.coudkrane, allMoves.seisme, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif",
  rank: 3
})

const nidoking = new Pokemon({
  name: 'Nidoking',
  type: TYPES.POISON,
  hp: 224,
  attack: 56,
  defense: 48,
  critical: 0.6,
  moves: [allMoves.dardvenin, allMoves.coudkrane, allMoves.seisme, allMoves.viveattaque],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif",
  rank: 3
})

const raflesia = new Pokemon({
  name: 'Rafflesia',
  type: TYPES.PLANTE,
  hp: 210,
  attack: 44,
  defense: 49,
  critical: 0.52,
  moves: [allMoves.tranchherbe, allMoves.dardvenin, allMoves.parasport, allMoves.bombbeurk],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif",
  rank: 3
})

const arcanin = new Pokemon({
  name: 'Arcanin',
  type: TYPES.FEU,
  hp: 218,
  attack: 58,
  defense: 42,
  critical: 0.76,
  moves: [allMoves.flammèche, allMoves.morsure, allMoves.danseflamme, allMoves.lanceflamme],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
  rank: 3
})

const tartard = new Pokemon({
  name: 'Tartard',
  type: TYPES.EAU,
  hp: 232,
  attack: 48,
  defense: 52,
  critical: 0.48,
  moves: [allMoves.pistoletao, allMoves.hypnose, allMoves.coudkrane, allMoves.hydroqueue],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
  rank: 3
})

const alakazam = new Pokemon({
  name: 'Alakazam',
  type: TYPES.PSY,
  hp: 198,
  attack: 57,
  defense: 35,
  critical: 0.84,
  moves: [allMoves.chocmental, allMoves.psyko, allMoves.viveattaque, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
  rank: 3
})

const mackogneur = new Pokemon({
  name: 'Mackogneur',
  type: TYPES.COMBAT,
  hp: 238,
  attack: 58,
  defense: 48,
  critical: 0.62,
  moves: [allMoves.coupdepoing, allMoves.sismique, allMoves.coudkrane, allMoves.viveattaque],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
  rank: 3
})

const empiflor = new Pokemon({
  name: 'Empiflor',
  type: TYPES.PLANTE,
  hp: 212,
  attack: 52,
  defense: 41,
  critical: 0.66,
  moves: [allMoves.fouet_lianes, allMoves.tranchherbe, allMoves.dardvenin, allMoves.parasport],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif",
  rank: 3
})

const tentacruel = new Pokemon({
  name: 'Tentacruel',
  type: TYPES.EAU,
  hp: 216,
  attack: 46,
  defense: 45,
  critical: 0.58,
  moves: [allMoves.pistoletao, allMoves.dardvenin, allMoves.hydroqueue, allMoves.viveattaque],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif",
  rank: 3
})

const grolem = new Pokemon({
  name: 'Grolem',
  type: TYPES.ROCHE,
  hp: 225,
  attack: 52,
  defense: 58,
  critical: 0.54,
  moves: [allMoves.seisme, allMoves.lanceflamme, allMoves.explosion, allMoves.coudkrane],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
  rank: 3
})

const grotadmorv = new Pokemon({
  name: 'Grotadmorv',
  type: TYPES.POISON,
  hp: 210,
  attack: 48,
  defense: 38,
  critical: 0.65,
  moves: [allMoves.bombbeurk, allMoves.charge, allMoves.morsure, allMoves.acide],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif",
  rank: 3
})

const ectoplasma = new Pokemon({
  name: 'Ectoplasma',
  type: TYPES.SPECTRE,
  hp: 200,
  attack: 44,
  defense: 40,
  critical: 0.78,
  moves: [allMoves.ballombre, allMoves.chocmental, allMoves.hypnose, allMoves.explosion],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
  rank: 3
})

const rhinoferos = new Pokemon({
  name: 'Rhinoferos',
  type: TYPES.SOL,
  hp: 238,
  attack: 56,
  defense: 52,
  critical: 0.41,
  moves: [allMoves.seisme, allMoves.coudkrane, allMoves.lameDeRoc, allMoves.choc],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif",
  rank: 3
})

const leveinard = new Pokemon({
  name: 'Leveinard',
  type: TYPES.NORMAL,
  hp: 240,
  attack: 40,
  defense: 38,
  critical: 0.42,
  moves: [allMoves.laserGlace, allMoves.psyko, allMoves.eclatMagique, allMoves.torgnoles],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif",
  rank: 3
})

const leviator = new Pokemon({
  name: 'Leviator',
  type: TYPES.EAU,
  hp: 230,
  attack: 54,
  defense: 46,
  critical: 0.62,
  moves: [allMoves.hydroqueue, allMoves.dracorage, allMoves.coudkrane, allMoves.morsure],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
  rank: 3
})

const lokhlass = new Pokemon({
  name: 'Lokhlass',
  type: TYPES.EAU,
  hp: 228,
  attack: 46,
  defense: 50,
  critical: 0.59,
  moves: [allMoves.laserGlace, allMoves.hydrocanon, allMoves.psyko, allMoves.plenitude],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
  rank: 3
})

const amonistar = new Pokemon({
  name: 'Amonistar',
  type: TYPES.ROCHE,
  hp: 210,
  attack: 50,
  defense: 58,
  critical: 0.48,
  moves: [allMoves.lameDeRoc, allMoves.hydrocanon, allMoves.seisme, allMoves.coudkrane],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif",
  rank: 3
})

const kabutops = new Pokemon({
  name: 'Kabutops',
  type: TYPES.ROCHE,
  hp: 205,
  attack: 56,
  defense: 46,
  critical: 0.74,
  moves: [allMoves.coupe, allMoves.coudkrane, allMoves.lameDeRoc, allMoves.hydroqueue],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif",
  rank: 3
})

const ptera = new Pokemon({
  name: 'Ptera',
  type: TYPES.VOL,
  hp: 215,
  attack: 54,
  defense: 44,
  critical: 0.80,
  moves: [allMoves.coudkrane, allMoves.lameDeRoc, allMoves.attaqueAile, allMoves.morsure],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
  rank: 3
})

const ronflex = new Pokemon({
  name: 'Ronflex',
  type: TYPES.NORMAL,
  hp: 240,
  attack: 56,
  defense: 50,
  critical: 0.40,
  moves: [allMoves.lameDeRoc, allMoves.seisme, allMoves.charge, allMoves.morsure],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
  rank: 3
})

const dracolosse = new Pokemon({
  name: 'Dracolosse',
  type: TYPES.DRAGON,
  hp: 235,
  attack: 58,
  defense: 54,
  critical: 0.66,
  moves: [allMoves.dracorage, allMoves.coudkrane, allMoves.lameDeRoc, allMoves.hydroqueue],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
  rank: 3
})




export const RANK_III_GEN_1 = [
  florizarre, dracaufeu, tortank, roucarnage, nidoqueen,
  nidoking, raflesia,arcanin, empiflor, tentacruel,
  tartard, alakazam, mackogneur, grolem, grotadmorv, ectoplasma, 
  rhinoferos, leveinard, leviator, lokhlass, amonistar,
  kabutops, ptera, ronflex, dracolosse
]
