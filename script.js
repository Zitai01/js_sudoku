let messageBar = document.querySelector('#messageBar')
let levelButtons = document.querySelector('#levels')
messageBar.addEventListener('click', (e) => {
  if (messageBar.innerHTML == 'Press here to start the game!') {
    messageBar.innerHTML = 'Choos a difficulty:'
    levelButtons.style.display = 'flex'
  }
})
