console.clear();

// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
})

//----------------------------------------------------------
//Generic variables

const gain = new Tone.Gain(0.7);
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

let reverb = new Tone.Reverb({
    decay: 10,
    preDelay: 0.05
});
reverb.generate();

synth.chain(reverb, gain);
// synth.connect(gain); // to plug off reverb

//----------------------------------------------------------
//Singular tone functions

import { userInput } from './events.js';

class notesClass {

    c3Click() {
        userInput.push('C3');
        console.log(userInput);
    }

    cSharp3Click() {
        userInput.push('C#3');
        console.log(userInput);
    }

    d3Click() {
        userInput.push('D3');
        console.log(userInput);
    }

    dSharp3Click() {
        userInput.push('D#3');
        console.log(userInput);
    }

    e3Click() {
        userInput.push('E3');
        console.log(userInput);
    }

    f3Click() {
        userInput.push('F3');
        console.log(userInput);
    }

    fSharp3Click() {
        userInput.push('F#3');
        console.log(userInput);
    }

    g3Click() {
        userInput.push('G3');
        console.log(userInput);
    }

    gSharp3Click() {
        userInput.push('G#3');
        console.log(userInput);
    }

    a4Click() {
        userInput.push('A4');
        console.log(userInput);
    }

    aSharp4Click() {
        userInput.push('A#4');
        console.log(userInput);
    }

    b4Click() {
        userInput.push('B4');
        console.log(userInput);
    }

    c4Click() {
        userInput.push('C4');
        console.log(userInput);
    }

    cSharp4Click() {
        userInput.push('C#4');
        console.log(userInput);
    }

    d4Click() {
        userInput.push('D4');
        console.log(userInput);
    }

    dSharp4Click() {
        userInput.push('D#4');
        console.log(userInput);
    }

    c3Hover() {
        synth.triggerAttackRelease('C3', '8n');
    }

    cSharp3Hover() {
        synth.triggerAttackRelease('C#3', '8n');
    }

    d3Hover() {
        synth.triggerAttackRelease('D3', '8n');
    }

    dSharp3Hover() {
        synth.triggerAttackRelease('D#3', '8n');
    }

    e3Hover() {
        synth.triggerAttackRelease('E3', '8n');
    }

    f3Hover() {
        synth.triggerAttackRelease('F3', '8n');
    }

    fSharp3Hover() {
        synth.triggerAttackRelease('F#3', '8n');
    }

    g3Hover() {
        synth.triggerAttackRelease('G3', '8n');
    }

    gSharp3Hover() {
        synth.triggerAttackRelease('G#3', '8n');
    }

    a4Hover() {
        synth.triggerAttackRelease('A4', '8n');
    }

    aSharp4Hover() {
        synth.triggerAttackRelease('A#4', '8n');
    }

    b4Hover() {
        synth.triggerAttackRelease('B4', '8n');
    }

    c4Hover() {
        synth.triggerAttackRelease('C4', '8n');
    }

    cSharp4Hover() {
        synth.triggerAttackRelease('C#4', '8n');
    }

    d4Hover() {
        synth.triggerAttackRelease('D4', '8n');
    }

    dSharp4Hover() {
        synth.triggerAttackRelease('D#4', '8n');
    }

    sequence(sequence) {
        let seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, '8n', time);
        }, sequence, '4n');
        seq.loop = false;
        Tone.Transport.bpm.value = 90;
        seq.start(0);
        Tone.Transport.start();
    }

    background() {
        let oscillator = new Tone.Oscillator(400, 'sine').start();
        let lowPassFilter = new Tone.LowpassCombFilter(0.1, 1, 400);
        oscillator.chain(lowPassFilter, gain);
    }
}

export { notesClass };