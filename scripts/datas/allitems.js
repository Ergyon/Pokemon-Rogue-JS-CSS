import { Item } from "../game/class/items.js"
import { healingSelf } from "../game/mechanics/stats-change.js"
import { healStatus } from "../game/mechanics/status.js"

// heals
const potion = new Item({
    name: 'Potion',
    effect: healingSelf(30),
    category: 'stats',
    rank: 1,
    price: 300,
    img: '../../assets/img/items/medicine/potion.png'
})

const superpotion = new Item({
    name: 'Super potion',
    effect: healingSelf(60),
    category: 'stats',
    rank: 2,
    price: 800,
    img: '../../assets/img/items/medicine/superpotion.png',
})

const hyperpotion = new Item({
    name: 'Hyper potion',
    effect:healingSelf(120),
    category: 'stats',
    rank: 3,
    price: 1200,
    img: '../../assets/img/items/medicine/hyperpotion.png',
})

const potionmax = new Item({
    name: 'Guérison',
    effect: healingSelf(300), 
    category: 'stats',
    rank: 3,
    price: 2000,
    img: '../../assets/img/items/medicine/max-potion.png',
})

// status 
const antipara = new Item({
    name: 'Anti-para',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antipara.png',
})

const antidote = new Item({
    name: 'Antidote',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antidote.png',
})

const antibrule = new Item({
    name: 'Anti-brûle',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/antibrule.png',
})

const antigele = new Item({
    name: 'Anti-gêle',
    effect: healStatus(),
    rank: 1,
    price: 350,
    img: '../../assets/img/items/medicine/ice-heal.png',
})

const reveil = new Item({
    name: 'Réveil',
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

 