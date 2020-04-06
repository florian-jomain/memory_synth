console.clear();

//--------------------------------------------
// Loops

const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
const gain = new Tone.Gain(0.5);
gain.toMaster();
synth.connect(gain);

const notes = ['D3', 'G3', 'D4', 'C4', 'D4'];

let index = 0;

Tone.Transport.scheduleOnce(time => {
	repeat(time);
}, '8n');

function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '16n', time);
    index++;
}

const sequence = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, '16n', time);
}, notes, ('16n'));

// setTimeout(() => {
//     Tone.Transport.stop();
// }, 5000);

sequence.start();

//-----------------------------------------------
// Loop

// const loop = new Tone.Loop(time => {
//   synth.triggerAttackRelease('D3', '4n', time);
// }, '4n');

// loop.start('1m').stop('4m');

// Tone.Transport.start();

//--------------------------------------------
// Instruments

const synth2 = new Tone.Synth({
  oscillator : {
    type : "pwm",
    modulationFrequency : 0.6
  },
  envelope : {
    attack : 0.02,
    decay : 0.1,
    sustain : 0.2,
    release : 0.9,
  }
});

// synth2.connect(gain);

// synth2.triggerAttack('D3', "+1");

const polySynth = new Tone.PolySynth(4, Tone.Synth).connect(gain);

// polySynth.triggerAttackRelease(['D3', 'G3', 'D4', 'C4'], "2n");

//--------------------------------------------
// Effects

const distortion = new Tone.Distortion(0.4).connect(gain);
synth2.connect(distortion);

// synth2.triggerAttack('D3', "+1");

//--------------------------------------------
// Sources

// const pwm = new Tone.PWMOscillator("Bb3").connect(gain).start();

//--------------------------------------------
// Noise

// const whiteNoise = new Tone.Noise('white').connect(gain).start();

// const autoFilter = new Tone.AutoFilter({
//   "frequency": "16m",
//   "min": 100,
//   "max": 20000
// }).connect(gain);

// whiteNoise.connect(autoFilter);

// autoFilter.start();

//---------------------------------------------------

// function play(time) {
//   notes.forEach(note => {
//     synth.triggerAttackRelease(note, '16n', time);
//   })
// }

// let sequence = new Tone.Sequence((time, note) => {
//   console.log(note);
// }, notes, '16n');

// Tone.Transport.bpm.value = 80;

// synth.triggerAttack(notes, '8n')