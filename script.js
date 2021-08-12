//eventlisner for messageBars
let messageBar = document.querySelector('#messageBar')
let levelButtons = document.querySelector('#levels')
messageBar.addEventListener('click', (e) => {
  if (messageBar.innerHTML == 'Press here to start the game!') {
    messageBar.innerHTML = 'Choos a difficulty:'
    levelButtons.style.display = 'flex'
  }
})

//A liitle bit of animate
let x =1
let y =`rgba(0,0,0,${x})`
if (messageBar.innerHTML='Press here to start the game!'){
    if (x ==1)
    let blinking = ()=>{
        setInterval(() => {
            
            x= x - 0.05

            messageBar.style.color ==y
        }, 500);

    }
}
