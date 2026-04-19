export class Piece {
    color : string;
    icon : string;
    row : number;
    col : number;

    constructor(color: string, icon: string, row: number, col: number) {
        this.color = color;
        this.icon = icon;
        this.row = row;
        this.col = col;
    }
}

export class Pawn extends Piece {
    constructor(
        color: string,
        icon: string,
        row: number,
        col: number,
        private allowedMoves: string) {
        super(color, icon, row, col)
    }
}