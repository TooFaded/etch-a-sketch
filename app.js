//Creates board
function createDivs(size) {
    
    const container = document.getElementById("container")
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let boxes = container.querySelectorAll("div");
    boxes.forEach((div) => div.remove());
    
    
    let amount = size *size;
    for(i = 0; i < amount; i++){
       const div = document.createElement("div")
       container.appendChild(div).classList.add("box")
       div.addEventListener("mouseover", function(e){
        this.style.backgroundColor = "black";
    });
      container.insertAdjacentElement("beforeend", div);
    }
}

function changeSize(input){
    
    if(input >= 2 && input <= 100){
        createDivs(input);
    } else {
        console.log("Invalid value!")
    }
    


}

createDivs(16);



