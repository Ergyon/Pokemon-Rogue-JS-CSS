import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"

const artikodin = new Pokemon({
  name: 'Artikodin',
  type: TYPES.GLACE,
  hp: 260,
  attack: 60,
  defense: 58,
  critical: 0.72,
  moves: [allMoves.ventviolent, allMoves.laserglace, allMoves.lamedair, allMoves.blizzard],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif",
  rank: 4
})

const electhor = new Pokemon({
  name: 'Electhor',
  type: TYPES.ELECTRIK,
  hp: 250,
  attack: 65,
  defense: 55,
  critical: 0.75,
  moves: [allMoves.tonnerre, allMoves.aeropique, allMoves.fatalfoudre, allMoves.ultralaser],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif",
  rank: 4
})

const sulfura = new Pokemon({
  name: 'Sulfura',
  type: TYPES.FEU,
  hp: 255,
  attack: 68,
  defense: 50,
  critical: 0.78,
  moves: [allMoves.lanceflamme, allMoves.ventviolent, allMoves.deflagration, allMoves.lamedair],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif",
  rank: 4
})

const mewtwo = new Pokemon({
  name: 'Mewtwo',
  type: TYPES.PSY,
  hp: 285,
  attack: 70,
  defense: 60,
  critical: 0.88,
  moves: [allMoves.psyko, allMoves.aurasphere, allMoves.vibrobscur, allMoves.lanceflamme],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
  rank: 4
})

const mew = new Pokemon({
  name: 'Mew',
  type: TYPES.PSY,
  hp: 270,
  attack: 65,
  defense: 55,
  critical: 0.83,
  moves: [allMoves.psyko, allMoves.dracochoc, allMoves.tonnerre, allMoves.tempeteflorale],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
  rank: 4
})

export const RANK_IV = [
  artikodin, electhor, sulfura, mewtwo, mew
]
