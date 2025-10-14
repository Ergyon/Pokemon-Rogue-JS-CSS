import { capitalize } from "../utils/utils.js"

// Fiche de details pokemon
export function showPokemonResume(pkmn) {
    return new Promise((resolve) =>  {
        const modal = document.createElement('div')
        modal.classList.add('pokemon-resume')

        const wrapper = document.createElement('div')
        wrapper.classList.add('pokemon-resume__wrapper')

        // infos pokemon
        const header = document.createElement('div')
        header.classList.add('pokemon-resume__header')

        const img = document.createElement('img')
        img.classList.add('pokemon-resume__img')
        img.src = pkmn.img
        img.alt = pkmn.name 

        const name = document.createElement('h4')
        name.classList.add('pokemon-resume__name')
        name.textContent = pkmn.name

        const type = document.createElement('span')
        type.classList.add('pokemon-resume__type', `type--${pkmn.type.toLowerCase()}`)
        type.textContent = capitalize(pkmn.type)

        const hp = document.createElement('span')
        hp.classList.add('pokemon-resume__hp')
        hp.textContent = `PV : ${pkmn.maxHP}`

        header.append(img, name, type, hp)
        
        // infos attaques
        const moveset = document.createElement('div')
        moveset.classList.add('pokemon-resume__moveset')

        pkmn.moves.forEach(move => {
            const moveCard = document.createElement('div')
            moveCard.classList.add('pokemon-resume__moveset__card')

            const headerCard = document.createElement('div')
            headerCard.classList.add('pokemon-resume__moveset__header')

            const moveName = document.createElement('span')
            moveName.classList.add('pokemon-resume__moveset__name')
            moveName.textContent = move.name

            const moveType = document.createElement('span')
            moveType.classList.add('pokemon-resume__moveset__type', `type--${move.type.toLowerCase()}`)
            moveType.textContent = capitalize(move.type)

            // stats
            const stats = document.createElement('div')
            stats.classList.add('pokemon-resume__moveset__stats')

            const pp = document.createElement('span')
            pp.classList.add('pokemon-resume__moveset__pp')
            pp.textContent = `PP : ${move.pp}/${move.maxPP}`

            const precis = document.createElement('span')
            precis.classList.add('pokemon-resume__moveset__stats')
            precis.textContent = `Précision : ${move.precision}`

            headerCard.append(moveName, moveType)
            stats.append(pp, precis)
            moveCard.append(headerCard, stats)
            moveset.appendChild(moveCard)
        })

        // fermer
        const close = document.createElement('button')
        close.classList.add('pokemon-resume__close')
        close.textContent = 'x'
        close.addEventListener('click', () => {
            modal.remove()
            resolve()
        })

        wrapper.append(header, moveset)
        modal.append(wrapper, close)
        document.body.appendChild(modal)
    })

}