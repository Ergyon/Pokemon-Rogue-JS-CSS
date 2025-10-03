import { getRandomPokemon } from "../config/randomizer.js"

export class Trainer {
    constructor({name, pokemons = [], items = [], img, gain=500, round=1}) {
        this. name = name
        this.team = pokemons
        this.items = items
        this.img = img
        this.gain = gain
        this.round = round
    }

    generateTeam(count = 2, rank= 1) {
        this.team = []
        for (let i = 0; i < count; i++) {
            const pkmn = (getRandomPokemon({rank}))
            this.team.push(pkmn)            
        }
    }

    choosePokemon() {
        const alive = this.team.find(pkmn => !pkmn.isKO())
        return alive || null
    }
}

const ROUND_GAINS = {
    1: 500,
    2: 650,
    3: 1000,
    4: 1500,
    5: 1000000
}

// Dresseurs
    // ROUND 1
const armin = new Trainer({
    name: 'Armin',
    img: '../../../assets/img/trainers/armin.png',
    round: 1
})
const charline = new Trainer({
    name: 'Charline',
    img: '../../../assets/img/trainers/charline.png',
    round: 1
})
const chloe = new Trainer({
    name: 'Chloé',
    img: '../../../assets/img/trainers/chloe.png',
    round: 1
})
const julie = new Trainer({
    name: 'Julie',
    img: '../../../assets/img/trainers/julie.png',
    round: 1
})
const steve = new Trainer({
    name: 'Steve',
    img: '../../../assets/img/trainers/steve.png',
    round: 1
})
const leo = new Trainer({
    name: 'Léo',
    img: '../../../assets/img/trainers/leo.png',
    round: 1
})

    // ROUND 2
const axel = new Trainer({
    name: 'Axel',
    img: '../../../assets/img/trainers/axel.png',
    round: 2
})
const brice = new Trainer({
    name: 'Brice',
    img: '../../../assets/img/trainers/brice.png',
    round: 2
})
const lou = new Trainer({
    name: 'Lou',
    img: '../../../assets/img/trainers/lou.png',
    round: 2
})
const chad = new Trainer({
    name: 'Chad',
    img: '../../../assets/img/trainers/chad.png',
    round: 2
})
const jessy = new Trainer({
    name: 'Jessy',
    img: '../../../assets/img/trainers/Jessy.png',
    round: 2
})
const zoe = new Trainer({
    name: 'Zoé',
    img: '../../../assets/img/trainers/zoe.png',
    round: 2
})


    // ROUND 3
const noemie = new Trainer({
    name: 'Noémie',
    img: '../../../assets/img/trainers/noemie.png',
    round: 3
})
const ondine = new Trainer({
    name: 'Ondine',
    img: '../../../assets/img/trainers/ondine.png',
    round: 3
})
const teamrocket = new Trainer({
    name: 'Jessy & James',
    img: '../../../assets/img/trainers/team-rocket.png',
    round: 3
})
const serena = new Trainer({
    name: 'Serena',
    img: '../../../assets/img/trainers/serena.png',
    round: 3
})
const gary = new Trainer({
    name: 'Gary',
    img: '../../../assets/img/trainers/gary.png',
    round: 3
})
const malcolm = new Trainer({
    name: 'Malcolm',
    img: '../../../assets/img/trainers/malcolm.png',
    round: 3
})

    // ROUND 4
const fiona = new Trainer({
    name: 'Fiona',
    img: '../../../assets/img/traines/fiona.png',
    round: 4
})
const marianne = new Trainer({
    name: 'Marianne',
    img: '../../../assets/img/trainers/marianne.png',
    round: 4
})
const mathis = new Trainer({
    name: 'Mathis',
    img: '../../../assets/img/trainers/mathis.png',
    round: 4
})
const regis = new Trainer({
    name: 'Régis',
    img: '../../../assets/img/trainers/regis.png',
    round: 4
})

    // ROUND 5 BOSS
const profchen = new Trainer({
    name: 'Prof Chen',
    img: '../../../assets/img/trainers/prof-chen.png',
    round: 5
})
const sacha = new Trainer({
    name: 'Sacha',
    img: '../../../assets/img/trainers/sacha.png',
    round: 5
})
const cynthia = new Trainer({
    name: 'Cynthia',
    img: '../../../assets/img/trainers/cynthia.png',
    round: 5
})


const allTrainers = [
    // I
    armin, charline, chloe, julie, steve, leo,
    // II
    axel, brice, lou, chad, jessy, zoe,
    // III
    ondine, serena, teamrocket, noemie, zoe, gary, malcolm,
    // IV
    fiona, marianne, mathis, regis,
    // BOSS
    profchen, sacha, cynthia
]

export { allTrainers }

