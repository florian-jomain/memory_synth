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
        return 'C3';
    }

    cSharp3() {
        synth.triggerAttackRelease('C#3', '8n');
        return 'C#3';
    }

    d3() {
        synth.triggerAttackRelease('D3', '8n');
        return 'D3';
    }

    dSharp3() {
        synth.triggerAttackRelease('D#3', '8n');
        return 'D#3';
    }

    e3() {
        synth.triggerAttackRelease('E3', '8n');
        return 'E3';
    }

    f3() {
        synth.triggerAttackRelease('F3', '8n');
        return 'F3';
    }

    fSharp3() {
        synth.triggerAttackRelease('F#3', '8n');
        return 'F#3';
    }

    g3() {
        synth.triggerAttackRelease('G3', '8n');
        return 'G3';
    }

    gSharp3() {
        synth.triggerAttackRelease('G#3', '8n');
        return 'G#3';
    }

    a4() {
        synth.triggerAttackRelease('A4', '8n');
        return 'A4';
    }

    aSharp4() {
        synth.triggerAttackRelease('A#4', '8n');
        return 'A#4';
    }

    b4() {
        synth.triggerAttackRelease('B4', '8n');
        return 'B4';
    }

    c4() {
        synth.triggerAttackRelease('C4', '8n');
        return 'C4';
    }

    cSharp4() {
        synth.triggerAttackRelease('C#4', '8n');
        return 'C#4';
    }

    d4() {
        synth.triggerAttackRelease('D4', '8n');
        return 'D4';
    }

    dSharp4() {
        synth.triggerAttackRelease('D#4', '8n');
        return 'D#4';
    }

    sequence1() {
        const sequence1 = ['D3', 'G3', 'D4', 'C4', 'D4'];
        let seq1 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, '8n', time);
        }, sequence1, '4n');
        seq1.loop = false;
        Tone.Transport.bpm.value = 60;
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