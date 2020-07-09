const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
let pickedColor = colors[3];

let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

colorDisplay.textContent = pickedColor; 

for (let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', e => {
        // grab color of clicked square
        let clickedColor = e.target.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor !== pickedColor){
            e.target.style.backgroundColor = "#232323";
        } else {
            alert('correct!');
        };
    });
};
