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
       div.addEventListener("mouseover", function(e) {
        this.style.backgroundColor = color;
    });
      container.insertAdjacentElement("beforeend", div);
    }
}

//  Changes color of pen
let color = "black"
function changeColor(choice) {
    color = choice;



}
// Resizes the grid depending on input
function changeSize(input){
    
    if(input >= 2 && input <= 100){
        createDivs(input);
        let span = document.getElementById("currentSize")
        span.innerHTML = `${input} X`
    } else {
        console.log("Invalid value!")
    }
    


}
//Replaces the colored divs with white ones
function resetCanvas() {
    let container = document.getElementById("container")
    let boxes = container.querySelectorAll("div");
    boxes.forEach((div) => div.style.backgroundColor = "white");

}

createDivs(16);



