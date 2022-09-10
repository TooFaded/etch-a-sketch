//Consts and vars
const container = document.getElementById("container")
let rows = document.getElementsByClassName("gridRow")
let cells = document.getElementsByClassName("cell")


function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}


//Creates rows
function makeRows(num) {
   
    for(r = 0; r < num; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";

    }
}

//Creates columns
function makeColumns(num) {

    for(i = 0; i < rows.length; i++) {
        for( j = 0; j < num;  j++) {
           let newCell = document.createElement("div");
           rows[j].appendChild(newCell).className = "cell";
        };
    };
};