import { Item } from "../game/class/items.js"
import { healingSelf } from "../game/mechanics/stats-change.js"
import { healStatus } from "../game/mechanics/status.js"

// heals
const potion = new Item({
    name: 'Potion',
    desc: 'Soigne 30pv',
    effect: healingSelf(30),
    category: 'stats',
    rank: 1,
    price: 300,
    img: '../../assets/img/items/medicine/potion.png'
})

const superpotion = new Item({
    name: 'Super potion',
    effect: healingSelf(60),
    desc: 'Soigne 60pv',
    category: 'stats',
    rank: 2,
    price: 800,
    img: '../../assets/img/items/medicine/superpotion.png',
})

const hyperpotion = new Item({
    name: 'Hyper potion',
    desc: 'Soigne 120pv',
    effect:healingSelf(120),
    category: 'stats',
    rank: 3,
    price: 1200,
    img: '../../assets/img/items/medicine/hyperpotion.png',
})

const potionmax = new Item({
    name: 'Potion max',
    desc: 'Soigne tous les pv',
    effect: healingSelf(300), 
    category: 'stats',
    rank: 3,
    price: 2000,
    img: '../../assets/img/items/medicine/max-potion.png',
})

// status 
const antipara = new Item({
    name: 'Anti-para',
    desc: 'Soigne la paralysie',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antipara.png',
})

const antidote = new Item({
    name: 'Antidote',
    desc: 'Soigne du poison',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antidote.png',
})

const antibrule = new Item({
    name: 'Anti-brûle',
    desc: 'Soigne des brûlures',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antibrule.png',
})

const antigele = new Item({
    name: 'Anti-gêle',
    desc: 'Dégêle un Pokémon',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/ice-heal.png',
})

const reveil = new Item({
    name: 'Réveil',
    desc: 'Réveille un Pokémon',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/reveil.png',
})

const allItems = [
    // rank I
    potion, antipara, antidote, antibrule, antigele, reveil,

    // rank II
    superpotion,
    // rank III
    hyperpotion, potionmax
]


 export { allItems }

 