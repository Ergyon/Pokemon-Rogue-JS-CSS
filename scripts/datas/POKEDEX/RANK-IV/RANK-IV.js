import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"

const artikodin = new Pokemon({
  name: 'Artikodin',
  type: TYPES.GLACE,
  hp: 250,
  attack: 55,
  defense: 45,
  critical: 0.72,
  moves: [allMoves.ventviolent, allMoves.laserglace, allMoves.lamedair, allMoves.blizzard],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif",
  rank: 4
})

const electhor = new Pokemon({
  name: 'Electhor',
  type: TYPES.FOUDRE,
  hp: 250,
  attack: 55,
  defense: 45,
  critical: 0.75,
  moves: [allMoves.tonnerre, allMoves.aeropique, allMoves.fatalfoudre, allMoves.ultralaser],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif",
  rank: 4
})

const sulfura = new Pokemon({
  name: 'Sulfura',
  type: TYPES.FEU,
  hp: 250,
  attack: 55,
  defense: 45,
  critical: 0.78,
  moves: [allMoves.lanceflamme, allMoves.ventviolent, allMoves.deflagration, allMoves.lamedair],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif",
  rank: 4
})

const mewtwo = new Pokemon({
  name: 'Mewtwo',
  type: TYPES.PSY,
  hp: 285,
  attack: 65,
  defense: 55,
  critical: 0.88,
  moves: [allMoves.psyko, allMoves.aurasphere, allMoves.vibrobscur, allMoves.lanceflamme],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
  rank: 4
})

const mew = new Pokemon({
  name: 'Mew',
  type: TYPES.PSY,
  hp: 310,
  attack: 60,
  defense: 55,
  critical: 0.83,
  moves: [allMoves.psyko, allMoves.dracochoc, allMoves.tonnerre, allMoves.tempeteflorale],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
  rank: 4
})

const raikou = new Pokemon({
  name: 'Raikou',
  type: TYPES.FOUDRE,
  hp: 260,
  attack: 57,
  defense: 48,
  critical: 0.6,
  moves: [allMoves.tonnerre, allMoves.fatalfoudre, allMoves.aurasphere, allMoves.machouille],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/raikou.gif",
  rank: 4
})

const entei = new Pokemon({
  name: 'Entei',
  type: TYPES.FEU,
  hp: 260,
  attack: 57,
  defense: 48,
  critical: 0.4,
  moves: [allMoves.lanceflamme, allMoves.lamederoc, allMoves.surchauffe, allMoves.machouille],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/entei.gif",
  rank: 4
})

const suicune = new Pokemon({
  name: 'Suicune',
  type: TYPES.EAU,
  hp: 260,
  attack: 57,
  defense: 48,
  critical: 0.75,
  moves: [allMoves.surf, allMoves.blizzard, allMoves.machouille, allMoves.laserglace],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/suicune.gif",
  rank: 4
})

const lugia = new Pokemon({
  name: 'Lugia',
  type: TYPES.PSY,
  hp: 280,
  attack: 60,
  defense: 50,
  critical: 0.9,
  moves: [allMoves.psyko, allMoves.dracocharge, allMoves.hydrocanon, allMoves.aeroblast],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif",
  rank: 4
})

const hoho = new Pokemon({
  name: 'Ho-oh',
  type: TYPES.FEU,
  hp: 280,
  attack: 60,
  defense: 50,
  critical: 0.7,
  moves: [allMoves.deflagration, allMoves.tonnerre, allMoves.ventviolent, allMoves.surchauffe],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif",
  rank: 4
})

const celebi = new Pokemon({
  name: 'Celebi',
  type: TYPES.PLANTE,
  hp: 305,
  attack: 65,
  defense: 60,
  critical: 0.5,
  moves: [allMoves.tempeteverte, allMoves.psyko, allMoves.ecosphere, allMoves.ballombre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/celebi.gif",
  rank: 4
})

export const RANK_IV = [
  artikodin, electhor, sulfura, mewtwo, mew, raikou, entei, suicune,
  lugia, hoho, celebi
]
