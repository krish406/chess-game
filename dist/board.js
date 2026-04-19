let boardDisplay = document.getElementsByClassName('board')[0];
let board = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];
function createBoard(board) {
    for (let i = 0; i < 8; i++) {
        let parity_i = i % 2;
        for (let j = 0; j < 8; j++) {
            let parity_j = j % 2;
            const square = document.createElement("div");
            square.style.width = "85px";
            square.style.height = "85px";
            square.setAttribute("row", `${i}`);
            square.setAttribute("col", `${j}`);
            square.textContent = board[i]?.[j] ?? " ";
            square.style.fontSize = "80px";
            square.style.textAlign = "center";
            if (parity_i == parity_j) {
                square.style.backgroundColor = "#fffce7";
            }
            else {
                square.style.backgroundColor = "#de9377";
            }
            boardDisplay.appendChild(square);
        }
    }
}
createBoard(board);
export {};
//# sourceMappingURL=board.js.map