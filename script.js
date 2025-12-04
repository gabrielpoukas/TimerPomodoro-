const DURACAO_FOCO= 25*60;
const DURACAO_PAUSA = 5*60;

let tempoRestante = DURACAO_FOCO;
let estaRodando = false;
let intervalId= null;

let body;
let displayTempo;
let modoDisplay;
let btnIniciarParar;
let btnResetar;
let btnToggleTheme;

window.onload = function() {

body = document.querySelector('body');
displayTempo = document.querySelector('#display-tempo');
modoDisplay = document.querySelector('#modo-display');
btnIniciarParar = document.querySelector('#btn-iniciar-parar');
btnResetar = document.querySelector('#btn-resetar');
btnToggleTheme = document.querySelector('#btn-toggle-theme');

btnIniciarParar.addEventListener('click', iniciarParar);
btnResetar.addEventListener('click', resetar);

btnToggleTheme.addEventListener('click', toggleTheme);

atualizarDisplay()

}

function decrementarTempo() {

tempoRestante--;

if(tempoRestante <0) {

    alternarModo();
    return;
}

atualizarDisplay();

}

function atualizarDisplay() {

const minutos = Math.floor(tempoRestante / 60);
const segundos = tempoRestante % 60;

const minutosFormatados = String(minutos).padStart(2, '0');
const segundosFormatados = String(segundos).padStart(2,'0');

displayTempo.textContent = `${minutosFormatados}:${segundosFormatados}`;

}

function iniciarParar() {

    if (estaRodando) {

        clearInterval(intervalId);
        btnIniciarParar.textContent = 'Continuar';
}else {

    intervalId = setInterval(decrementarTempo, 1000);
    btnIniciarParar.textContent= 'Parar';
    
}

estaRodando = !estaRodando;

}

function resetar()  {

clearInterval(intervalId);
estaRodando = false;

tempoRestante = DURACAO_FOCO;

body.classList.remove('pausa-mode');
modoDisplay.textContent = 'FOCO';

btnIniciarParar.textContent = "iniciar";
atualizarDisplay();

}

function alternarModo() {

clearInterval(intervalId);

const estaEmPausa = body.classList.contains('pausa-mode');

if(estaEmPausa){

tempoRestante= DURACAO_FOCO;
body.classList.remove('pausa-mode');
modoDisplay.textContent = 'FOCO';

}else{

tempoRestante = DURACAO_PAUSA;
body.classList.add('pausa-mode');
modoDisplay.textContent='PAUSA';

}

atualizarDisplay()

intervalId = setInterval(decrementarTempo, 1000);

}

function toggleTheme() {

body.classList.toggle('light-theme');

if(body.classList.contains('light-theme')){

    btnToggleTheme.textContent = '🌙 Modo Noite';

}else{

btnToggleTheme.textContent = '🌞 Modo Dia';


}

}

