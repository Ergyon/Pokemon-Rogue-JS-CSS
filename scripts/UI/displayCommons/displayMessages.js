
// Bulle principale de textes
export function displayMessages(messages, {
    onDone = null,
    autoClose = false,
    modalClass = 'modal-messages',
    textClass = 'modal-messages__txt',
    nextClass = 'modal-messages__next'
} = {}) {
    
    let index = 0
    
    // bulle texte
    const modal = document.createElement('div')
    modal.classList.add(modalClass)

    const text = document.createElement('p')
    text.classList.add(textClass)
    text.textContent = messages[index]

    const next = document.createElement('button')
    next.classList.add(nextClass)
    next.textContent = '▶'

    modal.append(text, next)
    document.body.appendChild(modal)

    let resolveRef = () => {}

    // passer le texte
    function advance() {
        index++
        if (index >= messages.length) {
            finish()
        } else {
            text.textContent = messages[index]
        }
    }

    // handlers 
    const onKey = (e) => {
        if (e.repeat) return
        if (e.code === 'Enter' || e.code === 'Space') {
            e.preventDefault()
            advance()
        }
    }

    next.addEventListener('click', advance)
    document.addEventListener('keydown', onKey)

    // nettoyer
    const cleanUp = () => {
        next.removeEventListener('click', onClickAdvance)
        document.removeEventListener('keydown', onKey)
        if (autoClose) modal.remove()
    }

    // fin des textes
    function finish() {
        cleanUp()
        if (typeof onDone === 'function') {
            onDone()
        }
        resolveRef()
    }

    return new Promise((resolve) => {
        resolveRef = resolve
    })
}