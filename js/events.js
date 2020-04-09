import { notesClass } from './sound.js';

let notes = new notesClass();

export let level = 1;

export let userInput = [];

export let sequences = [];

let currentSequence = [];

//------------------------------------------------------
// Mapping single buttons

export let button1 = document.querySelector('#btn-1');
export let button2 = document.querySelector('#btn-2');
export let button3 = document.querySelector('#btn-3');
export let button4 = document.querySelector('#btn-4');
export let button5 = document.querySelector('#btn-5');
export let button6 = document.querySelector('#btn-6');
export let button7 = document.querySelector('#btn-7');
export let button8 = document.querySelector('#btn-8');
export let button9 = document.querySelector('#btn-9');
export let button10 = document.querySelector('#btn-10');
export let button11 = document.querySelector('#btn-11');
export let button12 = document.querySelector('#btn-12');
export let button13 = document.querySelector('#btn-13');
export let button14 = document.querySelector('#btn-14');
export let button15 = document.querySelector('#btn-15');
export let button16 = document.querySelector('#btn-16');

// export let c3 = document.querySelector([name="c3"]);
// export let cSharp3 = document.querySelector('#cSharp3');
// export let d3 = document.querySelector('#d3');
// export let dSharp3 = document.querySelector('#dSharp3');
// export let e3 = document.querySelector('#e3');
// export let f3 = document.querySelector('#f3');
// export let fSharp3 = document.querySelector('#fSharp3');
// export let g3 = document.querySelector('#g3');
// export let gSharp3 = document.querySelector('#gSharp3');
// export let a4 = document.querySelector('#a4');
// export let aSharp4 = document.querySelector('#aSharp4');
// export let b4 = document.querySelector('#b4');
// export let c4 = document.querySelector('#c4');
// export let cSharp4 = document.querySelector('#cSharp4');
// export let d4 = document.querySelector('#d4');
// export let dSharp4 = document.querySelector('#dSharp4');

// console.log(c3);

export let allBtns = document.querySelectorAll('.button');

//---------------------------------------------
// Mapping whole keyboard to array

export const board = [
    ['C3', 'C#3', 'D3', 'D#3'],
    ['E3', 'F3', 'F#3', 'G3'],
    ['G#3', 'A4', 'A#4', 'B4'],
    ['C4', 'C#4', 'D4', 'D#4']
];

export const boardButtons = {
    'C3': button1,
    'C#3': button2,
    'D3': button3,
    'D#3': button4,
    'E3': button5,
    'F3': button6,
    'F#3': button7,
    'G3': button8,
    'G#3': button9,
    'A4': button10,
    'A#4': button11,
    'B4': button12,
    'C4': button13,
    'C#4': button14,
    'D4': button15,
    'D#4': button16
};

//---------------------------------------------
// Work on sequences

// Generating random sequences

function generateRandomSequence(level) {
    let arrayOfNotes = [];
    for (let i = 0; i < level + 2; i++) {
        let randomNote = board[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)];
        arrayOfNotes.push(randomNote);
    }
    console.log(arrayOfNotes);
    sequences.push(arrayOfNotes);
    currentSequence = sequences[level - 1];
}

//---------------------------------------------
// Lighting up buttons (active class) on click

// allBtns.forEach(button => {
//     button.addEventListener('click', e => setActive(e.target))
// });

export function setActive(button) {
    button.classList.add('active');
}

// export function setInactive(button) {
//     button.classList.remove('active');
// }

console.log(allBtns);

export function setInactive(array) {
    array.forEach(button => {
        button.classList.remove('active');
    });
}

//---------------------------------------------
// Mapping DOM elements to CSS animations

// // function moveBtn() {
// //     mainBtn.style.transform = "translateY(-30em) scale(0.3)";
// // }

//---------------------------------------------
// Play button event

// let repeatBtn = document.getElementById('repeat-button');

// repeatBtn.addEventListener('click', replaySequence);

//---------------------------------------------
// Validate button event

let validateBtn = document.getElementById('validate-button');

validateBtn.addEventListener('click', e => checkInput(e.target));

//---------------------------------------------
// Level event

const displayLevel = {
    1: '|',
    2: '| |',
    3: '| | |',
    4: '| | | |',
    5: '| | | | |',
    6: '| | | | | |',
    7: '| | | | | | |',
    8: '| | | | | | | |',
    9: '| | | | | | | | |',
    10: '| | | | | | | | | | |'
}

// let title = document.querySelector('h1');
//     title.innerHTML = displayLevel[`${level}`];

//---------------------------------------------
// Button events

// button1.addEventListener('mouseover', notes.c3Hover);
// button2.addEventListener('mouseover', notes.cSharp3Hover);
// button3.addEventListener('mouseover', notes.d3Hover);
// button4.addEventListener('mouseover', notes.dSharp3Hover);
// button5.addEventListener('mouseover', notes.e3Hover);
// button6.addEventListener('mouseover', notes.f3Hover);
// button7.addEventListener('mouseover', notes.fSharp3Hover);
// button8.addEventListener('mouseover', notes.g3Hover);
// button9.addEventListener('mouseover', notes.gSharp3Hover);
// button10.addEventListener('mouseover', notes.a4Hover);
// button11.addEventListener('mouseover', notes.aSharp4Hover);
// button12.addEventListener('mouseover', notes.b4Hover);
// button13.addEventListener('mouseover', notes.c4Hover);
// button14.addEventListener('mouseover', notes.cSharp4Hover);
// button15.addEventListener('mouseover', notes.d4Hover);
// button16.addEventListener('mouseover', notes.dSharp4Hover);

button1.addEventListener('click', notes.c3);
button2.addEventListener('click', notes.cSharp3);
button3.addEventListener('click', notes.d3);
button4.addEventListener('click', notes.dSharp3);
button5.addEventListener('click', notes.e3);
button6.addEventListener('click', notes.f3);
button7.addEventListener('click', notes.fSharp3);
button8.addEventListener('click', notes.g3);
button9.addEventListener('click', notes.gSharp3);
button10.addEventListener('click', notes.a4);
button11.addEventListener('click', notes.aSharp4);
button12.addEventListener('click', notes.b4);
button13.addEventListener('click', notes.c4);
button14.addEventListener('click', notes.cSharp4);
button15.addEventListener('click', notes.d4);
button16.addEventListener('click', notes.dSharp4);

//---------------------------------------------------
// Introducing game functionality

window.addEventListener('load', playRandomSequence());

function playRandomSequence() {
    generateRandomSequence(level);
    notes.sequence(currentSequence);
}

function replaySequence() {
    notes.sequence(currentSequence);
}

function checkInput() {
    if (userInput.length != currentSequence.length) {
        userInput = [];
        setInactive(allBtns);
        notes.sequence(currentSequence);
        return false;
    }
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] != currentSequence[i]) {
                userInput = [];
                setInactive(allBtns);
                notes.sequence(currentSequence);
                return false;
        } 
    }
    nextLevel();
}

function nextLevel() {
    level++;
    playRandomSequence();
    userInput = [];
}

//---------------------------------------------------
// Function to play background noise (deactivated for now)

// backgroundBtn.addEventListener('mouseover', playBackground);

// function playBackground() {
//     backgroundBtn.classList.toggle("is-active");
//     backgroundBtn.classList.contains("is-active") ? notes.background() : Tone.Transport.stop();
// }