import { Pokemon } from "../game/class/pokemon.js"
import { allMoves } from "./moves.js"
import { TYPES } from "./types.js"

                    // RANK I

const hericendre = new Pokemon({
    name: 'Héricendre',
    type: TYPES.FEU,
    hp: 120,
    attack: 18,
    defense: 14,
    critical: 0.68,
    moves: [allMoves.flammeche, allMoves.charge, allMoves.rugissement, allMoves.viveattaque],
    img: '../assets/img/pokemons/hericendre.png',
    rank: 1
})

const kaiminus = new Pokemon({
    name: 'Kaiminus',
    type: TYPES.EAU,
    hp: 122,
    attack: 15,
    defense: 14,
    critical: 0.7,
    moves: [allMoves.pistoletao, allMoves.griffe, allMoves.morsure, allMoves.grozyeux],
    img: '../assets/img/pokemons/kaiminus.png',
    rank: 1
})

const germignon = new Pokemon({
    name: 'Germignon',
    type: TYPES.PLANTE,
    hp: 128,
    attack: 13,
    defense: 19,
    critical: 0.76,
    moves: [allMoves.tranchherb, allMoves.charge, allMoves.rugissement, allMoves.croissance],
    img: '../assets/img/pokemons/germignon.png',
    rank: 1
})

const bulbizare = new Pokemon({
    name: 'Bulbizare',
    type: TYPES.PLANTE,
    hp: 133,
    attack: 14,
    defense: 16,
    critical: 0.8,
    moves: [allMoves.charge, allMoves.tranchherb, allMoves.fouetliane, allMoves.armure],
    img: '../assets/img/pokemons/bulbizare.png',
    rank: 1
})

const canartichot = new Pokemon({
    name: 'Canartichot',
    type: TYPES.NORMAL,
    hp: 114,
    attack: 13,
    defense: 12,
    critical: 0.89,
    moves: [allMoves.viveattaque, allMoves.griffe, allMoves.grozyeux, allMoves.rugissement],
    img: '../assets/img/pokemons/canartichot.png',
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
    img: '../assets/img/pokemons/carapuce.png',
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
    img: '../assets/img/pokemons/evoli.png',
    rank: 1
})

const fantominus = new Pokemon({
    name: 'Fantominus',
    type: TYPES.SPECTRE,
    hp: 117,
    attack: 13,
    defense: 16,
    critical: 0.8,
    moves: [allMoves.hypnose, allMoves.chocmental, allMoves.grozyeux, allMoves.lechouille],
    img: '../assets/img/pokemons/fantominus.png',
    rank: 1
})

const goupix = new Pokemon({
    name: 'Goupix',
    type: TYPES.FEU,
    hp: 120,
    attack: 15,
    defense: 12,
    critical: 0.99,
    moves: [allMoves.flammeche, allMoves.rugissement, allMoves.viveattaque, allMoves.morsure],
    img: '../assets/img/pokemons/goupix.png',
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
    img: '../assets/img/pokemons/miaous.png',
    rank: 1
})

const nidoran = new Pokemon({
    name: 'Nidoran',
    type: TYPES.POISON,
    hp: 124,
    attack: 13,
    defense: 11,
    critical: 0.7,
    moves: [allMoves.morsure, allMoves.charge, allMoves.rugissement, allMoves.dardvenin],
    img: '../assets/img/pokemons/nidoran-male.png',
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
    img: '../assets/img/pokemons/pikachu.png',
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
    img: '../assets/img/pokemons/poissirene.png',
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
    img: '../assets/img/pokemons/ponyta.png',
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
    img: '../assets/img/pokemons/racaillou.png',
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
    img: '../assets/img/pokemons/rondoudou.png',
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
    img: '../assets/img/pokemons/roucool.png',
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
    img: '../assets/img/pokemons/salameche.png',
    rank: 1
})

const smogo = new Pokemon({
    name: 'Smogo',
    type: TYPES.POISON,
    hp: 124,
    attack: 12,
    defense: 16,
    critical: 0.74,
    moves: [allMoves.coupdboule, allMoves.brouillard, allMoves.detritus, allMoves.armure],
    img: '../assets/img/pokemons/smogo.png',
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
    img: '../assets/img/pokemons/voltorbe.png',
    rank: 1
})

const watwat = new Pokemon({
    name: 'Watwat',
    type: TYPES.FOUDRE,
    hp: 119,
    attack: 13,
    defense: 13,
    critical: 0.66,
    moves: [allMoves.charge, allMoves.armure, allMoves.rugissement, allMoves.eclair],
    img: '../assets/img/pokemons/watwat.png',
    rank: 1
})



                    // RANK II

const aquali = new Pokemon({
    name: 'Aquali',
    type: TYPES.EAU,
    hp: 165,
    attack: 25,
    defense: 25,
    critical: 0.88,
    moves: [allMoves.vibraqua, allMoves.coupdboule, allMoves.morsure, allMoves.rugissement],
    img: '../assets/img/pokemons/aquali.png',
    rank: 2
})

const carabaffe = new Pokemon({
    name: 'Carabaffe',
    type: TYPES.EAU,
    hp: 162,
    attack: 27,
    defense: 22,
    critical: 0.72,
    moves: [allMoves.vibraqua, allMoves.grozyeux, allMoves.griffe, allMoves.morsure],
    img: '../assets/img/pokemons/carabaffe.png',
    rank: 2
})

const colossinge = new Pokemon({
    name: 'Colossinge',
    type: TYPES.COMBAT,
    hp: 151,
    attack: 25,
    defense: 20,
    critical: 1.1,
    moves: [allMoves.balayage, allMoves.poingkarate, allMoves.concentration, allMoves.griffe],
    img: '../assets/img/pokemons/colossinge.png',
    rank: 2
})

const dardargnan = new Pokemon({
    name: 'Dardargnan',
    type: TYPES.PLANTE,
    hp: 160,
    attack: 29,
    defense: 23,
    critical: 0.92,
    moves: [allMoves.dardvenin, allMoves.croissance, allMoves.viveattaque, allMoves.piqure],
    img: '../assets/img/pokemons/dardargnan.png',
    rank: 2
})

const dodrio = new Pokemon({
    name: 'Dodrio',
    type: TYPES.VOL,
    hp: 153,
    attack: 20,
    defense: 24,
    critical: 1.23,
    moves: [allMoves.picpic, allMoves.tornade, allMoves.griffe, allMoves.jetsable],
    img: '../assets/img/pokemons/dodrio.png',
    rank: 2
})

const draco = new Pokemon({
    name: 'Draco',
    type: TYPES.DRAGON,
    hp: 169,
    attack: 24,
    defense: 27,
    critical: 0.68,
    moves: [allMoves.dracorage, allMoves.tornade, allMoves.eclair, allMoves.grozyeux],
    img: '../assets/img/pokemons/draco.png',
    rank: 2
})

const electrode = new Pokemon({
    name: 'Electrode',
    type: TYPES.FOUDRE,
    hp: 170,
    attack: 27,
    defense: 22,
    critical: 0.9,
    moves: [allMoves.ondechoc, allMoves.coupdboule, allMoves.concentration, allMoves.armure],
    img: '../assets/img/pokemons/electrode.png',
    rank: 2
})

const elektek = new Pokemon({
    name: 'Elektek',
    type: TYPES.FOUDRE,
    hp: 145,
    attack: 21,
    defense: 21,
    critical: 0.85,
    moves: [allMoves.poingeclair, allMoves.eclair, allMoves.concentration, allMoves.griffe],
    img: '../assets/img/pokemons/elektek.png',
    rank: 2
})
       
const feunard = new Pokemon({
    name: 'Feunard',
    type: TYPES.FEU,
    hp: 156,
    attack: 28,
    defense: 19,
    critical: 0.83,
    moves: [allMoves.rouedefeu, allMoves.viveattaque, allMoves.morsure, allMoves.rugissement],
    img: '../assets/img/pokemons/feunard.png',
    rank: 2
})

const feurisson = new Pokemon({
    name: 'Feurisson',
    type: TYPES.FEU,
    hp: 167,
    attack: 30,
    defense: 26,
    critical: 0.7,
    moves: [allMoves.rouedefeu, allMoves.brouillard, allMoves.morsure, allMoves.flammeche],
    img: '../assets/img/pokemons/feurisson.png',
    rank: 2
})

const flagadoss = new Pokemon({
    name: 'Flagadoss',
    type: TYPES.EAU,
    hp: 158,
    attack: 20,
    defense: 30,
    critical: 0.55,
    moves: [allMoves.hypnose, allMoves.chocmental, allMoves.morsure, allMoves.vibraqua],
    img: '../assets/img/pokemons/flagadoss.png',
    rank: 2
})

const gravalanch = new Pokemon({
    name: 'Gravalanch',
    type: TYPES.ROCHE,
    hp: 171,
    attack: 23,
    defense: 22,
    critical: 0.65,
    moves: [allMoves.eboulement, allMoves.armure, allMoves.concentration, allMoves.balayage],
    img: '../assets/img/pokemons/gravalanch.png',
    rank: 2
})

const ratatac = new Pokemon({
    name: 'Ratata',
    type: TYPES.NORMAL,
    hp: 150,
    attack: 30,
    defense: 23,
    critical: 1.2,
    moves: [allMoves.morsure, allMoves.rugissement, allMoves.viveattaque, allMoves.crocmort],
    img: '../assets/img/pokemons/ratata.png',
    rank: 2
})






const pokedex = [
    // rank I
    hericendre, kaiminus, germignon, bulbizare, canartichot, carapuce, evoli, fantominus,
    goupix, miaous, nidoran, pikachu, poissirene, ponyta, racaillou, rondoudou,
    roucool, salameche, smogo, voltorbe, watwat, 

    // rank II
    aquali, carabaffe, colossinge, dardargnan, dodrio, draco, electrode, elektek,
    feunard, feurisson, flagadoss, gravalanch, ratatac
]

export { pokedex }

