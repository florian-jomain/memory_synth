// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('load', () => {
  if (started) return;
  started = true;
});

const gain = new Tone.Gain(0.1);
gain.toMaster();

const phaser = new Tone.Phaser({
    'frequency': 0.1,
    'octaves': 5,
    'stages': 10,
    'Q': 10,
    'baseFrequency': 350
}).connect(gain);

// const reverb = new Tone.JCReverb({
//     decay: 10,
//     preDelay: 0.05
// });

// reverb.generate();

const jcReverb = new Tone.JCReverb(4);

// const whiteNoise = new Tone.Noise({
//     type: 'white',
//     fadeIn: 2,
// }).connect(phaser).connect(reverb).connect(gain).start(1.5);

// const oscillator = new Tone.OmniOscillator({
//     frequency : 20 ,
//     detune : 0.1 ,
//     phase : 0.1,
//     width: 0.1,
//     volume: -1
// }).connect(phaser).connect(reverb).connect(gain).start(1);

const fmSynth = new Tone.FMSynth({
    harmonicity : 7 ,
    modulationIndex : 0.5 ,
    detune : 0 ,
    oscillator : {
    type : 'sine'
    } ,
    envelope : {
    attack : 0.01 ,
    decay : 0.01 ,
    sustain : 1 ,
    release : 0.5
    } ,
    modulation : {
    type : 'square'
    } ,
    modulationEnvelope : {
    attack : 0.5 ,
    decay : 0 ,
    sustain : 1 ,
    release : 0.5
    }
});

fmSynth.chain(jcReverb, gain);

// fmSynth.triggerAttack('D2', '2n');

const bgdSequence = new Tone.Sequence((time, note) => {
    fmSynth.triggerAttack(note, '32n', time);
}, ['D1', 'G1', 'D2', 'C2', 'D2'], '32n');

bgdSequence.start();

Tone.Transport.start();