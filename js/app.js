const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
let modeButtons = document.querySelectorAll(".mode");
const grid = document.getElementById('container');
let nums = 6;

const generateRandomColors = num => {
    // make array
    let arr = []
    // add num random colors to arr
    for(var i = 0; i < num; i++){
        arr.push(rColor())
    }
    // return array 
    return arr;
};

const rColor = () => {
    let r = Math.floor(Math.random() * 256).toString();
    let g = Math.floor(Math.random() * 256).toString();
    let b = Math.floor(Math.random() * 256).toString();

    return `rgb(${r}, ${g}, ${b})`;
}

let colors = generateRandomColors(nums);

let pickedColor = colors[Math.floor(Math.random() * colors.length)];

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
            e.target.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Guess again!'
        } else {
            messageDisplay.textContent = "Wow, you're great!!"
            changedColors();
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        };
    });
};

const changedColors = color => {
    // loop through all squares 
    squares.forEach(color => {
        color.style.backgroundColor = pickedColor;
    })
};

const reset = num => {
    colors = generateRandomColors(num);
    // pick a new random color from array
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        if(!colors[i]){
            squares[i].style.display = 'none'; 
        } else {
            squares[i].style.display = 'block';
        };
    };
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = ""
    h1.style.background = "slategray";
};

for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", e => {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        e.target.classList.add("selected");
        if(modeButtons[i].textContent === "Easy"){
            nums = 3;
            } else if(modeButtons[i].textContent === "Hard"){
            nums = 6;
            } else nums = 9;
        reset(nums);
    });
}

resetButton.addEventListener('click', () => {
    reset(nums);
});

reset(nums);