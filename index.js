const grid = document.querySelector("#grid");

makeGrid(16)

const button = document.querySelector("button")




function makeGrid (defaultSquares) {

for (let i = 1; i <= defaultSquares * defaultSquares; i++ ) {

    const squareSize = 500 / defaultSquares
        const square = document.createElement("div");
        square.className = "square";
    square.style.backgroundColor =  "black";
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    square.style.opacity = 0;
    square.textContent = ""
    square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = rainbow();
        square.style.opacity = +square.style.opacity + .1;
    })
    grid.appendChild(square) 
}
}

function rainbow () {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} / ${Math.random() * 0.999}`

}

button.addEventListener("click", e => {
    Array.from(grid.children).forEach(child => {
        child.remove();
    });
    defaultSquares = prompt("Enter")
    if (defaultSquares >= 100){
        return makeGrid(16)
    }
    return makeGrid(defaultSquares)
})


