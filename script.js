const container = document.querySelector('.container');
const btn = document.querySelector('.custom');

//create a box 256 times (for loop)
//with a height and width of 25px
//append them to container

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.setAttribute('style', 'height: 25px; width: 25px;');
    container.append(square);
}

//add eventlistener to container
//when hovered it changes the targets bgc to a random color
//create a function that returns a random number between 0 and 255
//set bgc to rgb(rand, rand, rand)

function randomNum() {
    let rand = Math.floor(Math.random() * 256);
    return rand;
}
randomNum();


container.addEventListener('mouseover', (e) => {
    
    if(e.target.classList.contains('clicked') !== true) {
        e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        console.log(e.target.classList.contains('clicked'))
        e.target.setAttribute('class', 'clicked')
    }
    
    else {
        e.target.style.filter = `brightness(${brightnessLvl})`
    }
})

//when btn is clicked => prompt num of grid each side and store it in var
//new var squaresnumber is num of grids * itself
//new var heigh and width 400/num of grids
//create a loop where i < squaresnumber
//setatt of style with height = height and width = width
//append it to the container

btn.addEventListener('click', () => {
    let gridNum = prompt('Number of squares per side for the grid');
    console.log(gridNum)
    let squaresNum = gridNum ** 2;
    let squaresDimension = 400 / gridNum;
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };

    for (i = 0; i < squaresNum; i++) {
        let square = document.createElement('div');
        square.style.width = `${squaresDimension}px`;
        square.style.height = `${squaresDimension}px`;
        container.append(square);
    }
});