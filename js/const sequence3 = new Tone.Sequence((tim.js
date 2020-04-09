const sequence3 = new Tone.Sequence((time, note) => {
    fmSynth.triggerAttackRelease(note, '32n', time);
}, ['D3', 'G3', 'D4', 'C4', 'D4', 'A4', 'A#4'], '32n');

const AM