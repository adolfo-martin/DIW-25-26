let posicionAlto = -810;

const intervaloAlto = setInterval(() => {
    const nNumero = document.getElementById('eDivNumeroAlto');
    console.log('hola');

    if (posicionAlto === 0) {
        clearInterval(intervaloAlto);
        return;
    }

    posicionAlto += 90;
    nNumero.style.backgroundPositionX = posicionAlto + 'px';
}, 10000);



let posicionBajo = -810;

const intervaloBajo = setInterval(() => {
    const nNumero = document.getElementById('eDivNumeroBajo');
    console.log('hola');

    if (posicionBajo === 0) {
        posicionBajo = -900;
        // clearInterval(intervaloBajo);
        // return;
    }

    posicionBajo += 90;
    nNumero.style.backgroundPositionX = posicionBajo + 'px';
}, 1000);