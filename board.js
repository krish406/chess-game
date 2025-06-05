let board = document.getElementsByClassName('board')[0];

for(let i = 0; i < 8; i++){
    let type_i = i % 2;
    for(let j = 0; j < 8; j++){
        let type_j = j % 2;
        const square = document.createElement("div");
        square.style.width = "85px";
        square.style.height = "85px";

        if(type_i == type_j){
            square.style.backgroundColor = "#660000";
        }
        else{
            square.style.backgroundColor = "#f8e7bb";
        }
        
        board.appendChild(square);
    } 
}