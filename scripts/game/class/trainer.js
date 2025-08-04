import { getRandomPokemon } from "../config/randomizer"

export class Trainer {
    constructor(name, pokemons = [], items = [], img) {
        this. name = name
        this.team = pokemons
        this.items = items
        this.img = img
    }

    generateTeam(count = 2, rank= 1) {
        for (let i = 0; i < count; i++) {
            this.team.push(getRandomPokemon({rank}))
        }
    }

    choosePokemon() {
        return this.team.find(pkmn => !pkmn.isKO())
    }
}

