import { updateHp } from "../displayMove.js"
import { showNotif } from "../displayText.js"
import { displayTeam } from "./displayTeam.js"

// display inventaire joueur
export function displayInventory(player, active = null, mode = 'use') {
    return new Promise((resolve) => {
        const wrapper = document.querySelector('.battlefield')
        
        const modal = document.createElement('div')
        modal.classList.add('modal-inventory')

        const title = document.createElement('h3')
        title.classList.add('modal-inventory__title')
        title.textContent = mode === 'replace' ? 'Remplacer un objet' : 'Inventaire'

        const itemsList = document.createElement('div')
        itemsList.classList.add('modal-inventory__list')

        // si inventaire vide
        if (!player.inventory || player.inventory.length === 0) {
            const msg = document.createElement('span')
            msg.classList.add('modal-inventory__empty')
            msg.textContent = 'Votre inventaire est vide'
            itemsList.appendChild(msg)

            // inventaire
        } else {
             player.inventory.forEach((item, index) => {
                const itemCard = document.createElement('div')
                itemCard.classList.add('modal-inventory__item')

                const img = document.createElement('img')
                img.src = item.img;
                img.alt = item.name;
                img.classList.add('modal-inventory__img')

                const info = document.createElement('div')
                info.classList.add('modal-inventory__info')

                const name = document.createElement('span')
                name.classList.add('modal-inventory__name')
                name.textContent = item.name;

                const desc = document.createElement('span')
                desc.classList.add('modal-inventory__desc')
                desc.textContent = item.desc

                info.append(name, desc)

                if (mode === 'replace') {
                    itemCard.classList.add('modal-victory__item-selectable')
                    itemCard.onClick = () => {
                        cleanUp()
                        resolve(item)
                    }
                } 

                else {
                    const useBtn = document.createElement('button')
                    useBtn.classList.add('modal-inventory__use-btn')
                    useBtn.textContent = 'Utiliser'
                  
                    // utiliser objet sur un pokemon choisi
                    useBtn.onclick = async () => {
                        modal.style.display = 'none'
    
                        const chosenPkmn = await displayTeam({
                            team: player.team,
                            current: active?.player || null,
                            title: 'Choisissez un Pokémon',
                            mode: 'applyItem',
                            onCancel: () => {
                                modal.style.display = 'flex'
                            }
                        })
                        
                        if (chosenPkmn) {
                            const canUse = item.canUse ? item.canUse(chosenPkmn) : true
    
                            // applique l'effet
                            if (canUse) {
                                const prevHp = chosenPkmn.prevHp
    
                                item.applyEffect(chosenPkmn)
    
                                const hpHealed = chosenPkmn.hp - prevHp
    
                                player.removeItem(item)
    
                                let message
                                if (item.category === 'stats' && hpHealed > 0) {
                                    message = `${chosenPkmn} retrouve son état normal !`
                                } else {
                                    message = `${item.name} utilisé sur ${chosenPkmn.name}.`
                                }
    
                                showNotif(message, 'success')
    
                                if (active && chosenPkmn === active.player) {
                                    updateHp(chosenPkmn, 'player')
                                }
    
                                cleanUp()
                                resolve(chosenPkmn)    
                            } else {
                                showNotif(`${item.name} ne peut pas être utilisé sur ${chosenPkmn.name}.`, 'error')
                                modal.style.display = 'flex'                       
                            }
                        } else {
                            modal.style.display = 'flex'
                            }
                        }
                        itemCard.append(img, info, useBtn)
                }
                itemsList.appendChild(itemCard)
            })
        }


        // fermer inventaire
        const closeBtn = document.createElement('button')
        closeBtn.classList.add('modal-inventory__close')
        closeBtn.textContent = 'Fermer'
        closeBtn.onclick = () => {
            cleanUp()
            resolve(null)
        }

        modal.append(title, itemsList, closeBtn)
        wrapper.appendChild(modal)

        function cleanUp() {
            modal.remove()
        }
    })
}

