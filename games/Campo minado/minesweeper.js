document.addEventListener('contextmenu', event => event.preventDefault());
var board = []; // Matriz
var rows = 8; // Linhas
var columns = 8; // Colunas

var minesCount = 5; // Minas
var minesLocation = []; // "1-1", "2-4", "3-5"

var tilesClicked = 0; // Quadrados clicados
var flagEnabled = false; // Bandeira

var gameOver = false;

const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

window.onload = function(){
    startGame();
}

// Gerar Minas
function setMines() {
    let minesLeft = minesCount;
    while (minesLeft > 0) {
        let r = Math.floor(Math.random()* rows);
        let c = Math.floor(Math.random()* columns);
        let id = r.toString() + "-" + c.toString();

        if(!minesLocation.includes(id)){
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}

function startGame() {
    document.getElementById("mines-count").innerText = minesCount;
    document.getElementById("flag-button").addEventListener("click", setFlag);
    document.addEventListener("mousedown", function(e) {
        switch(e.buttons) {
          case 1: 
              console.log("Left button")
            break
          case 2:
            setFlag();
            return;
        }
    });
    setMines();
    
    //Cria o quadro
    for(let r = 0; r < rows; r++) {
        let row = [];
        for(let c = 0; c < columns; c++){
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function setFlag(){
    if (flagEnabled){
        flagEnabled = false;
        document.getElementById("flag-button").classList.remove("flagEnable");
    }
    else {
        flagEnabled = true;
        document.getElementById("flag-button").classList.add("flagEnable");
    }
}

function clickTile() {
    if(gameOver || this.classList.contains("tile-clicked")){
        return;
    }

    let tile = this;
    if (flagEnabled) {
        if (tile.innerText == "") {
            tile.innerText = "🚩";
            tile.classList.add("flag");
        }
        else if (tile.innerText == "🚩") {
            tile.innerText = "";
            tile.classList.remove("flag");
        }
        return;
    }
    if(this.classList.contains("flag")){
        return;
    }

    // GAME OVER
    if (minesLocation.includes(tile.id)) {
        gameOver = true;
        revealMines();
        winningMessageTextElement.innerText = "Explodiu!";
        winningMessage.classList.add("show-winning-message");
        return;
    }

    let coords = tile.id.split("-"); // "0-0" -> ["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);
}

function revealMines(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let tile = board[r][c];
            if(minesLocation.includes(tile.id)){
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";
            }
        }
    }
}

function checkMine(r, c) {
    if(r < 0 || r >= rows || c < 0 || c >= columns){
        return;
    }
    if(board[r][c].classList.contains("tile-clicked")){
        return;
    }

    board[r][c].classList.add("tile-clicked");
    tilesClicked += 1;

    let minesFound = 0;

    // checar minas

    // topo
    minesFound += checkTile(r-1, c-1); // topo esquerdo
    minesFound += checkTile(r-1, c); // meio
    minesFound += checkTile(r-1, c+1); // top direito

    // direita e esquerda
    minesFound += checkTile(r, c+1); // direita
    minesFound += checkTile(r, c-1); // esquerda

    // inferior
    minesFound += checkTile(r+1, c-1); // inferior esquerdo
    minesFound += checkTile(r+1, c); // meio
    minesFound += checkTile(r+1, c+1); // inferior direito

    if(minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString());
    }
    else{
        // topo
        checkMine(r-1, c-1); // topo esquerdo
        checkMine(r-1, c); // topo
        checkMine(r-1, c+1); // topo direito

        // direita e esquerda
        checkMine(r, c+1); // direita
        checkMine(r, c-1); // esquerda

        // inferior
        checkMine(r+1, c-1); // inferior esquerdo
        checkMine(r+1, c); // meio
        checkMine(r+1, c+1); // inferior direito
    }

    if(tilesClicked == rows * columns - minesCount){
        document.getElementById("mines-count").innerText = "Limpo!";
        winningMessageTextElement.innerText = "Limpo!";
        gameOver = true;
        winningMessage.classList.add("show-winning-message");
    }
}

function checkTile(r, c){
    if(r < 0 || r >= rows || c < 0 || c >= columns){
        return 0;
    }
    if(minesLocation.includes(r.toString()+ "-" + c.toString())){
        return 1;
    }
    return 0;
}