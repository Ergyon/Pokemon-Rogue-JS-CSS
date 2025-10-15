import { Pokemon } from "../../../game/class/pokemon.js"
import { allMoves } from "../../MOVES/allMoves.js"
import { TYPES } from "../../types.js"

const macronium = new Pokemon({
    name: 'Macronium',
    type: TYPES.PLANTE,
    hp: 177,
    attack: 25,
    defense: 32,
    critical: 0.7,
    moves: [allMoves.tranchherb, allMoves.morsure, allMoves.gigasangsue, allMoves.plaquage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/bayleef.gif",
    rank: 2
})

const feurisson = new Pokemon({
    name: 'Feurisson',
    type: TYPES.FEU,
    hp: 170,
    attack: 30,
    defense: 26,
    critical: 0.7,
    moves: [allMoves.rouedefeu, allMoves.brouillard, allMoves.poingeclair, allMoves.flammeche],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/quilava.gif",
    rank: 2
})

const crocrodil = new Pokemon({
    name: 'Crocrodil',
    type: TYPES.EAU,
    hp: 172,
    attack: 28,
    defense: 28,
    critical: 0.8,
    moves: [allMoves.vibraqua, allMoves.machouille, allMoves.tranche, allMoves.grozyeux],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/croconaw.gif",
    rank: 2
})

const fouinar = new Pokemon({
    name: 'Fouinar',
    type: TYPES.NORMAL,
    hp: 162,
    attack: 23,
    defense: 25,
    critical: 0.8,
    moves: [allMoves.viveattaque, allMoves.cassebrique, allMoves.meteores, allMoves.tonnerre],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/furret.gif",
    rank: 2
})

const scorvol = new Pokemon({
    name: 'Scorvol',
    type: TYPES.SOL,
    hp: 150,
    attack: 25,
    defense: 25,
    critical: 1.05,
    moves: [allMoves.crocsfeu, allMoves.viveattaque, allMoves.aeropique, allMoves.griffe],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gligar.gif",
    rank: 2
})


const noarfang = new Pokemon({
    name: 'Noarfang',
    type: TYPES.NORMAL,
    hp: 175,
    attack: 25,
    defense: 26,
    critical: 0.65,
    moves: [allMoves.cruailes, allMoves.aeropique, allMoves.jetsable, allMoves.viveattaque],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/noctowl.gif",
    rank: 2
})

const coxyclaque = new Pokemon({
    name: 'Coxyclaque',
    type: TYPES.INSECTE,
    hp: 168,
    attack: 22,
    defense: 33,
    critical: 0.55,
    moves: [allMoves.paraspore, allMoves.morsure, allMoves.meteores, allMoves.lamedair],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ledian.gif",
    rank: 2
})

const migalos = new Pokemon({
    name: 'Migalos',
    type: TYPES.INSECTE,
    hp: 158,
    attack: 28,
    defense: 25,
    critical: 0.95,
    moves: [allMoves.dardvenin, allMoves.directtoxik, allMoves.griffe, allMoves.piqure],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ariados.gif",
    rank: 2
})

const lanturn = new Pokemon({
    name: 'Lanturn',
    type: TYPES.EAU,
    hp: 167,
    attack: 27,
    defense: 30,
    critical: 0.6,
    moves: [allMoves.vibraqua, allMoves.tonnerre, allMoves.cageeclair, allMoves.pistoletao],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lanturn.gif",
    rank: 2
})

const togetic = new Pokemon({
    name: 'Togetic',
    type: TYPES.NORMAL,
    hp: 172,
    attack: 23,
    defense: 32,
    critical: 0.5,
    moves: [allMoves.plaquage, allMoves.lamedair, allMoves.meteores, allMoves.charme],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/togetic.gif",
    rank: 2
})

const xatu = new Pokemon({
    name: 'Xatu',
    type: TYPES.PSY,
    hp: 162,
    attack: 32,
    defense: 26,
    critical: 1.0,
    moves: [allMoves.psyko, allMoves.cruailes, allMoves.ondefolie, allMoves.picpic],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/xatu.gif",
    rank: 2
})

const lainergie = new Pokemon({
    name: 'Lainergie',
    type: TYPES.FOUDRE,
    hp: 164,
    attack: 26,
    defense: 31,
    critical: 0.95,
    moves: [allMoves.tonnerre, allMoves.coupdboule, allMoves.poingeclair, allMoves.rugissement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/flaaffy.gif",
    rank: 2
})

const azumarill = new Pokemon({
    name: 'Azumarill',
    type: TYPES.EAU,
    hp: 171,
    attack: 28,
    defense: 28,
    critical: 0.7,
    moves: [allMoves.vibraqua, allMoves.cassebrique, allMoves.pistoletao, allMoves.plaquage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/azumarill.gif",
    rank: 2
})

const simularbre = new Pokemon({
    name: 'Simularbre',
    type: TYPES.ROCHE,
    hp: 165,
    attack: 30,
    defense: 35,
    critical: 0.55,
    moves: [allMoves.eboulement, allMoves.cassebrique, allMoves.plaquage, allMoves.charge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sudowoodo.gif",
    rank: 2
})

const cotovol = new Pokemon({
    name: 'Cotovol',
    type: TYPES.PLANTE,
    hp: 160,
    attack: 24,
    defense: 20,
    critical: 1.15,
    moves: [allMoves.tranchherb, allMoves.poudredodo, allMoves.paraspore, allMoves.gigasangsue],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/jumpluff.gif",
    rank: 2
})

const heliatronc = new Pokemon({
    name: 'Héliatronc',
    type: TYPES.PLANTE,
    hp: 156,
    attack: 25,
    defense: 24,
    critical: 0.75,
    moves: [allMoves.paraspore, allMoves.tranchherb, allMoves.gigasangsue, allMoves.volvie],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sunflora.gif",
    rank: 2
})

const maraiste = new Pokemon({
    name: 'Maraiste',
    type: TYPES.EAU,
    hp: 169,
    attack: 29,
    defense: 29,
    critical: 0.55,
    moves: [allMoves.vibraqua, allMoves.pietisol, allMoves.coupdboue, allMoves.plaquage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/quagsire.gif",
    rank: 2
})


const cornebre = new Pokemon({
    name: 'Cornèbre',
    type: TYPES.TENEBRES,
    hp: 156,
    attack: 27,
    defense: 23,
    critical: 1.1,
    moves: [allMoves.picpic, allMoves.vibrobscur, allMoves.aeropique, allMoves.cruailes],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/murkrow.gif",
    rank: 2
})


const foretresse = new Pokemon({
    name: 'Foretresse',
    type: TYPES.INSECTE,
    hp: 168,
    attack: 26,
    defense: 35,
    critical: 0.6,
    moves: [allMoves.piqure, allMoves.eboulement, allMoves.meteores, allMoves.gigasangsue],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/forretress.gif",
    rank: 2
})

const granbull = new Pokemon({
    name: 'Granbull',
    type: TYPES.NORMAL,
    hp: 172,
    attack: 35,
    defense: 27,
    critical: 0.8,
    moves: [allMoves.machouille, allMoves.crocsgivre, allMoves.plaquage, allMoves.coupdboule],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/granbull.gif",
    rank: 2
})

const cizayox = new Pokemon({
    name: 'Cizayox',
    type: TYPES.INSECTE,
    hp: 175,
    attack: 37,
    defense: 28,
    critical: 1.5,
    moves: [allMoves.fauxchage, allMoves.tranche, allMoves.aeropique, allMoves.plaiecroix],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/scizor.gif",
    rank: 2
})

const scorplane = new Pokemon({
    name: 'Scorplane',
    type: TYPES.SOL,
    hp: 154,
    attack: 32,
    defense: 24,
    critical: 1.0,
    moves: [allMoves.fauxchage, allMoves.crocseclair, allMoves.cruailes, allMoves.tranche],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gligar.gif",
    rank: 2
})

const farfuret = new Pokemon({
    name: 'Farfuret',
    type: TYPES.TENEBRES,
    hp: 152,
    attack: 36,
    defense: 22,
    critical: 1.2,
    moves: [allMoves.ballombre, allMoves.viveattaque, allMoves.griffombre, allMoves.poingglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/sneasel.gif",
    rank: 2
})

const ursaring = new Pokemon({
    name: 'Ursaring',
    type: TYPES.NORMAL,
    hp: 173,
    attack: 37,
    defense: 24,
    critical: 0.85,
    moves: [allMoves.tranche, allMoves.griffe, allMoves.cassebrique, allMoves.pietisol],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/ursaring.gif",
    rank: 2
})

const volcaropod = new Pokemon({
    name: 'Volcaropod',
    type: TYPES.FEU,
    hp: 162,
    attack: 28,
    defense: 35,
    critical: 0.55,
    moves: [allMoves.rouedefeu, allMoves.eboulement, allMoves.plaquage, allMoves.brouillard],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/magcargo.gif",
    rank: 2
})

const octillery = new Pokemon({
    name: 'Octillery',
    type: TYPES.EAU,
    hp: 167,
    attack: 31,
    defense: 27,
    critical: 0.9,
    moves: [allMoves.bombeurk, allMoves.meteores, allMoves.vibraqua, allMoves.rayoncharge],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/octillery.gif",
    rank: 2
})

const cadoizo = new Pokemon({
    name: 'Cadoizo',
    type: TYPES.GLACE,
    hp: 155,
    attack: 26,
    defense: 23,
    critical: 1.0,
    moves: [allMoves.lamedair, allMoves.ventglace, allMoves.aeropique, allMoves.meteores],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/delibird.gif",
    rank: 2
})

const demanta = new Pokemon({
    name: 'Démanta',
    type: TYPES.EAU,
    hp: 166,
    attack: 24,
    defense: 33,
    critical: 0.6,
    moves: [allMoves.vibraqua, allMoves.aeropique, allMoves.pietisol, allMoves.eboulement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/mantine.gif",
    rank: 2
})

const airmure = new Pokemon({
    name: 'Airmure',
    type: TYPES.VOL,
    hp: 163,
    attack: 28,
    defense: 35,
    critical: 0.65,
    moves: [allMoves.lamedair, allMoves.meteores, allMoves.cruailes, allMoves.picpic],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/skarmory.gif",
    rank: 2
})

const donphan = new Pokemon({
    name: 'Donphan',
    type: TYPES.SOL,
    hp: 176,
    attack: 35,
    defense: 30,
    critical: 0.75,
    moves: [allMoves.pietisol, allMoves.coupdboue, allMoves.roulade, allMoves.eboulement],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/donphan.gif",
    rank: 2
})

const porygon2 = new Pokemon({
    name: 'Porygon2',
    type: TYPES.NORMAL,
    hp: 170,
    attack: 29,
    defense: 30,
    critical: 1.7,
    moves: [allMoves.tonnerre, allMoves.ballombre, allMoves.rafalepsy, allMoves.ventglace],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon2.gif",
    rank: 2
})

const ecremeuh = new Pokemon({
    name: 'Écrémeuh',
    type: TYPES.NORMAL,
    hp: 173,
    attack: 28,
    defense: 28,
    critical: 0.65,
    moves: [allMoves.roulade, allMoves.charge, allMoves.charme, allMoves.plaquage],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/miltank.gif",
    rank: 2
})

const ymphect = new Pokemon({
    name: 'Ymphect',
    type: TYPES.ROCHE,
    hp: 175,
    attack: 33,
    defense: 30,
    critical: 0.8,
    moves: [allMoves.eboulement, allMoves.pietisol, allMoves.machouille, allMoves.vibrobscur],
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pupitar.gif",
    rank: 2
})

export const RANK_II_GEN_2 = [
    feurisson, macronium, crocrodil, scorvol, fouinar,
    noarfang, coxyclaque, migalos, lanturn, togetic,
    xatu, lainergie, azumarill, simularbre, cotovol, 
    heliatronc, maraiste, cornebre, foretresse, 
    granbull, cizayox, scorplane, farfuret,
    ursaring, volcaropod, octillery, cadoizo, demanta,
    airmure, donphan, porygon2, ecremeuh, ymphect
]