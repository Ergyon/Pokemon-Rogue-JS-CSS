import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"


const florizarre = new Pokemon({
  name: 'Florizarre',
  type: TYPES.PLANTE,
  hp: 228,
  attack: 48,
  defense: 52,
  critical: 0.58,
  moves: [allMoves.plaquage, allMoves.megasangsue, allMoves.telluriforce, allMoves.megafouet],
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
  moves: [allMoves.lamedair, allMoves.dracogriffe, allMoves.lanceflamme, allMoves.seisme],
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
  moves: [allMoves.surf, allMoves.blizzard, allMoves.aurasphere, allMoves.hydrocanon],
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
  moves: [allMoves.ventviolent, allMoves.ultralaser, allMoves.jetsable, allMoves.lamedair],
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
  moves: [allMoves.surf, allMoves.tonnerre, allMoves.seisme, allMoves.toxik],
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
  moves: [allMoves.directtoxik, allMoves.megacorne, allMoves.seisme, allMoves.lamederoc],
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
  moves: [allMoves.megasangsue, allMoves.poudredodo, allMoves.tempeteflorale, allMoves.plaquage],
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
  moves: [allMoves.machouille, allMoves.deflagration, allMoves.aeropique, allMoves.lanceflamme],
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
  moves: [allMoves.surf, allMoves.hypnose, allMoves.aurasphere, allMoves.exploforce],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
  rank: 3
})

const alakazam = new Pokemon({
  name: 'Alakazam',
  type: TYPES.PSY,
  hp: 225,
  attack: 57,
  defense: 40,
  critical: 0.84,
  moves: [allMoves.ballombre, allMoves.psyko, allMoves.ecosphere, allMoves.soin],
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
  moves: [allMoves.eboulement, allMoves.ultralaser, allMoves.lamederoc, allMoves.poingeclair],
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
  moves: [allMoves.poudredodo, allMoves.megasangsue, allMoves.lamefeuille, allMoves.plaquage],
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
  moves: [allMoves.hydrocanon, allMoves.directtoxik, allMoves.gigasangsue, allMoves.laserglace],
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
  moves: [allMoves.seisme, allMoves.lamederoc, allMoves.exploforce, allMoves.eboulement],
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
  moves: [allMoves.toxik, allMoves.seisme, allMoves.detricanon, allMoves.ballombre],
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
  moves: [allMoves.ballombre, allMoves.vibrobscur, allMoves.detricanon, allMoves.psyko],
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
  moves: [allMoves.seisme, allMoves.megacorne, allMoves.lamederoc, allMoves.tunnelier],
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
  moves: [allMoves.plaquage, allMoves.laserglace, allMoves.psyko, allMoves.exploforce],
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
  moves: [allMoves.surf, allMoves.dracorage, allMoves.blizzard, allMoves.ultralaser],
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
  moves: [allMoves.laserglace, allMoves.hydrocanon, allMoves.plaquage, allMoves.fatalfoudre],
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
  moves: [allMoves.machouille, allMoves.hydrocanon, allMoves.pouvantique, allMoves.surf],
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
  moves: [allMoves.tranche, allMoves.lamederoc, allMoves.gigasangsue, allMoves.surf],
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
  moves: [allMoves.aeropique, allMoves.dracochoc, allMoves.lamederoc, allMoves.ultralaser],
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
  moves: [allMoves.martopoing, allMoves.seisme, allMoves.deflagration, allMoves.tonnerre],
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
  moves: [allMoves.dracocharge, allMoves.fatalfoudre, allMoves.ultralaser, allMoves.laserglace],
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
