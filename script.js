const text = document.getElementById("text")
const cells = document.querySelectorAll(".btn")

let turn

function move(turn) {
    for(let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            if (turn == "X") {
                cells[i].innerHTML = "X"
                turn = "O"
            }
            else {
                cells[i].innerHTML = "O"
                turn = "X"
            }
            checkWinner(turn)
        })
    }
}

function checkWinner(turn) {
    if (turn == "X") turn = "O"
    else if (turn == "O") turn = "X"
    if (cells[0].innerHTML == turn && cells[1].innerHTML == turn && cells[2].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[3].innerHTML == turn && cells[4].innerHTML == turn && cells[5].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[6].innerHTML == turn && cells[7].innerHTML == turn && cells[8].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[0].innerHTML == turn && cells[3].innerHTML == turn && cells[6].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[1].innerHTML == turn && cells[4].innerHTML == turn && cells[7].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[2].innerHTML == turn && cells[5].innerHTML == turn && cells[8].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[0].innerHTML == turn && cells[4].innerHTML == turn && cells[8].innerHTML == turn) text.innerText = `${turn} Wins!`
    if (cells[2].innerHTML == turn && cells[4].innerHTML == turn && cells[6].innerHTML == turn) text.innerText = `${turn} Wins!`
}

move("X")