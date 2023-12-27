const container = document.querySelector('.container');

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