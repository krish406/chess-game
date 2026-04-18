"use strict";
let board = document.getElementsByClassName('board')[0];
for (let i = 0; i < 8; i++) {
    let parity_i = i % 2;
    for (let j = 0; j < 8; j++) {
        let parity_j = j % 2;
        const square = document.createElement("div");
        square.style.width = "85px";
        square.style.height = "85px";
        square.textContent = `${i},${j}`;
        if (parity_i == parity_j) {
            square.style.backgroundColor = "#fffce7";
        }
        else {
            square.style.backgroundColor = "#c8927e";
        }
        board.appendChild(square);
    }
}
