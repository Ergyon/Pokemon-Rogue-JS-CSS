import { Item } from "../game/class/items.js"
import { healingSelf } from "../game/mechanics/stats-change.js"
import { healStatus, STATUS } from "../game/mechanics/status.js"

// heals
const potion = new Item({
    name: 'Potion',
    desc: 'Soigne 30pv',
    effect: healingSelf(20),
    category: 'stats',
    rank: 1,
    price: 300,
    img: '../../assets/img/items/medicine/potion.png',
    canUse: (pkmn) => pkmn.hp < pkmn.maxHP && !pkmn.isKO()
})

const eaufraiche = new Item({
    name: 'Eau fraiche',
    desc: 'Restaure 40pv',
    effect: healingSelf(30),
    category: 'stats',
    rank: 1,
    price: 400,
    img: '../../assets/img/items/medicine/eaufraiche.png',
    caneUse: (pkmn) => pkmn.hp < pkmn.maxHP && !pkmn.isKO()
})

const sodacool = new Item({
    name: 'Soda cool',
    desc: 'Restaure 40pv',
    effect: healingSelf(40),
    category: 'stats',
    rank: 2,
    price: 600,
    img: '../../assets/img/items/medicine/sodacool.png',
    caneUse: (pkmn) => pkmn < pkmn.maxHP && !pkmn.isKO()
})

const limonade = new Item({
    name: 'Limonade',
    desc: 'Restaure 50pv',
    effect: healingSelf(50),
    category: 'stats',
    rank: 2,
    price: 600,
    img: '../../assets/img/items/medicine/lemonade.png',
    caneUse: (pkmn) => pkmn < pkmn.maxHP && !pkmn.isKO()
})

const superpotion = new Item({
    name: 'Super potion',
    effect: healingSelf(60),
    desc: 'Soigne 60pv',
    category: 'stats',
    rank: 2,
    price: 800,
    img: '../../assets/img/items/medicine/superpotion.png',
    canUse: (pkmn) => pkmn.hp < pkmn.maxHP && !pkmn.isKO()
})

const hyperpotion = new Item({
    name: 'Hyper potion',
    desc: 'Soigne 120pv',
    effect:healingSelf(120),
    category: 'stats',
    rank: 3,
    price: 1200,
    img: '../../assets/img/items/medicine/hyperpotion.png',
    canUse: (pkmn) => pkmn.hp < pkmn.maxHP && !pkmn.isKO()
})

const potionmax = new Item({
    name: 'Potion max',
    desc: 'Soigne tous les pv',
    effect: healingSelf(300), 
    category: 'stats',
    rank: 3,
    price: 1500,
    img: '../../assets/img/items/medicine/max-potion.png',
    canUse: (pkmn) => pkmn.hp < pkmn.maxHP && !pkmn.isKO()
})

const rappel = new Item({
    name: 'Rappel',
    desc: 'Réanime un Pokémon',
    effect: (pkmn) => pkmn.hp = pkmn.maxHP / 2, 
    category: 'stats',
    rank: 2,
    price: 1200,
    img: '../../assets/img/items/medicine/revive.png',
    canUse: (pkmn) => pkmn.isKO()
})

const rappelmax = new Item({
    name: 'Rappel Max',
    desc: 'Réanime complètement un Pokémon',
    effect: (pkmn) => pkmn.hp = pkmn.maxHP, 
    category: 'stats',
    rank: 3,
    price: 2000,
    img: '../../assets/img/items/medicine/max-revive.png',
    canUse: (pkmn) => pkmn.isKO()
})

// status 
const totalsoin = new Item({
    name: 'Limonade',
    desc: 'Soigne tous les status',
    effect: healStatus(),
    category: 'status',
    rank: 2,
    price: 800,
    img: '../../assets/img/items/medicine/lemonade.png',
    caneUse: (pkmn) => pkmn.status === 'string' && !pkmn.isKO()
})

const antipara = new Item({
    name: 'Anti-para',
    desc: 'Soigne la paralysie',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antipara.png',
    canUse: (pkmn) => pkmn.status === STATUS.PARALYZED && !pkmn.isKO()
})

const antidote = new Item({
    name: 'Antidote',
    desc: 'Soigne du poison',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antidote.png',
    canUse: (pkmn) => pkmn.status === STATUS.POISON && !pkmn.isKO()
})

const antibrule = new Item({
    name: 'Anti-brûle',
    desc: 'Soigne des brûlures',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antibrule.png',
    canUse: (pkmn) => pkmn.status === STATUS.BURN && !pkmn.isKO()
})

const antigele = new Item({
    name: 'Anti-gêle',
    desc: 'Dégêle un Pokémon',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/ice-heal.png',
    canUse: (pkmn) => pkmn.status === STATUS.FROZEN && !pkmn.isKO()
})

const reveil = new Item({
    name: 'Réveil',
    desc: 'Réveille un Pokémon',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/reveil.png',
    canUse: (pkmn) => pkmn.status === STATUS.SLEEP && !pkmn.isKO()
})


// stats
const fer = new Item({
    name: 'Fer',
    desc: "Augmente la défense d'un Pokémon",
    effect: (pkmn) => pkmn.increaseDefense(2),
    category: 'stats',
    rank: 2,
    price: 700,
    img: '../../assets/img/items/medicine/fer.png',
    caneUse: (pkmn) => !pkmn.isKO()
})

const proteine = new Item({
    name: 'Protéine',
    desc: "Augmente l'attaque d'un Pokémon",
    effect: (pkmn) => pkmn.increaseAttack(2),
    category: 'stats',
    rank: 2,
    price: 700,
    img: '../../assets/img/items/medicine/protein.png',
    caneUse: (pkmn) => !pkmn.isKO()
})

const zinc = new Item({
    name: 'Zinc',
    desc: "Augmente la précision d'un Pokémon",
    effect: (pkmn) => pkmn.increasePrecision(0.2),
    category: 'stats',
    rank: 2,
    price: 700,
    img: '../../assets/img/items/medicine/zinc.png',
    caneUse: (pkmn) => !pkmn.isKO()
})

const elixir = new Item({
    name: 'Elixir',
    desc: "Restaure 3 PP de chaque attaques d'un Pokémon",
    effect: (pkmn) => {
        pkmn.forEach(moves => {
            moves.pp +=3
        })},
    category: 'stats',
    rank: 2,
    price: 650,
    img: '../../assets/img/items/medicine/elixir.png',
    caneUse: (pkmn) => pkmn.moves.pp < pkmn.moves.maxPP && !pkmn.isKO()
})

const maxelixir = new Item({
    name: 'Max elixir',
    desc: "Restaure 6 PP de chaque attaques d'un Pokémon",
    effect: (pkmn) => {
        pkmn.forEach(moves => {
            moves.pp += 6
        })},
    category: 'stats',
    rank: 3,
    price: 850,
    img: '../../assets/img/items/medicine/max-elixir.png',
    caneUse: (pkmn) => pkmn.moves.pp < pkmn.moves.maxPP && !pkmn.isKO()
})

const pvplus = new Item({
    name: 'PV plus',
    desc: "Augmente les PV d'un Pokémon",
    effect: (pkmn) => {
        pkmn.MaxHP+= 40
        pkmn.hp += 40},
    category: 'stats',
    rank: 3,
    price: 650,
    img: '../../assets/img/items/medicine/pvplus.png',
    caneUse: (pkmn) => !pkmn.isKO()
})

const carbone = new Item({
    name: 'Carbone',
    desc: 'Augmente la puissance des coups critiques',
    effect: (pkmn) => pkmn.increaseCriticalRate(0.2),
    category: 'stats',
    rank: 2,
    price: 500,
    img: '../../assets/img/items/medicine/carbone.png',
    canUse: (pkmn) => !pkmn.isKO()
})

export const allItems = {
    // rank I
    potion, antipara, antidote, antibrule, antigele, reveil, eaufraiche,

    // rank II
    superpotion, sodacool, limonade, totalsoin, fer, proteine, zinc, elixir,
    rappel, carbone,
    // rank III
    hyperpotion, potionmax, maxelixir, pvplus, rappelmax
}




 