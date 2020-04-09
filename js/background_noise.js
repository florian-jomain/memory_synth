// Web browsers are blocking audio context before user makes a gesture. This should fix it.
let started = null;
window.addEventListener('click', () => {
  if (started) return;
  started = true;
});

const gain = new Tone.Gain(0.001);
gain.toMaster();

const phaser = new Tone.Phaser({
    'frequency': 0.1,
    'octaves': 5,
    'stages': 10,
    'Q': 10,
    'baseFrequency': 350
}).connect(gain);

const reverb = new Tone.Reverb({
    decay: 10,
    preDelay: 0.05
});

reverb.generate();

const whiteNoise = new Tone.Noise({
    type: 'white',
    fadeIn: 2,
}).connect(phaser).connect(reverb).connect(gain).start(1.5);



// document.getElementById('black-button').addEventListener('click', fadeOutSound);
// document.getElementById('white-button').addEventListener('click', fadeOutSound);