const container = document.querySelector('.container');
const btn = document.querySelector('.custom');

//create a box 256 times (for loop)
//with a height and width of 25px
//append them to container

for (let i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.setAttribute('style', 'height: 25px; width: 25px;');
    container.append(box);
}

//add eventlistener to container
//when hovered it changes the targets bg to black

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
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