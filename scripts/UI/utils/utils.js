// delay pour boucle tour
export function delay(ms) {
    return new Promise(resume => setTimeout(resume, ms))
}
