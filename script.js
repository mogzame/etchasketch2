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
    if(e.target.classList.contains('clicked') !== true) {
        e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        console.log(e.target.classList.contains('clicked'))
        e.target.setAttribute('class', 'clicked')
    }

    else {
        
    }
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
        let hovers = 0;
        square.addEventListener('mouseover', (e) => {
            hovers++
            console.log(hovers)
            if (hovers === 1) {
                e.target.style.filter ='brightness(100%)'
            }
            else if (hovers === 2) {
                e.target.style.filter ='brightness(90%)'
            }
            else if (hovers === 3) {
                e.target.style.filter ='brightness(80%)'
            }
            else if (hovers === 4) {
                e.target.style.filter ='brightness(70%)'
            }
            else if (hovers === 5) {
                e.target.style.filter ='brightness(60%)'
            }
            else if (hovers === 6) {
                e.target.style.filter ='brightness(50%)'
            }
            else if (hovers === 7) {
                e.target.style.filter ='brightness(40%)'
            }
            else if (hovers === 8) {
                e.target.style.filter ='brightness(30%)'
            }
            else if (hovers === 9) {
                e.target.style.filter ='brightness(20%)'
            }
            else if (hovers === 10) {
                e.target.style.filter ='brightness(10%)'
            }
            else {
                e.target.style.filter ='brightness(0)'
            }
        })
    }
    }
    else alert('Please enter a number between 2 and 100')
});