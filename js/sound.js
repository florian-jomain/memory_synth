console.clear();

// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
})

//----------------------------------------------------------
//Generic variables

const gain = new Tone.Gain(0.1);
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

// let reverb = new Tone.Reverb({
//     decay: 10,
//     preDelay: 0.05
// });
// reverb.generate();

// synth.chain(reverb, gain);
synth.connect(gain); // to plug off reverb

//----------------------------------------------------------
//Singular tone functions

import { sequences, level, boardButtons, userInput, setActive, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16 } from './events.js';

class notesClass {

    c3() {
        synth.triggerAttackRelease('C3', '4n');
        setActive(button1);
        userInput.push('C3');
        console.log(`User input: ${userInput}`);
    }

    cSharp3() {
        synth.triggerAttackRelease('C#3', '4n');
        setActive(button2);
        userInput.push('C#3');
        console.log(`User input: ${userInput}`);
    }

    d3() {
        synth.triggerAttackRelease('D3', '4n');
        setActive(button3);
        userInput.push('D3');
        console.log(`User input: ${userInput}`);
    }

    dSharp3() {
        synth.triggerAttackRelease('D#3', '4n');
        setActive(button4);
        userInput.push('D#3');
        console.log(`User input: ${userInput}`);
    }

    e3() {
        synth.triggerAttackRelease('E3', '4n');
        setActive(button5);
        userInput.push('E3');
        console.log(`User input: ${userInput}`);
    }

    f3() {
        synth.triggerAttackRelease('F3', '4n');
        setActive(button6);
        userInput.push('F3');
        console.log(`User input: ${userInput}`);
    }

    fSharp3() {
        synth.triggerAttackRelease('F#3', '4n');
        setActive(button7);
        userInput.push('F#3');
        console.log(`User input: ${userInput}`);
    }

    g3() {
        synth.triggerAttackRelease('G3', '4n');
        setActive(button8);
        userInput.push('G3');
        console.log(`User input: ${userInput}`);
    }

    gSharp3() {
        synth.triggerAttackRelease('G#3', '4n');
        setActive(button9);
        userInput.push('G#3');
        console.log(`User input: ${userInput}`);
    }

    a4() {
        synth.triggerAttackRelease('A4', '4n');
        setActive(button10);
        userInput.push('A4');
        console.log(`User input: ${userInput}`);
    }

    aSharp4() {
        synth.triggerAttackRelease('A#4', '4n');
        setActive(button11);
        userInput.push('A#4');
        console.log(`User input: ${userInput}`);
    }

    b4() {
        synth.triggerAttackRelease('B4', '4n');
        setActive(button12);
        userInput.push('B4');
        console.log(`User input: ${userInput}`);
    }

    c4() {
        synth.triggerAttackRelease('C4', '4n');
        setActive(button13);
        userInput.push('C4');
        console.log(`User input: ${userInput}`);
    }

    cSharp4() {
        synth.triggerAttackRelease('C#4', '4n');
        setActive(button14);
        userInput.push('C#4');
        console.log(`User input: ${userInput}`);
    }

    d4() {
        synth.triggerAttackRelease('D4', '4n');
        setActive(button15);
        userInput.push('D4');
        console.log(`User input: ${userInput}`);
    }

    dSharp4() {
        synth.triggerAttackRelease('D#4', '4n');
        setActive(button16);
        userInput.push('D#4');
        console.log(`User input: ${userInput}`);
    }

    // c3Hover() {
    //     synth.triggerAttackRelease('C3', '4n');
    // }

    // cSharp3Hover() {
    //     synth.triggerAttackRelease('C#3', '4n');
    // }

    // d3Hover() {
    //     synth.triggerAttackRelease('D3', '4n');
    // }

    // dSharp3Hover() {
    //     synth.triggerAttackRelease('D#3', '4n');
    // }

    // e3Hover() {
    //     synth.triggerAttackRelease('E3', '4n');
    // }

    // f3Hover() {
    //     synth.triggerAttackRelease('F3', '4n');
    // }

    // fSharp3Hover() {
    //     synth.triggerAttackRelease('F#3', '4n');
    // }

    // g3Hover() {
    //     synth.triggerAttackRelease('G3', '4n');
    // }

    // gSharp3Hover() {
    //     synth.triggerAttackRelease('G#3', '4n');
    // }

    // a4Hover() {
    //     synth.triggerAttackRelease('A4', '4n');
    // }

    // aSharp4Hover() {
    //     synth.triggerAttackRelease('A#4', '4n');
    // }

    // b4Hover() {
    //     synth.triggerAttackRelease('B4', '4n');
    // }

    // c4Hover() {
    //     synth.triggerAttackRelease('C4', '4n');
    // }

    // cSharp4Hover() {
    //     synth.triggerAttackRelease('C#4', '4n');
    // }

    // d4Hover() {
    //     synth.triggerAttackRelease('D4', '4n');
    // }

    // dSharp4Hover() {
    //     synth.triggerAttackRelease('D#4', '4n');
    // }

    sequence(sequence) {
        let seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, '4n', time);
        }, sequence, '4n');
        seq.loop = false;
        Tone.Transport.bpm.value = 90;
        seq.start();
        Tone.Transport.start();
    }

    background() {
        let oscillator = new Tone.Oscillator(400, 'sine').start();
        let lowPassFilter = new Tone.LowpassCombFilter(0.1, 1, 400);
        oscillator.chain(lowPassFilter, gain);
    }
}

export { notesClass };

