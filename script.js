let messageBar = document.querySelector('#messageBar')
let levelButtons = document.querySelector('#levels')

//A liitle bit of animate
let x = 1
let y = 1
if (messageBar.innerHTML == 'Press here to start the game!') {
  setInterval(() => {
    if (x >= -1) {
      x -= 0.02
    }
    if (x <= -1) {
      x = 1
    }

    messageBar.style.color = `rgba(184,241,27,${Math.abs(x)})`
  }, 30)
}

//eventlisner for messageBars

messageBar.addEventListener('click', (e) => {
  if (messageBar.innerHTML == 'Press here to start the game!') {
    clearInterval(`1`)
    messageBar.style.color = `rgba(184, 241, 27,1)`
    messageBar.innerHTML = 'Choos a difficulty:'
    levelButtons.style.display = 'flex'
  }
})
