import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../moves.js"
import { TYPES } from "../../types.js"

// EAU
const amonita = new Pokemon({
    name: 'Abra',
    type: TYPES.EAU,
    hp: 130,
    attack: 16,
    defense: 16,
    critical: 0.75,
    moves: [allMoves.pistoletao, allMoves.jetsable, allMoves.coupdboue, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif",
    rank: 1
})

const carapuce = new Pokemon({
    name: 'Carapuce',
    type: TYPES.EAU,
    hp: 123,
    attack: 16,
    defense: 13,
    critical: 0.72,
    moves: [allMoves.pistoletao, allMoves.morsure, allMoves.grozyeux, allMoves.charge],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    rank: 1
})

const hypotrempe = new Pokemon({
    name: 'Hypotrempe',
    type: TYPES.EAU,
    hp: 118,
    attack: 13,
    defense: 15,
    critical: 0.68,
    moves: [allMoves.charge, allMoves.bullesdeau, allMoves.rugissement, allMoves.ouragan],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif",
    rank: 1
})

const krabby = new Pokemon({
    name: 'Krabby',
    type: TYPES.EAU,
    hp: 122,
    attack: 15,
    defense: 13,
    critical: 0.85,
    moves: [allMoves.bullesdeau, allMoves.armure, allMoves.pistoletao, allMoves.griffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif",
    rank: 1
})

const magicarpe = new Pokemon({
    name: 'Magicarpe',
    type: TYPES.EAU,
    hp: 128,
    attack: 16,
    defense: 14,
    critical: 0.8,
    moves: [allMoves.charge, allMoves.mimiqueue, allMoves.bullesdeau, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp-f.gif",
    rank: 1
})

const poissirene = new Pokemon({
    name: 'Poissirène',
    type: TYPES.EAU,
    hp: 115,
    attack: 13,
    defense: 17,
    critical: 0.61,
    moves: [allMoves.charge, allMoves.pistoletao, allMoves.hypnose, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen-f.gif",
    rank: 1
})

const psykokwak = new Pokemon({
    name: 'Psykokwak',
    type: TYPES.EAU,
    hp: 122,
    attack: 13,
    defense: 14,
    critical: 0.81,
    moves: [allMoves.pistoletao, allMoves.hypnose, allMoves.charge, allMoves.ondefolie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    rank: 1
})

const ptitard = new Pokemon({
    name: 'Ptitard',
    type: TYPES.EAU,
    hp: 120,
    attack: 14,
    defense: 13,
    critical: 0.71,
    moves: [allMoves.pistoletao, allMoves.hypnose, allMoves.bullesdeau, allMoves.coupdboule],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif",
    rank: 1
})

const stari = new Pokemon({
    name: 'Stari',
    type: TYPES.EAU,
    hp: 117,
    attack: 15,
    defense: 13,
    critical: 0.94,
    moves: [allMoves.charge, allMoves.ondefolie, allMoves.chocmental, allMoves.pistoletao],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif",
    rank: 1
})

const tentacool = new Pokemon({
    name: 'Tentacool',
    type: TYPES.EAU,
    hp: 119,
    attack: 14,
    defense: 16,
    critical: 0.84,
    moves: [allMoves.ligotage, allMoves.pistoletao, allMoves.dardvenin, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif",
    rank: 1
})

// PLANTE
const bulbizare = new Pokemon({
    name: 'Bulbizare',
    type: TYPES.PLANTE,
    hp: 133,
    attack: 14,
    defense: 16,
    critical: 0.8,
    moves: [allMoves.charge, allMoves.tranchherb, allMoves.fouetliane, allMoves.armure],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    rank: 1
})

const chetiflor = new Pokemon({
    name: 'Chétiflor',
    type: TYPES.PLANTE,
    hp: 118,
    attack: 13,
    defense: 13,
    critical: 0.69,
    moves: [allMoves.croissance, allMoves.charge, allMoves.volvie, allMoves.tranchherb],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif",
    rank: 1
})

const mystherbe = new Pokemon({
    name: 'Mystherbe',
    types: TYPES.PLANTE,
    hp: 120,
    attack: 14,
    defense: 12,
    critical: 0.55,
    moves: [allMoves.fouetliane, allMoves.volvie, allMoves.croissance, allMoves.poudredodo],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif",
    rank: 1
})

const noeuneouf = new Pokemon({
    name: 'Noeunoeuf',
    type: TYPES.PLANTE,
    hp: 125,
    attack: 13,
    defense: 15,
    critical: 0.76,
    moves: [allMoves.volvie, allMoves.croissance, allMoves.morsure, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif",
    rank: 1
})

// FEU
const caninos = new Pokemon({
    name: 'Caninos',
    type: TYPES.FEU,
    hp: 121,
    attack: 14,
    defense: 14,
    critical: 0.68,
    moves: [allMoves.viveattaque, allMoves.morsure, allMoves.flammeche, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif",
    rank: 1
})

const goupix = new Pokemon({
    name: 'Goupix',
    type: TYPES.FEU,
    hp: 121,
    attack: 15,
    defense: 12,
    critical: 0.99,
    moves: [allMoves.flammeche, allMoves.rugissement, allMoves.viveattaque, allMoves.morsure],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
    rank: 1
})

const ponyta = new Pokemon({
    name: 'Ponyta',
    type: TYPES.FEU,
    hp: 120,
    attack: 16,
    defense: 11,
    critical: 0.91,
    moves: [allMoves.flammeche, allMoves.viveattaque, allMoves.charge, allMoves.croissance],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif",
    rank: 1
})

const salameche = new Pokemon({
    name: 'Salamèche',
    type: TYPES.FEU,
    hp: 121,
    attack: 17,
    defense: 14,
    critical: 0.58,
    moves: [allMoves.jetsable, allMoves.griffe, allMoves.flammeche, allMoves.grozyeux],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    rank: 1
})

// FOUDRE
const magneti = new Pokemon({
    name: 'Magnéti',
    type: TYPES.FOUDRE,
    hp: 115,
    attack: 12,
    defense: 12,
    critical: 0.75,
    moves: [allMoves.eclair, allMoves.charge, allMoves.ondefolie, allMoves.cageeclair],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif",
    rank: 1
})

const pikachu = new Pokemon({
    name: 'Pikachu',
    type: TYPES.FOUDRE,
    hp: 119,
    attack: 17,
    defense: 13,
    critical: 0.78,
    moves: [allMoves.viveattaque, allMoves.charge, allMoves.grozyeux, allMoves.eclair],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
    rank: 1
})

const voltorbe = new Pokemon({
    name: 'Voltorbe',
    type: TYPES.FOUDRE,
    hp: 116,
    attack: 14,
    defense: 14,
    critical: 1,
    moves: [allMoves.armure, allMoves.croissance, allMoves.eclair, allMoves.coupdboule],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif",
    rank: 1
})

// POISON
const abo = new Pokemon({
    name: 'Abo',
    type: TYPES.POISON,
    hp: 115,
    attack: 13,
    defense: 13,
    critical: 0.61,
    moves: [allMoves.charge, allMoves.grozyeux, allMoves.dardvenin, allMoves.ligotage],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif',
    rank: 1
})

const mimitoss = new Pokemon({
    name: 'Mimitoss',
    type: TYPES.POISON,
    hp: 118,
    attack: 12,
    defense: 12,
    critical: 0.58,
    moves: [allMoves.griffe, allMoves.morsure, allMoves.dardvenin, allMoves.hypnose],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif",
    rank: 1
})

const nidoran = new Pokemon({
    name: 'Nidoran ♂',
    type: TYPES.POISON,
    hp: 124,
    attack: 13,
    defense: 11,
    critical: 0.7,
    moves: [allMoves.morsure, allMoves.charge, allMoves.rugissement, allMoves.dardvenin],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif',
    rank: 1
})

const nidoranF = new Pokemon({
    name: 'Nidoran ♀',
    type: TYPES.POISON,
    hp: 126,
    attack: 12,
    defense: 13,
    critical: 0.65,
    moves: [allMoves.griffe, allMoves.dardvenin, allMoves.jetsable, allMoves.morsure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif",
    rank: 1
})

const nosferapti = new Pokemon({
    name: 'Nosferapti',
    type: TYPES.POISON,
    hp: 119,
    attack: 14,
    defense: 14,
    critical: 0.55,
    moves: [allMoves.ondefolie, allMoves.rugissement, allMoves.morsure, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat-f.gif",
    rank: 1
})

const smogo = new Pokemon({
    name: 'Smogo',
    type: TYPES.POISON,
    hp: 124,
    attack: 12,
    defense: 16,
    critical: 0.74,
    moves: [allMoves.coupdboule, allMoves.brouillard, allMoves.bombeurk, allMoves.armure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif",
    rank: 1
})

const tadmorv = new Pokemon({
    name: 'Tadmorv',
    type: TYPES.POISON,
    hp: 120,
    attack: 13,
    defense: 17,
    critical: 0.7,
    moves: [allMoves.boularmure, allMoves.bombeurk, allMoves.charge, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif",
    rank: 1
})

// PSY
const abra = new Pokemon({
    name: 'Abra',
    type: TYPES.PSY,
    hp: 124,
    attack: 16,
    defense: 14,
    critical: 0.68,
    moves: [allMoves.hypnose, allMoves.chocmental, allMoves.griffe, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif",
    rank: 1
})

const ramoloss = new Pokemon({
    name: 'Ramoloss',
    type: TYPES.PSY,
    hp: 127,
    attack: 14,
    defense: 15,
    critical: 0.64,
    moves: [allMoves.charge, allMoves.chocmental, allMoves.bullesdeau, allMoves.ondefolie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif",
    rank: 1
})

const soporifik = new Pokemon({
    name: 'Soporifik',
    type: TYPES.PSY,
    hp: 123,
    attack: 13,
    defense: 13,
    critical: 0.64,
    moves: [allMoves.charge, allMoves.ondefolie, allMoves.chocmental, allMoves.hypnose],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif",
    rank: 1
})

// VOL
const doduo = new Pokemon({
    name: 'Doduo',
    type: TYPES.VOL,
    hp: 120,
    attack: 15,
    defense: 13,
    critical: 0.79,
    moves: [allMoves.viveattaque, allMoves.charge, allMoves.rugissement, allMoves.picpic],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo-f.gif",
    rank: 1
})

const piafabec = new Pokemon({
    name: 'Piafabec',
    type: TYPES.VOL,
    hp: 114,
    attack: 13,
    defense: 12,
    critical: 1.1,
    moves: [allMoves.rugissement, allMoves.viveattaque, allMoves.picpic, allMoves.jetsable],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    rank: 1
})

const roucool = new Pokemon({
    name: 'Roucool',
    type: TYPES.VOL,
    hp: 115,
    attack: 14,
    defense: 14,
    critical: 0.77,
    moves: [allMoves.viveattaque, allMoves.rugissement, allMoves.jetsable, allMoves.tornade],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif',
    rank: 1
})

// ROCHE
const kabuto = new Pokemon({
    name: 'Kabuto',
    type: TYPES.ROCHE,
    hp: 130,
    attack: 16,
    defense: 16,
    critical: 0.75,
    moves: [allMoves.pistoletao, allMoves.jetsable, allMoves.volvie, allMoves.griffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif",
    rank: 1
})

const racaillou = new Pokemon({
    name: 'Racaillou',
    type: TYPES.ROCHE,
    hp: 118,
    attack: 13,
    defense: 16,
    critical: 0.62,
    moves: [allMoves.charge, allMoves.armure, allMoves.jetpierre, allMoves.coupdboule],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif',
    rank: 1
})

// SOL
const osselait = new Pokemon({
    name: 'Osselai',
    type: TYPES.SOL,
    hp: 116,
    attack: 15,
    defense: 17,
    critical: 0.78,
    moves: [allMoves.jetsable, allMoves.coupdboule, allMoves.rugissement, allMoves.fauxchage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif",
    rank: 1
})

const sabelette = new Pokemon({
    name: 'Sabelette',
    type: TYPES.SOL,
    hp: 118,
    attack: 16,
    defense: 12,
    critical: 0.77,
    moves: [allMoves.griffe, allMoves.jetsable, allMoves.coupdboue, allMoves.viveattaque],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    rank: 1
})

// COMBAT
const ferossinge = new Pokemon({
    name: 'Ferossinge',
    type: TYPES.COMBAT,
    hp: 114,
    attack: 15,
    defense: 12,
    critical: 0.75,
    moves: [allMoves.morsure, allMoves.balayage, allMoves.grozyeux, allMoves.griffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif",
    rank: 1
})

const machoc = new Pokemon({
    name: 'Machoc',
    type: TYPES.COMBAT,
    hp: 118,
    attack: 16,
    defense: 11,
    critical: 0.9,
    moves: [allMoves.balayage, allMoves.grozyeux, allMoves.charge, allMoves.poingkarate],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif",
    rank: 1
})

// INSECTE
const aspicot = new Pokemon({
    name: 'Aspicot',
    type: TYPES.INSECTE,
    hp: 116,
    attack: 11,
    defense: 15,
    critical: 0.7,
    moves: [allMoves.charge, allMoves.dardvenin, allMoves.croissance, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    rank: 1
})

const chenipan = new Pokemon({
    name: 'Chenipan',
    type: TYPES.INSECTE,
    hp: 115,
    attack: 11,
    defense: 11,
    critical: 0.6,
    moves: [allMoves.rugissement, allMoves.charge, allMoves.dardvenin, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    rank: 1
})

const paras = new Pokemon({
    name: 'Paras',
    type: TYPES.INSECTE,
    hp: 117,
    attack: 12,
    defense: 16,
    critical: 0.72,
    moves: [allMoves.paraspore, allMoves.charge, allMoves.dardvenin, allMoves.volvie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    rank: 1
})

// GLACE
const kokyas = new Pokemon({
    name: 'Kokyas',
    type: TYPES.GLACE,
    hp: 117,
    attack: 12,
    defense: 14,
    critical: 0.82,
    moves: [allMoves.bullesdeau, allMoves.boularmure, allMoves.ventglace, allMoves.ondefolie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif",
    rank: 1
})

const otaria = new Pokemon({
    name: 'Otaria',
    type: TYPES.GLACE,
    hp: 122,
    attack: 14,
    defense: 14,
    critical: 0.78,
    moves: [allMoves.pistoletao, allMoves.coupdboule, allMoves.rugissement, allMoves.ventglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif",
    rank: 1
})

// NORMAL
const canartichot = new Pokemon({
    name: 'Canartichot',
    type: TYPES.NORMAL,
    hp: 114,
    attack: 13,
    defense: 12,
    critical: 0.89,
    moves: [allMoves.viveattaque, allMoves.griffe, allMoves.grozyeux, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif",
    rank: 1
})

const evoli = new Pokemon({
    name: 'Evoli',
    type: TYPES.NORMAL,
    hp: 117,
    attack: 13,
    defense: 15,
    critical: 1,
    moves: [allMoves.charge, allMoves.viveattaque, allMoves.croissance, allMoves.morsure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    rank: 1
})

const miaous = new Pokemon({
    name: 'Miaous',
    type: TYPES.NORMAL,
    hp: 116,
    attack: 14,
    defense: 14,
    critical: 1.15,
    moves: [allMoves.griffe, allMoves.morsure, allMoves.rugissement, allMoves.hypnose],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
    rank: 1
})

const melofee = new Pokemon({
    name: 'Melofée',
    type: TYPES.NORMAL,
    hp: 125,
    attack: 11,
    defense: 15,
    critical: 0.72,
    moves: [allMoves.charge, allMoves.berceuse, allMoves.coupdboule, allMoves.metronome],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    rank: 1
})

const ratata = new Pokemon({
    name: 'Ratata',
    type: TYPES.NORMAL,
    hp: 118,
    attack: 15,
    defense: 13,
    critical: 0.85,
    moves: [allMoves.viveattaque, allMoves.morsure, allMoves.crocmort, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata-f.gif",
    rank: 1
})

const rondoudou = new Pokemon({
    name: 'Rondoudou',
    type: TYPES.NORMAL,
    hp: 128,
    attack: 12,
    defense: 17,
    critical: 0.54,
    moves: [allMoves.berceuse, allMoves.charge, allMoves.coupdboule, allMoves.rugissement],
    img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    rank: 1
})

// SPECTRE
const fantominus = new Pokemon({
    name: 'Fantominus',
    type: TYPES.SPECTRE,
    hp: 117,
    attack: 13,
    defense: 16,
    critical: 0.8,
    moves: [allMoves.hypnose, allMoves.chocmental, allMoves.grozyeux, allMoves.lechouille],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif",
    rank: 1
})

// DRAGON
const minidraco = new Pokemon({
    name: 'Minidraco',
    type: TYPES.NORMAL,
    hp: 124,
    attack: 17,
    defense: 12,
    critical: 0.65,
    moves: [allMoves.cageeclair, allMoves.grozyeux, allMoves.ouragan, allMoves.eclair],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    rank: 1
})



export const RANK_I_GEN_1 = [
    bulbizare, canartichot, carapuce, evoli, fantominus, goupix, 
    miaous, nidoran, pikachu, poissirene, ponyta, racaillou, rondoudou,
    roucool, salameche, smogo, voltorbe, aspicot, abo, sabelette, 
    nidoranF, melofee, ratata, chenipan, nosferapti, paras, mystherbe, 
    mimitoss, psykokwak, ferossinge, caninos, ptitard, abra, machoc,
    chetiflor, tentacool, ramoloss, magneti, doduo, otaria, tadmorv, kokyas,
    soporifik, krabby, osselait, hypotrempe, stari, magicarpe, amonita, kabuto,
    minidraco
]