console.clear();

// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
})

//----------------------------------------------------------
//Generic variables

const gain = new Tone.Gain(0.3);
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
        'type': 'fatsawtooth',
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

class notesClass {

    c3() {
        synth.triggerAttackRelease('C3', '8n');
    }

    cSharp3() {
        synth.triggerAttackRelease('C#3', '8n');
    }

    d3() {
        synth.triggerAttackRelease('D3', '8n');
    }

    dSharp3() {
        synth.triggerAttackRelease('D#3', '8n');
    }

    e3() {
        synth.triggerAttackRelease('E3', '8n');
    }

    f3() {
        synth.triggerAttackRelease('F3', '8n');
    }

    fSharp3() {
        synth.triggerAttackRelease('F#3', '8n');
    }

    g3() {
        synth.triggerAttackRelease('G3', '8n');
    }

    gSharp3() {
        synth.triggerAttackRelease('G#3', '8n');
    }

    a4() {
        synth.triggerAttackRelease('A4', '8n');
    }

    aSharp4() {
        synth.triggerAttackRelease('A#4', '8n');
    }

    b4() {
        synth.triggerAttackRelease('B4', '8n');
    }

    c4() {
        synth.triggerAttackRelease('C4', '8n');
    }

    cSharp4() {
        synth.triggerAttackRelease('C#4', '8n');
    }

    d4() {
        synth.triggerAttackRelease('D4', '8n');
    }

    dSharp4() {
        synth.triggerAttackRelease('D#4', '8n');
    }

    sequence1() {
        const sequence1 = ['D3', 'G3', 'D4', 'C4', 'D4'];
        let seq1 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, '8n', time);
        }, sequence1, '8n')
        Tone.Transport.bpm.value = 40;
        seq1.start(0);
        Tone.Transport.start();
    }

    background() {
        let oscillator = new Tone.Oscillator(400, 'sine').start();
        let lowPassFilter = new Tone.LowpassCombFilter(0.1, 1, 400);
        oscillator.chain(lowPassFilter, gain);
    }
}

export { notesClass };