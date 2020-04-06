import * from './sound.js';

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

let buttons = document.querySelectorAll('.button');

// for (let i = 1; i <= 9; i++) {
//     let `btn${i}` = document.querySelector(`.btn-${i}`);
// }

let button1 = document.querySelector('.btn-1');
let button2 = document.querySelector('.btn-2');
let button3 = document.querySelector('.btn-3');
let button4 = document.querySelector('.btn-4');
let button5 = document.querySelector('.btn-5');
let button6 = document.querySelector('.btn-6');
let button7 = document.querySelector('.btn-7');
let button8 = document.querySelector('.btn-8');
let button9 = document.querySelector('.btn-9');
let button10 = document.querySelector('.btn-10');
let button11 = document.querySelector('.btn-11');
let button12 = document.querySelector('.btn-12');
let button13 = document.querySelector('.btn-13');
let button14 = document.querySelector('.btn-14');
let button15 = document.querySelector('.btn-15');
let button16 = document.querySelector('.btn-16');

button1.addEventListener('hover', c3);
button2.addEventListener('hover', cSharp3);
button3.addEventListener('hover', d3);
button4.addEventListener('hover', dSharp3);
button5.addEventListener('hover', e3);
button6.addEventListener('hover', f3);
button7.addEventListener('hover', fSharp3);
button8.addEventListener('hover', g3);
button9.addEventListener('hover', gSharp3);
button10.addEventListener('hover', a4);
button11.addEventListener('hover', aSharp4);
button12.addEventListener('hover', b4);
button13.addEventListener('hover', c4);
button14.addEventListener('hover', cSharp4);
button15.addEventListener('hover', d4);
button16.addEventListener('hover', dSharp4);

