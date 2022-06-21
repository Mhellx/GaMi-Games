var board = []; // Matriz
var rows = 8; // Linhas
var columns = 8; // Colunas

var minesCount = 5; // Minas
var minesLocation = []; // "1-1", "2-4", "3-5"

var tilesClicked = 0; // Quadrados clicados
var flagEnabled = false; // Bandeira

var gameOver = false;

window.onload = function(){
    startGame();
}

function startGame() {
    document.getElementById("mines-count").innerText = minesCount;

    for(let r = 0; r < rows; r++) {
        let row = [];
        for(let c = 0; c < columns; c++){
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}