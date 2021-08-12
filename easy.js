let gamestate = true
let keySelected = 0
let userScore = 0
let scoreBar = document.querySelector('.scoreBar')
let popupBar = document.querySelector('.popup')
const apiDOmain = 'https://sugoku.herokuapp.com/'
let difficulty = 'easy'
let gameboard = document.querySelector('.gameboard')
let emptyboard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let gameArray = emptyboard

let easy1 = [
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

let winningboard = [
  [9, 4, 8, 2, 7, 5, 6, 3, 1],
  [5, 3, 1, 6, 4, 9, 8, 2, 7],
  [6, 7, 2, 8, 3, 1, 5, 4, 9],
  [7, 5, 4, 1, 6, 9, 8, 2, 3],
  [2, 1, 8, 7, 5, 3, 4, 9, 6],
  [3, 9, 6, 2, 8, 4, 1, 5, 7],
  [3, 8, 7, 4, 9, 2, 5, 1, 6],
  [9, 6, 2, 1, 8, 5, 3, 7, 4],
  [4, 1, 5, 7, 6, 3, 9, 2, 0]
]
let easy2 = [
  [0, 0, 0, 1, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 6, 0, 0, 3, 0],
  [0, 0, 0, 5, 0, 8, 0, 0, 6],
  [0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 6, 0, 0, 1, 7, 0, 4],
  [0, 8, 0, 0, 6, 2, 1, 3, 5],
  [7, 0, 2, 8, 0, 1, 9, 0, 5],
  [0, 1, 8, 9, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 5, 7, 8, 0, 1]
]
let easy3 = [
  [0, 0, 0, 1, 0, 0, 6, 0, 0],
  [0, 0, 0, 0, 0, 8, 4, 0, 0],
  [0, 0, 0, 0, 7, 0, 1, 2, 3],
  [0, 1, 0, 4, 5, 6, 7, 0, 9],
  [5, 4, 0, 0, 0, 0, 0, 0, 2],
  [0, 9, 8, 2, 0, 0, 0, 5, 6],
  [5, 0, 3, 0, 0, 0, 9, 0, 1],
  [0, 8, 1, 0, 2, 4, 3, 0, 0],
  [0, 0, 7, 3, 1, 0, 0, 0, 0]
]

let medium1 = [
  [0, 0, 0, 0, 2, 3, 0, 0, 0],
  [0, 8, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 1, 4, 3, 0, 5, 6, 8, 0],
  [0, 6, 0, 2, 9, 8, 0, 1, 0],
  [0, 0, 8, 0, 0, 6, 0, 2, 0],
  [5, 3, 0, 0, 4, 0, 0, 9, 0],
  [8, 4, 6, 9, 3, 1, 0, 7, 2],
  [0, 7, 2, 8, 0, 0, 4, 3, 0]
]

let medium2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 3, 0, 7],
  [0, 0, 3, 7, 0, 9, 0, 2, 0],
  [0, 2, 3, 4, 5, 0, 8, 9, 0],
  [0, 0, 5, 7, 0, 0, 0, 1, 3],
  [0, 0, 7, 2, 0, 1, 0, 0, 5],
  [3, 1, 0, 5, 0, 0, 0, 0, 8],
  [0, 7, 8, 0, 0, 0, 0, 0, 4],
  [0, 4, 0, 3, 7, 0, 0, 1, 2]
]

let medium3 = [
  [0, 0, 2, 0, 0, 0, 0, 8, 0],
  [0, 9, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 9, 2, 0, 0],
  [0, 0, 0, 5, 4, 7, 0, 9, 8],
  [0, 0, 0, 3, 0, 9, 0, 0, 0],
  [0, 9, 0, 0, 0, 2, 3, 4, 0],
  [0, 2, 1, 8, 6, 0, 0, 7, 5],
  [5, 6, 0, 9, 0, 1, 0, 3, 0],
  [9, 8, 0, 0, 7, 0, 6, 0, 1]
]

let hard1 = [
  [0, 0, 0, 0, 3, 0, 6, 0, 8],
  [7, 0, 0, 0, 0, 6, 3, 5, 0],
  [5, 0, 0, 7, 8, 9, 0, 0, 4],
  [0, 0, 0, 4, 0, 6, 7, 8, 0],
  [0, 6, 0, 8, 9, 0, 0, 0, 3],
  [0, 0, 7, 2, 0, 3, 0, 0, 0],
  [0, 0, 1, 5, 6, 2, 8, 0, 0],
  [6, 0, 2, 9, 8, 0, 0, 3, 1],
  [0, 0, 0, 0, 7, 0, 6, 0, 0]
]
let hard2 = [
  [2, 0, 6, 1, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 1, 0, 7, 8, 2, 0, 0],
  [0, 1, 0, 0, 5, 0, 6, 0, 8],
  [4, 0, 6, 8, 0, 1, 3, 0, 0],
  [0, 8, 0, 0, 6, 0, 1, 5, 4],
  [0, 2, 0, 8, 0, 0, 0, 0, 0],
  [6, 0, 3, 0, 1, 5, 0, 8, 0],
  [8, 0, 5, 0, 0, 7, 4, 1, 3]
]
let hard3 = [
  [3, 0, 0, 1, 2, 0, 5, 0, 0],
  [1, 0, 0, 3, 0, 8, 2, 7, 0],
  [0, 0, 0, 0, 7, 9, 0, 0, 4],
  [0, 0, 3, 0, 5, 0, 8, 9, 0],
  [0, 0, 0, 0, 9, 1, 0, 2, 3],
  [8, 0, 7, 0, 6, 3, 4, 1, 0],
  [6, 0, 1, 0, 0, 5, 9, 8, 2],
  [5, 0, 0, 0, 0, 2, 6, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 5, 0]
]
//prefill the board with difficuly setting of the page
initBoard()
let titles = document.querySelector('title')

if (titles.innerHTML == `Sudoku Medium`) {
  difficulty = `medium`
  gameArray = medium1
  prefill(medium1)
  console.log(`medium level`)
} else if (titles.innerHTML == `Sudoku Hard`) {
  difficulty = `hard`
  gameArray = hard1
  prefill(hard1)
  console.log(`hard level`)
} else if (titles.innerHTML == `Sudoku Easy`) {
  difficulty = `easy`
  gameArray = winningboard
  prefill(winningboard)
}

let gameArray81 = convertgameArray(gameArray)

let rowArray = [
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
let columnArray = [
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
//get a random board from API,convert the board format into my format
// and restart the game with newboard
const replayButton = document.querySelector('.replay')
replayButton.addEventListener('click', async () => {
  const response =
    await axios.get(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}
    `)
  let random_board = response.data.board

  let new_board81 = []
  //transpose the board into the 81format
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let k =
        Math.floor(i / 3) * 27 + (i % 3) * 3 + Math.floor(j / 3) * 9 + (j % 3)
      new_board81[k] = random_board[i][j]
    }
  }

  //then transpose to my 9x9 format and updates the gameArray
  for (let i = 0; i < 81; i++) {
    let j = Math.floor(i / 9)
    let k = i % 9
    gameArray[j][k] = new_board81[i]
  }

  baiscBlocks.forEach((element) => {
    element.style.color = 'black'
    element.style.backgroundColor = 'darkgray'
  })

  updatesArrays()
  prefill(gameArray)
  popupBar.style.display = 'none'
  gamestate = true
})

//Initialize the gameboard with 3x3 larger blocks
//and 3x3 small blocks in each larger blocks
//then initialize the keyboard
function initBoard() {
  //initialize big blocks
  for (let i = 0; i < 9; i++) {
    let block = document.createElement('div')
    block.classList.add('bigBlock')

    block.style.backgroundColor = 'darkgray'

    gameboard.appendChild(block)
  }
  //initialize small blocks
  let largerBlocks = gameboard.children
  for (let i = 0; i < largerBlocks.length; i++) {
    for (let j = 0; j < 9; j++) {
      let block = document.createElement('button')
      block.classList.add('block')

      block.style.backgroundColor = 'darkgray'

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

//checkwrong will makes any conlict numbers red
//new simpilified checkwrong with filter function
function checkWrong() {
  let bigblocks = document.querySelectorAll('.bigBlock')
  let smallblocks = document.querySelectorAll('.block')
  //let duplicas = []
  //check each box
  for (let i = 0; i < 9; i++) {
    let duplicatesArray = checkDuplicates(gameArray[i])

    if (duplicatesArray.length > 0) {
      for (let j = 0; j < 9; j++) {
        if (gameArray[i][j] == duplicatesArray[0]) {
          bigblocks[i].children[j].style.color = 'red'

          //        duplicas.push([i, j])
        }
      }

      //     return duplicas
    }
  }

  //convert single 81 array to 9 row's array

  // check each row for duplicates and highlights the duplicates
  for (let i = 0; i < 9; i++) {
    let duplicatesrow = checkDuplicates(rowArray[i])
    if (duplicatesrow.length > 0) {
      for (let j = 0; j < 9; j++) {
        if (rowArray[i][j] == duplicatesrow[0]) {
          let k =
            Math.floor(i / 3) * 27 +
            (i % 3) * 3 +
            Math.floor(j / 3) * 9 +
            (j % 3)

          smallblocks[k].style.color = 'red'
        }
      }
    }
  }
  //check each column for duplicates and highlight them
  for (let i = 0; i < 9; i++) {
    let duplicatescolumn = checkDuplicates(columnArray[i])
    if (duplicatescolumn.length > 0) {
      for (let j = 0; j < 9; j++) {
        if (columnArray[i][j] == duplicatescolumn[0]) {
          let k =
            Math.floor(j / 3) * 27 +
            (j % 3) * 3 +
            Math.floor(i / 3) * 9 +
            (i % 3)

          smallblocks[k].style.color = 'red'
        }
      }
    }
  }
}

function updatesArrays() {
  gameArray81 = convertgameArray(gameArray)

  for (let i = 0; i < 81; i++) {
    let j = Math.floor(i / 9)
    let k = i % 9
    rowArray[j][k] = gameArray81[i]
    columnArray[k][j] = gameArray81[i]
  }
}
// define row array
function rows() {
  // let allboard = document.querySelectorAll('.block')
  let row = [[], [], [], [], [], [], [], [], []]
  for (let i = 0; i < 81; i++) {
    if (i % 9 < 3) {
      row[Math.floor(i / 27) * 3].push(i)
    } else if (i % 9 < 6 && i % 9 > 2) {
      row[Math.floor(i / 27) * 3 + 1].push(i)
    } else if (i % 9 >= 6) {
      row[Math.floor(i / 27) * 3 + 2].push(i)
    }
  }

  return row
}
//let rowexample = rows()
//console.log(rowexample)
// define column array
function columns() {
  let columns = [[], [], [], [], [], [], [], [], []]
  let row = rows()
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      columns[i].push(row[j][i])
    }
  }
  return columns
}

//check duplicate of an array return duplicated numbers in an array
function checkDuplicates(array) {
  let newArray = [...array]
  let result = array.filter((value, index) => {
    return newArray.indexOf(value) != index && value != 0
  })
  return result
}
//convert 9box x 9 box  arrays in to a single 81 element array.
function convertgameArray(array) {
  let newArray = []
  let row1 = rows()
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (row1[i][j] < 9) {
        newArray.push(array[0][row1[i][j]])
      } else if (row1[i][j] >= 9) {
        let k = Math.floor(row1[i][j] / 9)
        let m = row1[i][j] % 9
        newArray.push(array[k][m])
      }
    }
  }
  return newArray
}

//checkwin checks winning situation
function checkWin() {
  let smallblocks = document.querySelectorAll('.block')
  checkWrong()
  /* 
    Check if there is any red block, if there is no red block and you fillout all blocks
    you win the game ,return a boolean
    */
  function allRed(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].style.color == 'red') {
        return false
      }
    }
    return true
  }
  //check win
  for (let i = 0; i < 81; i++) {
    if (smallblocks[i].innerHTML === '') {
      return false
    }
  }
  if (allRed(smallblocks) == true) {
    console.log('You win')
    userScore += 1
    scoreBar.innerHTML = 'Score: ' + `${userScore}`

    smallblocks.forEach((element) => {
      element.style.color = 'green'
    })
    gamestate = false
    setTimeout(() => {
      popupBar.style.display = 'flex'
    }, 300)

    return true
  }
}
//prefill or refill the board with array or array(in a special format).
function prefill(array) {
  let bigblocks = document.querySelectorAll('.bigBlock')
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      bigblocks[i].children[j].innerHTML = ''
      if (bigblocks[i].children[j].classList.contains('preFilled')) {
        bigblocks[i].children[j].classList.remove('preFilled')
      }
      if (array[i][j] != 0) {
        bigblocks[i].children[j].innerHTML = array[i][j]
        bigblocks[i].children[j].classList.add('preFilled')
      }
    }
  }
}

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
//Add 'keydown' eventlisteners
let body = document.querySelector('body')
body.addEventListener('keydown', (e) => {
  for (let i = 1; i < 10; i++) {
    if (e.code == `Digit${i}`) {
      keySelected = i
      keyBlocks.forEach((element) => {
        element.style.color = 'black'
      })
      keyBlocks[i - 1].style.color = 'yellowgreen'
    } else if (e.code == 'Backquote') {
      keySelected = 10
      keyBlocks.forEach((element) => {
        element.style.color = 'black'
      })
      keyBlocks[9].style.color = 'yellowgreen'
    }
  }
})
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
          if (gameArray[i][j] != 0) {
            gameArray[i][j] = keySelected
            baiscBlocks.forEach((element) => {
              if (element.classList.contains('userSelected') == false) {
                element.style.color = 'black'
              } else if (element.classList.contains('userSelected') == true) {
                element.style.color = 'orange'
              }
            })
          }

          gameArray[i][j] = keySelected

          baiscBlocks[i * 9 + j].style.backgroundColor = 'rgba(255,165,0,0.2)'

          bigblocks[i].children[j].style.color = 'orange'
          if (
            bigblocks[i].children[j].classList.contains('userSelected') == false
          ) {
            bigblocks[i].children[j].classList.add('userSelected')
          }
          bigblocks[i].children[j].innerHTML = keySelected
          updatesArrays()
          checkWrong()
          checkWin()

          // set up delete button and unred the blocks that has no duplicates
        } else if (keySelected == 10) {
          bigblocks[i].children[j].innerHTML = ''
          bigblocks[i].children[j].style.color = 'black'
          gameArray[i][j] = 0

          baiscBlocks[i * 9 + j].style.backgroundColor = 'darkgray'
          bigblocks[i].children[j].classList.remove('userSelected')
          baiscBlocks.forEach((element) => {
            if (element.classList.contains('userSelected') == false) {
              element.style.color = 'black'
            } else if (element.classList.contains('userSelected') == true) {
              element.style.color = 'orange'
            }
          })
          updatesArrays()
          checkWrong()
          checkWin()
        }
      }
    })
  }
}
//Creative mode, build your own sudoku ~~
let creativeButton = document.querySelector('.creative')

creativeButton.addEventListener('click', () => {
  gameArray = emptyboard
  prefill(gameArray)
})
//eventlistner for levels button and it's exit
let chooseLevel = document.querySelector('.selectLevel')
let popupLevel = document.querySelector('.popupLevel')
let exitPopup = document.querySelector('.displayNone')
chooseLevel.addEventListener('click', () => {
  popupLevel.style.display = 'block'
})
exitPopup.addEventListener('click', () => {
  popupLevel.style.display = 'none'
})
