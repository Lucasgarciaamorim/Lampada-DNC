


let lamp = document.querySelector("#lampada");
alert('Não Toque na lâmpada');

function estaQuebrada() {

    return lamp.src.indexOf('lampQuebrada') > -1;
}

function ligarLamp() {
    if (!estaQuebrada()) {
        lamp.src = '/assets/img/lampLigada.svg';

    }

}


function desligarLamp() {
    if (!estaQuebrada()) {

        lamp.src = '/assets/img/lampDesligada.svg';
    }

}



lamp.addEventListener('click', quebrarLamp)
function quebrarLamp() {

    lamp.src = '/assets/img/lampQuebrada.svg';

}

function reset() {
    lamp.src = '/assets/img/lampDesligada.svg';
    

  
}



