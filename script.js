const resizeButton = document.createElement("button");
resizeButton.textContent = "Resize Grid";
document.body.insertBefore(resizeButton, document.body.firstChild);
resizeButton.addEventListener("click", function(){
    let newSize = prompt("Enter number of squares per side (max 100):");
    newSize = Number(newSize);
    if(newSize > 0 && newSize <= 100){
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.")
    }
});

function createGrid(squaresPerSide){
    const grid = document.querySelector(".grid");

    grid.innerHTML="";

    const totalPixels = 960;
    const squareSize = totalPixels / squaresPerSide;

    for(let i = 0; i < squaresPerSide * squaresPerSide; i++){
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = "black";
        });

        grid.appendChild(square);
    }
}

createGrid(16);
