export declare class Piece {
    color: string;
    icon: string;
    row: number;
    col: number;
    constructor(color: string, icon: string, row: number, col: number);
}
export declare class Pawn extends Piece {
    private allowedMoves;
    constructor(color: string, icon: string, row: number, col: number, allowedMoves: string);
}
//# sourceMappingURL=pieces.d.ts.map