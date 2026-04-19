export abstract class Piece {
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
    allowedMoves: Array<[number, number]>;

    constructor(
        color: string,
        icon: string,
        row: number,
        col: number){
        super(color, icon, row, col);
        this.allowedMoves = [[0, 0], [0, 1]]
    }
}