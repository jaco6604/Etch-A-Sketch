const grid = document.querySelector("#grid");
for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");  
    square.addEventListener("mouseenter", function(){
        square.style.backgroundColor = "black";
    });
    grid.appendChild(square);

}
