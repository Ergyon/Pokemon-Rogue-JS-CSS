const trainers = []
let currentTrainer = 0

function startNextFight() {
    if (currentTrainer >= trainers.length) {
        console.log("Vous devenez Maitre Pokemon !")
        return
    }

    const enemy = trainers[currentTrainer]
    startNextFight(Player, enemy)
    currentTrainer++
}