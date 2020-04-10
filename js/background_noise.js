// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
});

const gain = new Tone.Gain(0.7);
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

const sequence1 = new Tone.Sequence((time, note) => {
    fmSynth.triggerAttackRelease(note, '32n', time);
}, ['D1', 'G1', 'D2', 'C2', 'D2', 'A2'], '32n');

// sequence1.start(10);

// const sequence2 = new Tone.Sequence((time, note) => {
//     fmSynth.triggerAttackRelease(note, '32n', time);
// }, ['D1', 'G1', 'D2', 'C2', 'D2', 'A2', 'A#2'], '32n');

// sequence2.start(14);

// const sequence3 = new Tone.Sequence((time, note) => {
//     fmSynth.triggerAttackRelease(note, '32n', time);
// }, ['D3', 'G3', 'D4', 'C4', 'D4', 'A4', 'A#4'], '32n');

// sequence3.start(10);

const amSynth = new Tone.AMSynth({
	harmonicity : 3 ,
	detune : 0 ,
	oscillator : {
    type : 'sine',
    volume : -4
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

amSynth.connect(jcReverb).connect(gain);

const sequence3 = new Tone.Sequence((time, note) => {
    amSynth.triggerAttackRelease(note, '32n', time);
}, ['D2'], '1n');

sequence3.humanize = true;

sequence3.start(0);

Tone.Transport.start(2);

// function fadeOut() {
//     const panVol = new Tone.PanVol({
//         pan : -1 ,
//         volume : 50 ,
//         mute : false
//     });
//     console.log('receiving');
//     amSynth.connect(panVol);
// }