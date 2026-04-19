import { board, redrawBoard } from "./board.js";
import { Piece, Pawn } from "./pieces.js";
/*
click a square

if piece on square
    check color of piece
    if color can move
        select piece in state variable
    if color cannot move
        break

else if piece not on square and piece in state variable
    move piece to next square if possible

else
    do nothing
*/
let flag = false;
let currentPiece = " ";
let prev_row = null;
let prev_col = null;
export default function move(e) {
    const target = e.target;
    let row_str = target?.getAttribute('row');
    let col_str = target?.getAttribute('col');
    let row = Number(row_str);
    let col = Number(col_str);
    const selection = board[row]?.[col];
    if (selection instanceof Piece) {
        currentPiece = selection;
        prev_row = row;
        prev_col = col;
        flag = true;
    }
    else if (typeof selection === "string" && flag && prev_row !== null && prev_col !== null) {
        if (validateMove(currentPiece, prev_row, prev_col, row, col)) {
            if (board[row]) {
                board[row][col] = currentPiece;
            }
            //remember 0 is falsy so you can't just say if(prev_row)
            //typescript narrowing is weird
            if (board[prev_row]) {
                let row = board[prev_row];
                if (row) {
                    row[prev_col] = " ";
                }
            }
            flag = false;
            prev_row = null;
            prev_col = null;
            currentPiece = " ";
            redrawBoard();
        }
    }
}
export function validateMove(currPiece, prev_row, prev_col, row, col) {
    if (currPiece instanceof Pawn) {
        let allowedMoves = currPiece.allowedMoves;
        for (const [p_col, p_row] of allowedMoves) {
            console.log(prev_col, p_col);
            console.log(prev_row, p_row);
            if (prev_col + p_col == col && prev_row - p_row == row) {
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=moves.js.map