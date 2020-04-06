import { notesClass } from './sound.js';
let notes = new notesClass();

//Activating main button on HP

// // function moveBtn() {
// //     mainBtn.style.transform = "translateY(-30em) scale(0.3)";
// // }

//---------------------------------------------
//Keyboard events
let mainBtn = document.querySelector('.main-button');
let backgroundBtn = document.querySelector('.background-button');

let button1 = document.querySelector('#btn-1');
let button2 = document.querySelector('#btn-2');
let button3 = document.querySelector('#btn-3');
let button4 = document.querySelector('#btn-4');
let button5 = document.querySelector('#btn-5');
let button6 = document.querySelector('#btn-6');
let button7 = document.querySelector('#btn-7');
let button8 = document.querySelector('#btn-8');
let button9 = document.querySelector('#btn-9');
let button10 = document.querySelector('#btn-10');
let button11 = document.querySelector('#btn-11');
let button12 = document.querySelector('#btn-12');
let button13 = document.querySelector('#btn-13');
let button14 = document.querySelector('#btn-14');
let button15 = document.querySelector('#btn-15');
let button16 = document.querySelector('#btn-16');

button1.addEventListener('mouseover', notes.c3);
button2.addEventListener('mouseover', notes.cSharp3);
button3.addEventListener('mouseover', notes.d3);
button4.addEventListener('mouseover', notes.dSharp3);
button5.addEventListener('mouseover', notes.e3);
button6.addEventListener('mouseover', notes.f3);
button7.addEventListener('mouseover', notes.fSharp3);
button8.addEventListener('mouseover', notes.g3);
button9.addEventListener('mouseover', notes.gSharp3);
button10.addEventListener('mouseover', notes.a4);
button11.addEventListener('mouseover', notes.aSharp4);
button12.addEventListener('mouseover', notes.b4);
button13.addEventListener('mouseover', notes.c4);
button14.addEventListener('mouseover', notes.cSharp4);
button15.addEventListener('mouseover', notes.d4);
button16.addEventListener('mouseover', notes.dSharp4);

mainBtn.addEventListener('mouseover', playSequence);

function playSequence() {
    mainBtn.classList.toggle("is-active");
    mainBtn.classList.contains("is-active") ? notes.sequence1() : Tone.Transport.stop();
}

backgroundBtn.addEventListener('mouseover', playBackground);

function playBackground() {
    backgroundBtn.classList.toggle("is-active");
    backgroundBtn.classList.contains("is-active") ? notes.background() : Tone.Transport.stop();
}