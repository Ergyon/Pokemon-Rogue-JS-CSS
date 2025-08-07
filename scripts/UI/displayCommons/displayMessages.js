import { allTextes } from "../../datas/text"

export function displayMessages(index) {
    const wrapper = document.createElement(div)
    wrapper.classlist.add('modal-messages')

    const content  = document.createElement('div')
    content.classList.add('modal-messages__content')

    const text = document.createElement('p')
    text.classList.add('modal-messages__content__txt')
    text.textContent = allTextes[index.text]

    const nextBtn = document.createElement('button')
    nextBtn.classlist.add('modal-messages__next')
    nextBtn.textContent = '>'

    nextBtn.addEventListener('click', () => {
        text.textContent = ''
        index++
        text.textContent = allTextes[index.text]
    })

    if (index > allTextes.length) return
}