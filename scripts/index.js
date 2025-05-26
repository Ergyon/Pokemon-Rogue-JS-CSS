
// Increase and decrease button
const increase = document.getElementById('increase-btn')
const resetBtn = document.getElementById('reset-btn')
const decrease = document.getElementById('decrease-btn')
const counterTxt = document.getElementById('counter-txt')
let counter = 0 

increase.addEventListener('click', () => {
    counter++
    counterTxt.textContent = counter
})

decrease.addEventListener('click', () => {
    counter--
    counterTxt.textContent = counter
})

resetBtn.addEventListener('click', () => {
    counter = 0
    counterTxt.textContent = counter
})

