const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

let isCircleTurn;

// Combinações de Vitória
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Inicio do Jogo
function startGame() {
    isCircleTurn = false;

    for (const cell of cellElements) {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessage.classList.remove("show-winning-message");
}

// Fim do Jogo
function endGame(isDraw) {
    if (isDraw) {
        winningMessageTextElement.innerText = "Empate!";
    }else {
        winningMessageTextElement.innerText = isCircleTurn
            ? "O Venceu!"
            : "X Venceu!";
    }

    winningMessage.classList.add("show-winning-message");
}

// Checar Vencedor
function checkForWin(currentPlayer) {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
}

// Checar Empate
function checkForDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
}

// Remover ou Adicionar o X ou o Círculo
function setBoardHoverClass() {
    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    }else {
        board.classList.add("x");
    }
}

// Trocar Turnos
function swapTurns() {
    isCircleTurn = !isCircleTurn;
    setBoardHoverClass();
}

// Ao Clicar
function handleClick(e) {
    // Colocar a marca (X ou Círculo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    cell.classList.add(classToAdd);

    // Verificar por vitória
    const isWin = checkForWin(classToAdd);

    // Verificar por empate
    const isDraw = checkForDraw();

    if (isWin) {
        endGame(false);
    }else if(isDraw){
        endGame(true)
    }else {
    // Mudar o símbolo
    swapTurns();
    }
};
// Iniciar o jogo
startGame();

// Reiniciar
restartButton.addEventListener("click", startGame)