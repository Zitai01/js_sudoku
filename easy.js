let gamestate = true
let keySelected = 0
//pre-fill the board and add preFilled class to them
/*
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
*/
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
let gameArray = winningboard
let preFillEasy = winningboard
// use gameArray to track game status
/*
let gameArray = [
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
*/
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

initBoard()

//not used anymore.
/*function checkWrong1() {
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
*/
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
  //check each row and column for duplicates
  //let row = rows()
  //let column = columns()

  //convert single 81 array to 9 row's array
  // let rowArray =gameArray
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
          console.log(k)
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
          console.log(k)
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
    smallblocks.forEach((element) => {
      element.style.color = 'green'
    })
    return true
  }
}

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
          if (
            bigblocks[i].children[j].classList.contains('userSelected') == false
          ) {
            bigblocks[i].children[j].classList.add('userSelected')
          }
          bigblocks[i].children[j].innerHTML = keySelected
          updatesArrays()
          checkWrong()
          checkWin()
          // gameArray[i][j] = keySelected
          // set up delete button and unred the blocks that has no duplicates
        } else if (keySelected == 10) {
          bigblocks[i].children[j].innerHTML = ''
          bigblocks[i].children[j].style.color = 'black'
          gameArray[i][j] = 0
          console.log(gameArray)

          bigblocks[i].children[j].classList.remove('userSelected')
          baiscBlocks.forEach((element) => {
            if (element.classList.contains('userSelected') == false) {
              element.style.color = 'black'
            } else if (element.classList.contains('userSelected') == true) {
              //            element.style.color = 'orange'
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
//testing stuff
