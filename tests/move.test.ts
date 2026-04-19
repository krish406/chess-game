import { test, expect } from "vitest";
import { validateMove } from "../src/moves.js";
import { Pawn } from "../src/pieces.js";

test("pawn moves one space forward", () => {
    const pawn = new Pawn("white", "♙", 6, 7);
    expect(validateMove(pawn, 6, 7, 5, 7)).toBe(true);
});