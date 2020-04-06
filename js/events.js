import {c3, cSharp3, d3, dSharp3, e3, f3, fSharp3, g3, gSharp3, a4, aSharp4, b4, c4, cSharp4, d4, dSharp4} from './sound.js';

//Activating main button on HP

// const button = document.querySelector('.main-button');
// button.addEventListener('click', toggleSound);

// // function moveBtn() {
// //     mainBtn.style.transform = "translateY(-30em) scale(0.3)";
// // }

// function toggleSound() {
//  // await Tone.start()
// 	// console.log('audio is ready')
//     button.classList.toggle("is-active");
//     button.classList.contains("is-active") ? Tone.Transport.start() : Tone.Transport.stop();
// }

//---------------------------------------------
//Keyboard events

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

button1.addEventListener('click', c3);
button2.addEventListener('click', cSharp3);
button3.addEventListener('click', d3);
button4.addEventListener('click', dSharp3);
button5.addEventListener('click', e3);
button6.addEventListener('click', f3);
button7.addEventListener('click', fSharp3);
button8.addEventListener('click', g3);
button9.addEventListener('click', gSharp3);
button10.addEventListener('click', a4);
button11.addEventListener('click', aSharp4);
button12.addEventListener('click', b4);
button13.addEventListener('click', c4);
button14.addEventListener('click', cSharp4);
button15.addEventListener('click', d4);
button16.addEventListener('click', dSharp4);

