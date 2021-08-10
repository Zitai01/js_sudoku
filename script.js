let messageBar = document.querySelector('#messageBar')
let levelButtons = document.querySelector('#levels')
messageBar.addEventListener('click', (e) => {
  if (messageBar.innerHTML == 'Start game!') {
    messageBar.innerHTML = 'Choos a difficulty:'
    levelButtons.style.display = 'flex'
  }
})
