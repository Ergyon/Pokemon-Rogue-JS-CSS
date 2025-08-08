
// Bulle principale de textes
export function displayMessages(messages, {
    onDone = null,
    autoClose = false,
    modalClass = 'modal-messages',
    textClass = 'modal-messages__txt',
    nextClass = 'modal-messages__next',
    charDelay = 20
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
    next.disabled = true
    next.style.visibility = 'hidden'

    modal.append(text, next)
    document.body.appendChild(modal)

    let resolveRef = () => {}
    let typing = false

    // text typing
    async function typeText(chars) {
        typing = true
        next.disabled = true
        next.style.visibility = 'hidden'
        text.textContent = ''
        for (let i = 0; i < chars.length; i++) {
            text.textContent += chars[i]
            await new Promise(r => setTimeout(r, charDelay))
        }
        typing = false
        next.disabled = false
        next.style.visibility = 'visible'
    }

    // passer le texte
    function advance() {
        if (typing) return
        index++
        if (index >= messages.length) {
            finish()
        } else {
            typeText(messages[index])
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

    typeText(messages[index])
    next.addEventListener('click', advance)
    document.addEventListener('keydown', onKey)

    // nettoyer
    const cleanUp = () => {
        next.removeEventListener('click', advance)
        document.removeEventListener('keydown', onKey)
        if (autoClose || index >= messages.length) modal.remove()
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