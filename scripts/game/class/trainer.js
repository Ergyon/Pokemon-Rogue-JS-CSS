import { getRandomPokemon } from "../config/randomizer.js"

export class Trainer {
    constructor({name, pokemons = [], items = [], img, gain=500}) {
        this. name = name
        this.team = pokemons
        this.items = items
        this.img = img
        this.gain = gain
    }

    generateTeam(count = 2, rank= 1) {
        this.team = []
        for (let i = 0; i < count; i++) {
            const pkmn = (getRandomPokemon({rank}))
            console.log(`Ajouté à l'équipe de ${this.name} :`, pkmn.name);
            this.team.push(pkmn)            
        }
        console.log(`Équipe complète de ${this.name} :`, this.team);
    }

    choosePokemon() {
        const alive = this.team.find(pkmn => !pkmn.isKO())
        return alive || null
    }
}

// Dresseurs
const armin = new Trainer({
    name: 'Armin',
    img: '../../../assets/img/trainers/armin.jpg',
    gain: 600
})

const axel = new Trainer({
    name: 'Axel',
    img: '../../../assets/img/trainers/axel.jpg',
    gain: 700
})

const brice = new Trainer({
    name: 'Brice',
    img: '../../../assets/img/trainers/brice.jpg',
    gain: 800
})

const chad = new Trainer({
    name: 'Chad',
    img: '../../../assets/img/trainers/chad.jpg',
    gain: 900
})

const charline = new Trainer({
    name: 'Charline',
    img: '../../../assets/img/trainers/charline.jpg',
    gain: 1000
})


const allTrainers = [
    armin, axel, brice, chad, charline
]

export { allTrainers }

