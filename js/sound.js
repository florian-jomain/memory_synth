console.clear();

// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
})

//----------------------------------------------------------
//Generic variables

const gain = new Tone.Gain(0.5);
gain.toMaster();

//----------------------------------------------------------
// Background sound functions

// let noise = new Tone.Noise('white');
// let oscillator = new Tone.Oscillator(65, 'sine');

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
        'type': 'sine',
        'modulationFrequency': 0.8
    },
    'envelope': {
        'attack': 0.2,
        'decay': 0.5,
        'sustain': 0.2,
        'release': 0.5,
    }
});

synth.connect(gain);

//----------------------------------------------------------
//Singular tone functions

export function c3() {
    synth.triggerAttackRelease('C3', '8n');
}

export function cSharp3() {
    synth.triggerAttackRelease('C#3', '8n');
}

export function d3() {
    synth.triggerAttackRelease('D3', '8n');
}

export function dSharp3() {
    synth.triggerAttackRelease('D#3', '8n');
}

export function e3() {
    synth.triggerAttackRelease('E3', '8n');
}

export function f3() {
    synth.triggerAttackRelease('F3', '8n');
}

export function fSharp3() {
    synth.triggerAttackRelease('F#3', '8n');
}

export function g3() {
    synth.triggerAttackRelease('G3', '8n');
}

export function gSharp3() {
    synth.triggerAttackRelease('G#3', '8n');
}

export function a4() {
    synth.triggerAttackRelease('A4', '8n');
}

export function aSharp4() {
    synth.triggerAttackRelease('A#4', '8n');
}

export function b4() {
    synth.triggerAttackRelease('B4', '8n');
}

export function c4() {
    synth.triggerAttackRelease('C4', '8n');
}

export function cSharp4() {
    synth.triggerAttackRelease('C#4', '8n');
}

export function d4() {
    synth.triggerAttackRelease('D4', '8n');
}

export function dSharp4() {
    synth.triggerAttackRelease('D#4', '8n');
}
