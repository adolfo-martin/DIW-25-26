document.querySelector('.watch-needle-second')
    .addEventListener('animationiteration', increaseContador);

document.querySelector('.watch-needle-second')
    .addEventListener('animationend', moveBall);


document.querySelector('.ball')
    .addEventListener('animationstart', e => {
        document.body.style.backgroundColor = 'yellow';
    })


function increaseContador(e) {
    let contador = parseInt(document.querySelector('.contador').textContent);
    document.querySelector('.contador').textContent = ++contador;   
}

function moveBall(e) {
    document.querySelector('.ball').style.animationPlayState = 'running';
}