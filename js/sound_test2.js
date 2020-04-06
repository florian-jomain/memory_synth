console.clear();

let synth = new Tone.Synth();
let gain = new Tone.Gain(0.3);
let notes = ['D3', 'G3', 'D4', 'C4', 'D4'];

synth.connect(gain);
gain.toMaster();

// synth.triggerAttackRelease('C4', 0.25); -> single note

let pattern = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, '2n', time);
}, notes, '8n');

pattern.start(0);

// Creating envelope
let env = new Tone.Envelope({
    'attack' : 0.9 ,
    'decay' : 0.9 ,
    'sustain' : 0.9 ,
    'release' : 0.9 ,
    'attackCurve' : 'ripple',
    'releaseCurve' : 'ripple'
  });

synth.set({
  "envelope" : {
    env
  }
});

// Tone.Transport.start();

//----------------------------------------
// Other built piano

// const notes = [
//   "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"
// ];

// let synth = new Tone.Synth({
//   'oscillator': {
//       'type': 'pwm',
//       'modulationFrequency': 0.2
//   },
//   'envelope': {
//       'attack': 0.02,
//       'decay': 0.1,
//       'sustain': 0.2,
//       'release': 0.9,
//   }
// }).toMaster();

// function startSound(note, octave) {
//   synth.triggerAttack(notes[note] + octave);
//   console.log('notes[note] + octave');
// }

// function stopSound() {
//   synth.triggerRelease();
// }

