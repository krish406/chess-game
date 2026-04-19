export declare abstract class Piece {
    color: string;
    icon: string;
    row: number;
    col: number;
    constructor(color: string, icon: string, row: number, col: number);
}
export declare class Pawn extends Piece {
    allowedMoves: Array<[number, number]>;
    constructor(color: string, icon: string, row: number, col: number);
}
//# sourceMappingURL=pieces.d.ts.map