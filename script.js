const container = document.querySelector('.container');
const btn = document.querySelector('.custom');

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.setAttribute('style', 'height: 25px; width: 25px;');
    container.append(square);
}

function randomNum() {
    let rand = Math.floor(Math.random() * 256);
    return rand;
}

container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }
)

btn.addEventListener('click', () => {
    let gridNum = prompt('Number of squares per side for the grid');
    if (gridNum >= 2 && gridNum <= 100) {
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
    }
    else alert('Please enter a number between 2 and 100')
});