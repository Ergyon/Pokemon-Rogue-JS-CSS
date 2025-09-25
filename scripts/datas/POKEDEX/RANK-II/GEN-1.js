import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"

// PLANTE 
const herbizarre = new Pokemon({
  name: 'Herbizarre',
  type: TYPES.PLANTE,
  hp: 168,
  attack: 28,
  defense: 30,
  critical: 0.72,
  moves: [allMoves.poudredodo, allMoves.tranchherb, allMoves.gigasangsue, allMoves.charge],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
  rank: 2
})

// FEU (
const reptincel = new Pokemon({
  name: 'Reptincel',
  type: TYPES.FEU,
  hp: 165,
  attack: 32,
  defense: 26,
  critical: 0.88,
  moves: [allMoves.flammeche, allMoves.rugissement, allMoves.tranche, allMoves.crocsfeu],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
  rank: 2
})

// EAU 
const carabaffe = new Pokemon({
  name: 'Carabaffe',
  type: TYPES.EAU,
  hp: 176,
  attack: 27,
  defense: 33,
  critical: 0.6,
  moves: [allMoves.pistoletao, allMoves.plaquage, allMoves.morsure, allMoves.vibraqua],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
  rank: 2
})

// INSECTE 
const papilusion = new Pokemon({
  name: 'Papilusion',
  type: TYPES.INSECTE,
  hp: 150,
  attack: 22,
  defense: 35,
  critical: 0.45,
  moves: [allMoves.poudredodo, allMoves.cruailes, allMoves.rafalepsy, allMoves.gigasangsue],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
  rank: 2
})

// VOL 
const roucoups = new Pokemon({
  name: 'Roucoups',
  type: TYPES.VOL,
  hp: 163,
  attack: 26,
  defense: 27,
  critical: 0.74,
  moves: [allMoves.viveattaque, allMoves.jetsable, allMoves.lamedair, allMoves.tornade],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
  rank: 2
})

// NORMAL 
const rattatac = new Pokemon({
  name: 'Rattatac',
  type: TYPES.NORMAL,
  hp: 160,
  attack: 34,
  defense: 24,
  critical: 0.9,
  moves: [allMoves.machouille, allMoves.viveattaque, allMoves.crocmort, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
  rank: 2
})

// VOL 
const rapasdepic = new Pokemon({
  name: 'Rapasdepic',
  type: TYPES.VOL,
  hp: 170,
  attack: 31,
  defense: 25,
  critical: 0.8,
  moves: [allMoves.viveattaque, allMoves.tornade, allMoves.cruailes, allMoves.jetsable],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
  rank: 2
})

// POISON 
const arbok = new Pokemon({
  name: 'Arbok',
  type: TYPES.POISON,
  hp: 168,
  attack: 30,
  defense: 26,
  critical: 0.78,
  moves: [allMoves.bombeurk, allMoves.morsure, allMoves.grozyeux, allMoves.plaquage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
  rank: 2
})

// ELECTRIQUE 
const raichu = new Pokemon({
  name: 'Raichu',
  type: TYPES.FOUDRE,
  hp: 162,
  attack: 33,
  defense: 24,
  critical: 0.92,
  moves: [allMoves.plaquage, allMoves.cageeclair, allMoves.tonnerre, allMoves.charme],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
  rank: 2
})

// SOL 
const sablaireau = new Pokemon({
  name: 'Sablaireau',
  type: TYPES.SOL,
  hp: 175,
  attack: 29,
  defense: 32,
  critical: 0.62,
  moves: [allMoves.jetsable, allMoves.tranche, allMoves.fauxchage, allMoves.pietisol],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
  rank: 2
})


const nidorina = new Pokemon({
  name: 'Nidorina',
  type: TYPES.POISON,
  hp: 172,
  attack: 27,
  defense: 28,
  critical: 0.65,
  moves: [allMoves.detritus, allMoves.machouille, allMoves.grozyeux, allMoves.tranche],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif",
  rank: 2
})

const nidorino = new Pokemon({
  name: 'Nidorino',
  type: TYPES.POISON,
  hp: 168,
  attack: 30,
  defense: 27,
  critical: 0.7,
  moves: [allMoves.tranche, allMoves.plaquage, allMoves.machouille, allMoves.dardvenin],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif",
  rank: 2
})

const melodelfe = new Pokemon({
  name: 'Mélodelfe',
  type: TYPES.NORMAL,
  hp: 178,
  attack: 29,
  defense: 31,
  critical: 0.58,
  moves: [allMoves.cassebrique, allMoves.berceuse, allMoves.plaquage, allMoves.ballombre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
  rank: 2
})

const feunard = new Pokemon({
  name: 'Feunard',
  type: TYPES.FEU,
  hp: 170,
  attack: 34,
  defense: 29,
  critical: 0.82,
  moves: [allMoves.crocsfeu, allMoves.jetsable, allMoves.flammeche, allMoves.aboiement],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
  rank: 2
})

const grodoudou = new Pokemon({
  name: 'Grodoudou',
  type: TYPES.NORMAL,
  hp: 180,
  attack: 26,
  defense: 24,
  critical: 0.6,
  moves: [allMoves.plaquage, allMoves.berceuse, allMoves.charme, allMoves.ballombre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif",
  rank: 2
})

const nosferalto = new Pokemon({
  name: 'Nosferalto',
  type: TYPES.POISON,
  hp: 165,
  attack: 28,
  defense: 23,
  critical: 0.75,
  moves: [allMoves.ondefolie, allMoves.machouille, allMoves.ballombre, allMoves.cruailes],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif",
  rank: 2
})

const ortide = new Pokemon({
  name: 'Ortide',
  type: TYPES.PLANTE,
  hp: 162,
  attack: 25,
  defense: 27,
  critical: 0.62,
  moves: [allMoves.bombeurk, allMoves.paraspore, allMoves.gigasangsue, allMoves.tranchherb],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif",
  rank: 2
})

const parasect = new Pokemon({
  name: 'Parasect',
  type: TYPES.INSECTE,
  hp: 172,
  attack: 32,
  defense: 28,
  critical: 0.7,
  moves: [allMoves.paraspore, allMoves.poudretoxic, allMoves.tranche, allMoves.plaiecroix],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif",
  rank: 2
})

const aeromite = new Pokemon({
  name: 'Aéromite',
  type: TYPES.POISON,
  hp: 160,
  attack: 27,
  defense: 25,
  critical: 0.77,
  moves: [allMoves.cruailes, allMoves.rafalepsy, allMoves.poudredodo, allMoves.chocmental],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif",
  rank: 2
})

const persian = new Pokemon({
  name: 'Persian',
  type: TYPES.NORMAL,
  hp: 168,
  attack: 33,
  defense: 26,
  critical: 0.85,
  moves: [allMoves.viveattaque, allMoves.tranche, allMoves.machouille, allMoves.rugissement],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
  rank: 2
})

const akwakwak = new Pokemon({
  name: 'Akwakwak',
  type: TYPES.EAU,
  hp: 176,
  attack: 31,
  defense: 29,
  critical: 0.78,
  moves: [allMoves.ondefolie, allMoves.psykoudboul, allMoves.tranche, allMoves.vibraqua],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif",
  rank: 2
})

const colossinge = new Pokemon({
  name: 'Colossinge',
  type: TYPES.COMBAT,
  hp: 170,
  attack: 36,
  defense: 24,
  critical: 0.92,
  moves: [allMoves.plaquage, allMoves.grozyeux, allMoves.poingkarate, allMoves.pietisol],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif",
  rank: 2
})

const tetarte = new Pokemon({
  name: 'Têtarte',
  type: TYPES.EAU,
  hp: 165,
  attack: 28,
  defense: 26,
  critical: 0.64,
  moves: [allMoves.coupdboule, allMoves.hypnose, allMoves.cassebrique, allMoves.vibraqua],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif",
  rank: 2
})

const kadabra = new Pokemon({
  name: 'Kadabra',
  type: TYPES.PSY,
  hp: 158,
  attack: 24,
  defense: 21,
  critical: 0.88,
  moves: [allMoves.chocmental, allMoves.rafalepsy, allMoves.hypnose, allMoves.ballombre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif",
  rank: 2
})

const machopeur = new Pokemon({
  name: 'Machopeur',
  type: TYPES.COMBAT,
  hp: 180,
  attack: 35,
  defense: 28,
  critical: 0.69,
  moves: [allMoves.poingkarate, allMoves.plaquage, allMoves.poingfeu, allMoves.balayage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif",
  rank: 2
})

const galopa = new Pokemon({
  name: 'Galopa',
  type: TYPES.FEU,
  hp: 174,
  attack: 34,
  defense: 27,
  critical: 0.84,
  moves: [allMoves.viveattaque, allMoves.rouedefeu, allMoves.plaquage, allMoves.flammeche],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif",
  rank: 2
})

const flagadoss = new Pokemon({
  name: 'Flagadoss',
  type: TYPES.EAU,
  hp: 178,
  attack: 27,
  defense: 35,
  critical: 0.52,
  moves: [allMoves.pistoletao, allMoves.ondefolie, allMoves.rafalepsy, allMoves.vibraqua],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
  rank: 2
})

const magneton = new Pokemon({
  name: 'Magnéton',
  type: TYPES.FOUDRE,
  hp: 160,
  attack: 32,
  defense: 30,
  critical: 0.6,
  moves: [allMoves.boularmure, allMoves.cageeclair, allMoves.ondefolie, allMoves.tonnerre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif",
  rank: 2
})

const dodrio = new Pokemon({
  name: 'Dodrio',
  type: TYPES.VOL,
  hp: 172,
  attack: 35,
  defense: 25,
  critical: 0.9,
  moves: [allMoves.viveattaque, allMoves.lamedair, allMoves.tornade, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif",
  rank: 2
})

const lamantine = new Pokemon({
  name: 'Lamantine',
  type: TYPES.GLACE,
  hp: 175,
  attack: 29,
  defense: 27,
  critical: 0.61,
  moves: [allMoves.ondeboreale, allMoves.vibraqua, allMoves.plaquage, allMoves.coupdboule],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif",
  rank: 2
})

const crustabri = new Pokemon({
  name: 'Crustabri',
  type: TYPES.GLACE,
  hp: 165,
  attack: 33,
  defense: 35,
  critical: 0.55,
  moves: [allMoves.pistoletao, allMoves.ondeboreale, allMoves.boularmure, allMoves.meteores],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif",
  rank: 2
})

const spectrum = new Pokemon({
  name: 'Spectrum',
  type: TYPES.SPECTRE,
  hp: 162,
  attack: 28,
  defense: 25,
  critical: 0.8,
  moves: [allMoves.hypnose, allMoves.tonnerre, allMoves.vibrobscur, allMoves.griffombre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
  rank: 2
})

const onix = new Pokemon({
  name: 'Onix',
  type: TYPES.ROCHE,
  hp: 150,
  attack: 22,
  defense: 35,
  critical: 0.45,
  moves: [allMoves.armure, allMoves.pouvantique, allMoves.eboulement, allMoves.pietisol],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif",
  rank: 2
})

const hypnomade = new Pokemon({
  name: 'Hypnomade',
  type: TYPES.PSY,
  hp: 170,
  attack: 26,
  defense: 28,
  critical: 0.66,
  moves: [allMoves.hypnose, allMoves.psykoudboul, allMoves.plaquage, allMoves.rafalepsy],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif",
  rank: 2
})

const kraboss = new Pokemon({
  name: 'Krabboss',
  type: TYPES.EAU,
  hp: 165,
  attack: 37,
  defense: 25,
  critical: 0.82,
  moves: [allMoves.tranche, allMoves.guillotine, allMoves.vibraqua, allMoves.plaiecroix],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif",
  rank: 2
})

const electrode = new Pokemon({
  name: 'Electrode',
  type: TYPES.FOUDRE,
  hp: 160,
  attack: 30,
  defense: 27,
  critical: 1.1,
  moves: [allMoves.roulade, allMoves.cageeclair, allMoves.tonnerre, allMoves.meteores],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif",
  rank: 2
})

const noadkoko = new Pokemon({
  name: 'Noadkoko',
  type: TYPES.PLANTE,
  hp: 175,
  attack: 32,
  defense: 30,
  critical: 0.54,
  moves: [allMoves.rafalepsy, allMoves.gigasangsue, allMoves.plaquage, allMoves.synthese],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif",
  rank: 2
})

const ossatueur = new Pokemon({
  name: 'Ossatueur',
  type: TYPES.SOL,
  hp: 172,
  attack: 34,
  defense: 33,
  critical: 0.58,
  moves: [allMoves.fauxchage, allMoves.pietisol, allMoves.cassebrique, allMoves.eboulement],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif",
  rank: 2
})

const kicklee = new Pokemon({
  name: 'Kicklee',
  type: TYPES.COMBAT,
  hp: 164,
  attack: 36,
  defense: 24,
  critical: 0.85,
  moves: [allMoves.cassebrique, allMoves.piedbruleur, allMoves.balayage, allMoves.ultimawashi],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif",
  rank: 2
})

const tygnon = new Pokemon({
  name: 'Tygnon',
  type: TYPES.COMBAT,
  hp: 162,
  attack: 35,
  defense: 26,
  critical: 0.9,
  moves: [allMoves.poingkarate, allMoves.poingfeu, allMoves.poingglace, allMoves.poingeclair],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
  rank: 2
})

const excelangue = new Pokemon({
  name: 'Excelangue',
  type: TYPES.NORMAL,
  hp: 178,
  attack: 27,
  defense: 29,
  critical: 0.5,
  moves: [allMoves.roulade, allMoves.psykoudboul, allMoves.poingglace, allMoves.pietisol],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif",
  rank: 2
})

const smogogo = new Pokemon({
  name: 'Smogogo',
  type: TYPES.POISON,
  hp: 166,
  attack: 30,
  defense: 34,
  critical: 0.6,
  moves: [allMoves.brouillard, allMoves.detritus, allMoves.gaztoxik, allMoves.bombeurk],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif",
  rank: 2
})

const rhinocorne = new Pokemon({
  name: 'Rhinocorne',
  type: TYPES.SOL,
  hp: 180,
  attack: 33,
  defense: 32,
  critical: 0.47,
  moves: [allMoves.koudkorne, allMoves.pietisol, allMoves.eboulement, allMoves.tunnelier],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif",
  rank: 2
})

const kangourex = new Pokemon({
  name: 'Kangourex',
  type: TYPES.NORMAL,
  hp: 177,
  attack: 34,
  defense: 30,
  critical: 0.72,
  moves: [allMoves.machouille, allMoves.coupdboule, allMoves.griffombre, allMoves.cassebrique],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif",
  rank: 2
})

const hypocean = new Pokemon({
  name: 'Hypocéan',
  type: TYPES.EAU,
  hp: 168,
  attack: 29,
  defense: 28,
  critical: 0.64,
  moves: [allMoves.dracosouffle, allMoves.vibraqua, allMoves.ventglace, allMoves.meteores],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif",
  rank: 2
})

const poissoroy = new Pokemon({
  name: 'Poissoroy',
  type: TYPES.EAU,
  hp: 168,
  attack: 33,
  defense: 26,
  critical: 0.78,
  moves: [allMoves.pistoletao, allMoves.koudkorne, allMoves.vibraqua, allMoves.picpic],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif",
  rank: 2
})

const mrmime = new Pokemon({
  name: 'M. Mime',
  type: TYPES.PSY,
  hp: 160,
  attack: 27,
  defense: 28,
  critical: 0.72,
  moves: [allMoves.poingeclair, allMoves.psykoudboul, allMoves.ballombre, allMoves.hypnose],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif",
  rank: 2
})

const insecateur = new Pokemon({
  name: 'Insécateur',
  type: TYPES.INSECTE,
  hp: 170,
  attack: 36,
  defense: 24,
  critical: 0.9,
  moves: [allMoves.lamedair, allMoves.tranche, allMoves.plaiecroix, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
  rank: 2
})

const lipoutou = new Pokemon({
  name: 'Lippoutou',
  type: TYPES.GLACE,
  hp: 162,
  attack: 25,
  defense: 22,
  critical: 0.84,
  moves: [allMoves.poudreuse, allMoves.cassebrique, allMoves.chocmental, allMoves.berceuse],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif",
  rank: 2
})

const elektek = new Pokemon({
  name: 'Elektek',
  type: TYPES.FOUDRE,
  hp: 168,
  attack: 34,
  defense: 25,
  critical: 0.88,
  moves: [allMoves.poingeclair, allMoves.cageeclair, allMoves.poingfeu, allMoves.balayage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif",
  rank: 2
})

const magmar = new Pokemon({
  name: 'Magmar',
  type: TYPES.FEU,
  hp: 170,
  attack: 35,
  defense: 24,
  critical: 0.82,
  moves: [allMoves.poingfeu, allMoves.plaquage, allMoves.poingeclair, allMoves.grozyeux],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif",
  rank: 2
})

const scarabrute = new Pokemon({
  name: 'Scarabrute',
  type: TYPES.INSECTE,
  hp: 175,
  attack: 37,
  defense: 28,
  critical: 0.76,
  moves: [allMoves.plaiecroix, allMoves.guillotine, allMoves.eboulement, allMoves.fauxchage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif",
  rank: 2
})

const tauros = new Pokemon({
  name: 'Tauros',
  type: TYPES.NORMAL,
  hp: 176,
  attack: 34,
  defense: 29,
  critical: 0.8,
  moves: [allMoves.plaquage, allMoves.charge, allMoves.tonnerre, allMoves.pietisol],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif",
  rank: 2
})

const aquali = new Pokemon({
  name: 'Aquali',
  type: TYPES.EAU,
  hp: 180,
  attack: 28,
  defense: 27,
  critical: 0.6,
  moves: [allMoves.vibraqua, allMoves.rugissement, allMoves.ondeboreale, allMoves.plaquage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif",
  rank: 2
})

const voltali = new Pokemon({
  name: 'Voltali',
  type: TYPES.FOUDRE,
  hp: 160,
  attack: 33,
  defense: 24,
  critical: 0.95,
  moves: [allMoves.tonnerre, allMoves.rugissement, allMoves.morsure, allMoves.meteores],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
  rank: 2
})

const pyroli = new Pokemon({
  name: 'Pyroli',
  type: TYPES.FEU,
  hp: 168,
  attack: 36,
  defense: 23,
  critical: 0.86,
  moves: [allMoves.rouedefeu, allMoves.rugissement, allMoves.crocsfeu, allMoves.plaquage],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif",
  rank: 2
})

const porygon = new Pokemon({
  name: 'Porygon',
  type: TYPES.NORMAL,
  hp: 158,
  attack: 26,
  defense: 28,
  critical: 0.7,
  moves: [allMoves.charge, allMoves.soin, allMoves.rafalepsy, allMoves.tonnerre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif",
  rank: 2
})

const draco = new Pokemon({
  name: 'Draco',
  type: TYPES.DRAGON,
  hp: 178,
  attack: 34,
  defense: 30,
  critical: 0.74,
  moves: [allMoves.dracorage, allMoves.plaquage, allMoves.dracosouffle, allMoves.tonnerre],
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif",
  rank: 2
})



export const RANK_II_GEN_1 = [
  herbizarre, reptincel, carabaffe, papilusion, roucoups,
  rattatac, rapasdepic, arbok, raichu, sablaireau,
  nidorina, nidorino, melodelfe, feunard, grodoudou,
  nosferalto, ortide, parasect, aeromite, persian,
  akwakwak, colossinge, tetarte, kadabra, machopeur,
  galopa, flagadoss, magneton, dodrio, lamantine,
  crustabri, spectrum, onix, hypnomade, kraboss,
  electrode, noadkoko, ossatueur, elektek, lipoutou,
  kicklee, tygnon, excelangue, smogogo, rhinocorne,
  kangourex, hypocean, poissoroy, mrmime, insecateur, 
  magmar, scarabrute, tauros, aquali, voltali, pyroli, 
  porygon, draco
]
