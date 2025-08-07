import { healingSelf } from "../game/mechanics/stats-change"
import { healStatus } from "../game/mechanics/status"

// heals
const potion = new Item({
    name: 'Potion',
    effect: healingSelf(30),
    category: 'stats',
    rank: 1,
    price: 300
})

const superpotion = new Item({
    name: 'Super potion',
    effect: healingSelf(60),
    category: 'stats',
    rank: 2,
    price: 800
})

const hyperpotion = new Item({
    name: 'Hyper potion',
    effect:healingSelf(120),
    category: 'stats',
    rank: 3,
    price: 1200
})

const guerison = new Item({
    name: 'Guéruison',
    effect: healingSelf(300), 
    category: 'stats',
    rank: 3,
    price: 2000
})

// status 
const antipara = new Item({
    name: 'Anti-para',
    effect: healStatus(),
    category: 'status',
    rank: 1,
    price: 350
})

const antidote = new Item({
    name: 'Antidote',
    effect: healStatus(),
    rank: 1,
    price: 350
})

const antibrule = new Item({
    name: 'Antti-brûle',
    effect: healStatus(),
    rank: 1,
    price: 350
})

const antigele = new Item({
    name: 'Anti-gêle',
    effect: healStatus(),
    rank: 1,
    price: 350
})

const reveil = new Item({
    name: 'Réveil',
    effect: healStatus(),
    rank: 1,
    price: 350
})

const allItems = {
    // rank I
    potion, antipara, antidote, antibrule, antigele, reveil,

    // rank II
    superpotion,
    // rank III
    hyperpotion, guerison
}


 export { allItems }

