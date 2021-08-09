let gamestate = true
let keySelected = 0

let gameboard = document.querySelector('.gameboard')
console.log(gameboard)
//Initialize the gameboard with 3x3 larger blocks
//and 3x3 small blocks in each larger blocks
//then initialize the keyboard
function initBoard() {
  //initialize big blocks
  for (let i = 0; i < 9; i++) {
    let block = document.createElement('div')
    block.classList.add('bigBlock')
    if (i % 2 == 0) {
      block.style.backgroundColor = 'darkgray'
    } else if (i % 2 == 1) {
      block.style.backgroundColor = 'gray'
    }

    gameboard.appendChild(block)
  }
  //initialize small blocks
  let largerBlocks = gameboard.children
  for (let i = 0; i < largerBlocks.length; i++) {
    for (let j = 0; j < 9; j++) {
      let block = document.createElement('button')
      block.classList.add('block')
      if (j % 2 == 0) {
        block.style.backgroundColor = 'darkgray'
      } else if (j % 2 == 1) {
        block.style.backgroundColor = 'gray'
      }
      //block.innerHTML = `${j}`
      largerBlocks[i].appendChild(block)
    }
  }
  //initialize keyboard blocks
  let keyboard = document.querySelector('.keyboard')
  for (let i = 0; i < 10; i++) {
    let block = document.createElement('button')
    block.classList.add('keyblock')
    if (i % 2 == 0) {
      block.style.backgroundColor = 'darkgray'
    } else if (i % 2 == 1) {
      block.style.backgroundColor = 'gray'
    }
    block.innerHTML = `${i + 1}`
    keyboard.appendChild(block)
  }
  keyboard.children[9].innerHTML = 'X'
}
//test function to familiar with js selector
function backgroundTest() {
  let keys = document.querySelectorAll('.keyblock')
  for (let i = 0; i < keys.length; i++) {
    //   keys[i].style.backgroundColor = 'darkgray'
  }
}
initBoard()
backgroundTest()
//checkwrong will makes any wrong answer red and return the wrong value
//not used anymore.
function checkWrong1() {
  //check each bigblock if it has duplicate numbers
  let bigblocks = document.querySelectorAll('.bigBlock')
  let checkbox = []
  for (let i = 0; i < 9; i++) {
    checkbox = []
    for (let j = 0; j < 9; j++) {
      if (checkbox.includes(gameArray[i][j])) {
        if (bigblocks[i].children[j].classList.contains('preFilled')) {
        } else {
          bigblocks[i].children[j].style.color = 'red'
          console.log([i, j])
          return [i, j]
        }
      } else if (gameArray[i][j] != 0) {
        checkbox.push(gameArray[i][j])
      }
    }
  }
}

//new simpilified checkwrong with filter function
function checkWrong() {
  let bigblocks = document.querySelectorAll('.bigBlock')
  let duplicas = []
  for (let i = 0; i < 9; i++) {
    let duplicatesArray = checkDuplicates(gameArray[i])

    if (duplicatesArray.length > 0) {
      for (let j = 0; j < 9; j++) {
        if (gameArray[i][j] == duplicatesArray[0]) {
          bigblocks[i].children[j].style.color = 'red'
          duplicas.push([i, j])
        }
      }
      console.log(duplicas)
      return duplicas
    }
  }
}
//check duplicate of an array return duplicated numbers in an array
function checkDuplicates(array) {
  let result = array.filter((value, index) => {
    return array.indexOf(value) != index && value != 0
  })
  return result
}

//checkwin checks winning situation
function checkWin() {}
//pre-fill the board and add preFilled class to them
let preFillEasy = [
  [0, 4, 0, 0, 0, 5, 6, 3, 0],
  [5, 0, 0, 6, 0, 9, 0, 2, 7],
  [0, 7, 0, 8, 3, 1, 5, 4, 0],
  [7, 0, 4, 0, 6, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 3, 0, 0, 6],
  [0, 0, 6, 2, 8, 4, 0, 5, 0],
  [3, 8, 7, 0, 0, 0, 5, 1, 6],
  [0, 0, 0, 1, 0, 5, 0, 0, 0],
  [4, 0, 0, 0, 0, 3, 9, 2, 0]
]
function prefill(array) {
  let bigblocks = document.querySelectorAll('.bigBlock')
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (array[i][j] != 0) {
        bigblocks[i].children[j].innerHTML = array[i][j]
        bigblocks[i].children[j].classList.add('preFilled')
      }
    }
  }
}
prefill(preFillEasy)
// use gameArray to track game status
let gameArray = preFillEasy

//Add 'click' eventlisteners to keyboard store it's value in a variable
// and highlight the selected value.
let keyBlocks = document.querySelectorAll('.keyblock')
for (let i = 0; i < 10; i++) {
  keyBlocks[i].addEventListener('click', () => {
    keySelected = i + 1
    keyBlocks.forEach((element) => {
      element.style.color = 'black'
    })

    keyBlocks[i].style.color = 'yellowgreen'
  })
}

//fillin the blocks when clicked with selected value
//this also updates the gamestatus and checking winning situation.

let bigblocks = document.querySelectorAll('.bigBlock')
let baiscBlocks = document.querySelectorAll('.block')

for (let i = 0; i < bigblocks.length; i++) {
  for (let j = 0; j < 9; j++) {
    bigblocks[i].children[j].addEventListener('click', (e) => {
      if (
        gamestate == true &&
        bigblocks[i].children[j].classList.contains('preFilled') == false
      ) {
        if (keySelected != 0 && keySelected != 10) {
          gameArray[i][j] = keySelected
          bigblocks[i].children[j].style.color = 'orange'
          bigblocks[i].children[j].innerHTML = keySelected
          checkWrong()
          gameArray[i][j] = keySelected
          // set up delete button and unred the blocks that has no duplicates
        } else if (keySelected == 10) {
          baiscBlocks.forEach((element) => {
            element.style.color = 'black'
          })
          bigblocks[i].children[j].innerHTML = ''
          bigblocks[i].children[j].style.color = 'black'
          gameArray[i][j] = 0
          checkWrong()
        }
      }
    })
  }
}
