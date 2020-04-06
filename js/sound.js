console.clear();

// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
})

//----------------------------------------------------------
//Generic variables

let gain = new Tone.Gain(0.3);
gain.toMaster();

//----------------------------------------------------------
//Background sound functions

// let noise = new Tone.Noise('white');
// let oscillator = new Tone.Oscillator(65, 'sine');
// let gain = new Tone.Gain(0.3);

// let lowPassFilter = new Tone.LowpassCombFilter(0.1, 1, 100);

// // let reverb = new Tone.Reverb({
// //     decay: 0.5,
// //     preDelay: 0.05
// // });

// // reverb.generate();

// // noise.chain(bitCrusher, gain);

// // let bitCrusher = new Tone.BitCrusher(6);

// // oscillator.chain(bitCrusher, gain);
// oscillator.connect(gain);
// gain.toMaster();

//----------------------------------------------------------
// Synth definition

const synth = new Tone.Synth({
    'oscillator': {
        'type': 'pwm',
        'modulationFrequency': 0.1
    },
    'envelope': {
        'attack': 0.02,
        'decay': 0.5,
        'sustain': 0.2,
        'release': 2,
    }
});

synth.connect(gain);

//----------------------------------------------------------
//Singular tone functions

function c3() {
    synth.triggerAttackRelease('C3', '8n');
}

function cSharp3() {
    synth.triggerAttackRelease('C#3', '8n');
}

function d3() {
    synth.triggerAttackRelease('D3', '8n');
}

function dSharp3() {
    synth.triggerAttackRelease('D#3', '8n');
}

function e3() {
    synth.triggerAttackRelease('E3', '8n');
}

function f3() {
    synth.triggerAttackRelease('F3', '8n');
}

function fSharp3() {
    synth.triggerAttackRelease('F#3', '8n');
}

function g3() {
    synth.triggerAttackRelease('G3', '8n');
}

function gSharp3() {
    synth.triggerAttackRelease('G#3', '8n');
}

function a4() {
    synth.triggerAttackRelease('A4', '8n');
}

function aSharp4() {
    synth.triggerAttackRelease('A#4', '8n');
}

function b4() {
    synth.triggerAttackRelease('B4', '8n');
}

function c4() {
    synth.triggerAttackRelease('C4', '8n');
}

function cSharp4() {
    synth.triggerAttackRelease('C#4', '8n');
}

function d4() {
    synth.triggerAttackRelease('D4', '8n');
}

function dSharp4() {
    synth.triggerAttackRelease('D#4', '8n');
}

export * from './sound.js';