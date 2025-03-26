const bg = document.querySelector('body');
const btn = document.querySelector('button');
const respCor = document.querySelector('#cor');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


window.addEventListener('load', () => {
    const cor = randomColor();
    bg.style.backgroundColor = cor;
    respCor.innerText = `${cor}`;
})

btn.addEventListener('click', () => {
    const cor = randomColor();
    bg.style.backgroundColor = cor;
    respCor.innerText = `${cor}`;
})

const randomColor = () => {
    let bg = "#";

    for (let i=0; i<6; i++){
        bg += hex[Math.floor(Math.random() * hex.length)] ;
    }

    return bg;
}



