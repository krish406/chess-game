import move from "./moves.js";
import { Piece, Pawn } from "./pieces.js";
export let board = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];
function addPiecesToBoard(board) {
    for (let x = 0; x < 8; x++) {
        const white_pawn = new Pawn("white", "♙", x, 6);
        if (board[6]) {
            board[6][x] = white_pawn;
        }
        const black_pawn = new Pawn("black", "♟", x, 1);
        if (board[1]) {
            board[1][x] = black_pawn;
        }
    }
}
function createBoard(board, boardDisplay) {
    for (let i = 0; i < 8; i++) {
        let parity_i = i % 2;
        for (let j = 0; j < 8; j++) {
            let parity_j = j % 2;
            const square = document.createElement("div");
            square.style.width = "85px";
            square.style.height = "85px";
            square.style.fontSize = "80px";
            square.style.textAlign = "center";
            square.setAttribute("row", `${i}`);
            square.setAttribute("col", `${j}`);
            square.addEventListener("click", move);
            //YOU have to make the check a const first before accessing to prevent typescript from thinking that
            //the value of the variable can change after the if statement
            const cell = board[i]?.[j];
            if (cell instanceof Piece) {
                square.textContent = cell.icon;
            }
            //this is weird tbh but string checks are checked against "string" not String
            if (typeof cell === "string") {
                square.textContent = cell;
            }
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
export function drawBoard(board, boardDisplay) {
    let divs = boardDisplay.children;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let index = i * 8 + j;
            const cell = board[i]?.[j];
            if (cell instanceof Piece) {
                if (divs != null && index !== null && index < divs.length) {
                    const div = divs[index];
                    if (div) {
                        div.textContent = cell.icon;
                    }
                }
            }
            if (typeof cell === "string") {
                if (divs != null && index !== null && index < divs.length) {
                    const div = divs[index];
                    if (div) {
                        div.textContent = cell;
                    }
                }
            }
        }
    }
}
export function initBoard() {
    let boardDisplay = document.getElementsByClassName('board')[0];
    addPiecesToBoard(board);
    createBoard(board, boardDisplay);
}
export function redrawBoard() {
    let boardDisplay = document.getElementsByClassName('board')[0];
    drawBoard(board, boardDisplay);
}
//# sourceMappingURL=board.js.map