//Consts and vars
const container = document.getElementById("container")
let rows = document.getElementsByClassName("gridRow")
let cells = document.getElementsByClassName("gridCol")
container.style.gridTemplateColumns = "repeat(16, 1fr)"
container.style.gridTemplateRows = "repeat(16, 1fr)"

function createDivs(col, rows) {
    
    for(i = 0; i < (col * rows); i++){
       const div = document.createElement("div")
       container.appendChild(div).classList.add("box")
      
    }
}

createDivs(16,16);



