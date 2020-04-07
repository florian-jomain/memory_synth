import { notesClass } from './sound.js';

let notes = new notesClass();

let level = 1;

export let userInput = [];

const sequences = [
    ['D3', 'G3', 'D4'],
    ['D3', 'G3', 'D4', 'C4'],
    ['D3', 'G3', 'D4', 'C4', 'D4'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4', 'D3'],
    ['D3', 'G3', 'D4', 'C4', 'D4', 'D3', 'A3', 'A#3', 'C4', 'D4', 'D3', 'D4']
];

console.log(sequences[level][0]);



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

let title = document.querySelector('h1');
    title.innerHTML = displayLevel[`${level}`];

//---------------------------------------------
// Button events

let allBtns = document.querySelectorAll('.button');

allBtns.forEach(button => {
    button.addEventListener('click', e => setActive(e.target))
});

function setActive(button) {
    button.classList.toggle('active');
}

function setInactive() {
    allBtns.forEach(button => {
        button.classList.remove('active');
    });
}

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

let currentSequence = sequences[level - 1];

function playSequence(currentSequence) {
    console.log('Passing sound');
    notes.sequence(currentSequence);
    console.log('Coucou');
}

function checkInput() {
    //vérifier si level existe bien
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
    //Need to add button blinking function

    nextLevel();
}

function nextLevel() {
    level += 1;
    playSequence(currentSequence);
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