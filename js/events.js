import { notesClass } from './sound.js';

let notes = new notesClass();

export let level = 1;

export let userInput = [];

export let sequences = [];

let currentSequence = [];

//---------------------------------------------
// Mapping whole keyboard to array

export const board = [
    ['C3', 'C#3', 'D3', 'D#3'],
    ['E3', 'F3', 'F#3', 'G3'],
    ['G#3', 'A4', 'A#4', 'B4'],
    ['C4', 'C#4', 'D4', 'D#4']
];

//---------------------------------------------
// Work on sequences

// const sequences = [
//     ['D3', 'G3', 'D4'],
//     ['D3', 'G3', 'D4', 'C4'],
//     ['D3', 'G3', 'D4', 'C4', 'D4'],
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3'],
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3'],
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3']
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4'],
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4'],
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4', 'D3']
//     ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4', 'D3', 'D4']
// ];

// Generating random sequences

// let randomNote = board[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)];

// Generating random sequences

function generateArrayOfNotes(level) {
    let arrayOfNotes = [];
    for (let i = 0; i < level + 2; i++) {
        let randomNote = board[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)];
        arrayOfNotes.push(randomNote);
    }
    console.log(arrayOfNotes);
    sequences.push(arrayOfNotes);
    currentSequence = sequences[level - 1];
    console.log(currentSequence);
    console.log(sequences);
}

// generateArrayOfNotes(level);
// generateArrayOfNotes();
// generateArrayOfNotes();

//---------------------------------------------
// Lighting up buttons (active class) when each note of the sequence is played

// function lightUpButtons(sequence) {

// }






//---------------------------------------------
// Mapping DOM elements to CSS animations

// // function moveBtn() {
// //     mainBtn.style.transform = "translateY(-30em) scale(0.3)";
// // }

//---------------------------------------------
// Play button event

// let mainBtn = document.querySelector('#main-button');

// mainBtn.addEventListener('mouseover', playSequence(level));

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

let allBtns = document.querySelectorAll('.button');

allBtns.forEach(button => {
    button.addEventListener('click', e => setActive(e.target))
});

export function setActive(button) {
    button.classList.toggle('active');
}

function setInactive() {
    allBtns.forEach(button => {
        button.classList.remove('active');
    });
}

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

button1.addEventListener('mouseover', notes.c3Hover);
button2.addEventListener('mouseover', notes.cSharp3Hover);
button3.addEventListener('mouseover', notes.d3Hover);
button4.addEventListener('mouseover', notes.dSharp3Hover);
button5.addEventListener('mouseover', notes.e3Hover);
button6.addEventListener('mouseover', notes.f3Hover);
button7.addEventListener('mouseover', notes.fSharp3Hover);
button8.addEventListener('mouseover', notes.g3Hover);
button9.addEventListener('mouseover', notes.gSharp3Hover);
button10.addEventListener('mouseover', notes.a4Hover);
button11.addEventListener('mouseover', notes.aSharp4Hover);
button12.addEventListener('mouseover', notes.b4Hover);
button13.addEventListener('mouseover', notes.c4Hover);
button14.addEventListener('mouseover', notes.cSharp4Hover);
button15.addEventListener('mouseover', notes.d4Hover);
button16.addEventListener('mouseover', notes.dSharp4Hover);

button1.addEventListener('click', notes.c3Click);
button2.addEventListener('click', notes.cSharp3Click);
button3.addEventListener('click', notes.d3Click);
button4.addEventListener('click', notes.dSharp3Click);
button5.addEventListener('click', notes.e3Click);
button6.addEventListener('click', notes.f3Click);
button7.addEventListener('click', notes.fSharp3Click);
button8.addEventListener('click', notes.g3Click);
button9.addEventListener('click', notes.gSharp3Click);
button10.addEventListener('click', notes.a4Click);
button11.addEventListener('click', notes.aSharp4Click);
button12.addEventListener('click', notes.b4Click);
button13.addEventListener('click', notes.c4Click);
button14.addEventListener('click', notes.cSharp4Click);
button15.addEventListener('click', notes.d4Click);
button16.addEventListener('click', notes.dSharp4Click);

//---------------------------------------------------
// Introducing game functionality

// window.addEventListener('load', playSequence(level));

// function playSequence(level) {
//     console.log('Passing sound');
//     notes.sequence(sequences[level - 1]);
// }

// window.addEventListener('load', playRandomSequence());

playRandomSequence();

function playRandomSequence() {
    console.log(level);
    generateArrayOfNotes(level);
    console.log(sequences);
    console.log(currentSequence);
    notes.sequence(currentSequence);
}

function checkInput() {
    //vérifier si level existe bien
    // console.log(userInput);
    // console.log(sequences[level - 1]);
    if (userInput.length != currentSequence.length) {
        userInput = [];
        setInactive();
        return false;
    }
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] != currentSequence[i]) {
                userInput = [];
                setInactive();
                return false;
        } 
    }
    nextLevel();
}

function nextLevel() {
    level++;
    console.log(level);
    console.log(sequences);
    playRandomSequence();
    setInactive();
    userInput = [];
}

//---------------------------------------------------
// Function to play background noise (deactivated for now)

// backgroundBtn.addEventListener('mouseover', playBackground);

// function playBackground() {
//     backgroundBtn.classList.toggle("is-active");
//     backgroundBtn.classList.contains("is-active") ? notes.background() : Tone.Transport.stop();
// }