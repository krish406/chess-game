export class Piece {
    color;
    icon;
    row;
    col;
    constructor(color, icon, row, col) {
        this.color = color;
        this.icon = icon;
        this.row = row;
        this.col = col;
    }
}
export class Pawn extends Piece {
    allowedMoves;
    constructor(color, icon, row, col, allowedMoves) {
        super(color, icon, row, col);
        this.allowedMoves = allowedMoves;
    }
}
//# sourceMappingURL=pieces.js.map