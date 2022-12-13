Tone.Transport.bpm.value = 107;

// Setting Gain
const gainKick = new Tone.Gain(1);
const gainHiHat = new Tone.Gain(0.1);
const gainSnare = new Tone.Gain(2);
const gainBass = new Tone.Gain(2);
const gainPolySynth = new Tone.Gain(0.4);

// Effect
const distortion = new Tone.Distortion({
  distortion: 0.1,
  oversample: '4x', // none, 2x, 4x
});
const reverb = new Tone.Reverb(0.75, 1000);

const feedbackDelay = new Tone.FeedbackDelay('8n', 0.25);
const compressor = new Tone.Compressor({
  ratio: 5,
  threshold: -12,
  release: 0.25,
  attack: 0.02,
  knee: 10,
});

gainKick.chain(compressor, Tone.Master);
const kick = new Tone.MembraneSynth({
  pitchDecay:0.05,
  octaves: 4,
  oscillator : {
    type :'fmsine',
    phase: 140,
    modulationType: 'sine',
    modulationIndex:0.8,
    partials: [1] //1,0.1,0.01,0.01
  },
  envelope :{
    attack:0.01,
    decay :0.74,
    sustain: 0.71,
    release: 0.05,
    attackCurve :'exponential'
  }
}).connect(gainKick);

gainHiHat.chain(reverb, Tone.Master);
const hiHat = new Tone.MetalSynth({
  frequency  : 600,
  envelope  : {
    attack  : 0.001 ,
    decay  : 1.4 ,
    release  : 0.2
  }  ,
  harmonicity  : 5.1 ,
  modulationIndex  : 32 ,
  resonance  : 4000 ,
  octaves  : 1.5
}).connect(gainHiHat);

gainSnare.chain(Tone.Master);
const snareDrum = new Tone.NoiseSynth({
  volume: 2,
  noise: {
    type: 'pink',
    playbackRate: 3,
  },
  envelope: {
    attack: 0.001,
    decay: 0.13,
    sustain: 0,
    release: 0.03,
  },
}).connect(gainSnare);

// const lowPass = new Tone.Filter({
//   frequency: 8000,
// }).toMaster();

const kickLoop = new Tone.Loop(time => {
  kick.triggerAttackRelease('C1', '8n', time);
}, '4n');
const kickNote = 'E1';
const kickSequence = new Tone.Sequence((time, note) => {
  kick.triggerAttackRelease(note, 0.1, time);
}, [kickNote, [ ,kickNote], kickNote, , , kickNote, , kickNote,])
  .start(0);

const hiHatLoop = new Tone.Loop(time => {
  hiHat.triggerAttackRelease('C6', '8n', time);
}, '8n').start(0);


const snareDrumLoop = new Tone.Loop(time => {
  snareDrum.triggerAttackRelease('2n', time);
}, '2n').start('4n');


// const snarePart = new Tone.Part(time => {
//   snareDrum.triggerAttackRelease('4n', time);
// }, snares);
gainBass.chain(Tone.Master);
const bassline = [
  {'time': 0, 'note': 'A1', 'duration': '4n.'},
  {'time': '0:1', 'note': 'C2', 'duration': '4n.'},
  {'time': '0:3', 'note': 'E1', 'duration': '2n'},
  {'time': '1:0', 'note': 'F1', 'duration': '4n.'},
  {'time': '1:1', 'note': 'D2', 'duration': '4n.'},
  {'time': '1:3', 'note': 'E1', 'duration': '4n'},
  {'time': '2:0', 'note': 'D1', 'duration': '4n.'},
  {'time': '2:1', 'note': 'F2', 'duration': '8n.'},
  {'time': '2:1.5', 'note': 'D2', 'duration': '8n.'},
  {'time': '2:3', 'note': 'E1', 'duration': '4n'},
  {'time': '3:0', 'note': 'F1', 'duration': '2n'},
  {'time': '3:1', 'note': 'D2', 'duration': '2n'},
  {'time': '3:1.5', 'note': 'F2', 'duration': '2n'},
  {'time': '3:2', 'note': 'E1', 'duration': '4n'},
  {'time': '3:3', 'note': 'D1', 'duration': '4n'},
  // {'time': '4:0', 'note': 'A1', 'duration': '2n.'},
  // {'time': '4:3', 'note': 'E1', 'duration': '4n'},
  // {'time': '5:0', 'note': 'F1', 'duration': '2n.'},
  // {'time': '5:3', 'note': 'E1', 'duration': '4n'},
  // {'time': '6:0', 'note': 'D1', 'duration': '2n.'},
  // {'time': '6:3', 'note': 'E1', 'duration': '4n'},
  // {'time': '7:0', 'note': 'F1', 'duration': '2n'},
  // {'time': '7:2', 'note': 'E1', 'duration': '4n'},
  // {'time': '7:3', 'note': 'D1', 'duration': '4n'},
];


const bass = new Tone.Synth({
  oscillator : {
    type : 'triangle'
  }
}).connect(gainBass);

const bassPart = new Tone.Part(function(time, note) {
  bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(0);

bassPart.loop = true;
bassPart.loopStart = 0;
bassPart.loopEnd = 9;

// Chord
const AMinorScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const CMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const GMajorScale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];

const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
  const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#');
  const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
  return `${note}${noteOctaveNumber}`;
});

const AMinorScaleWithOctave = addOctaveNumbers(AMinorScale, 4);
// Output ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4'];

// AMinorScaleWithOctave.forEach((note, index) => {
//   (new Tone.Synth()).toMaster().triggerAttackRelease(note, '4n', index + 1);
// });

const constructMajorChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  };

  const thirdNote = getNextChordNote(rootNote, 3);
  const fifthNote = getNextChordNote(rootNote, 5);
  const chord = [rootNote, thirdNote, fifthNote];

  return chord;
};

const constructMajorSevenChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  };

  const thirdNote = getNextChordNote(rootNote, 3);
  const fifthNote = getNextChordNote(rootNote, 5);
  const majorSeventhNote = getNextChordNote(rootNote, 7);
  const chord = [rootNote, thirdNote, fifthNote, majorSeventhNote];

  return chord;
};

const constructMajorNinthChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  };

  const thirdNote = getNextChordNote(rootNote, 3);
  const fifthNote = getNextChordNote(rootNote, 5);
  const majorSeventhNote = getNextChordNote(rootNote, 7);
  const majorNinthNote = getNextChordNote(rootNote, 9);
  const chord = [rootNote, thirdNote, fifthNote, majorSeventhNote, majorNinthNote];

  return chord;
};

const IChord1 = constructMajorNinthChord(AMinorScale, 5, 'A4');
const VChord1 = constructMajorSevenChord(AMinorScale, 5, 'E5');
const VIChord1= constructMajorNinthChord(AMinorScale, 4, 'F4');
const IVChord1 = constructMajorNinthChord(AMinorScale, 4, 'D4');

const CMajor7 = constructMajorSevenChord(CMajorScale, 5, 'C4');
const GMajor7 = constructMajorSevenChord(GMajorScale, 5, 'G4');
const highOctaveChordsExample = [
  {'time': 0, 'note': IChord1, 'duration': '2n.'},
  {'time': '0:3', 'note': VChord1, 'duration': '4n'},
  {'time': '1:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '1:3', 'note': VChord1, 'duration': '4n'},
  {'time': '2:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '2:3', 'note': VChord1, 'duration': '4n'},
  {'time': '3:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '3:2', 'note': VChord1, 'duration': '4n'},
  {'time': '3:3', 'note': IVChord1, 'duration': '4n'},
  // {'time': '4:0', 'note': IChord1, 'duration': '2n.'},
  // {'time': '4:3', 'note': VChord1, 'duration': '4n'},
  // {'time': '5:0', 'note': VIChord1, 'duration': '2n.'},
  // {'time': '5:3', 'note': VChord1, 'duration': '4n'},
  // {'time': '6:0', 'note': IVChord1, 'duration': '2n.'},
  // {'time': '6:3', 'note': VChord1, 'duration': '4n'},
  // {'time': '7:0', 'note': VIChord1, 'duration': '2n'},
  // {'time': '7:2', 'note': VChord1, 'duration': '4n'},
  // {'time': '7:3', 'note': IVChord1, 'duration': '4n'},
];

const highOctaveChords = [
  {'time': 0, 'note': CMajor7, 'duration': '4n.'},
  {'time': '0:2', 'note': GMajor7, 'duration': '4n'},
];
gainPolySynth.chain(Tone.Master);
const highSynth = new Tone.PolySynth({
  volume: -16,
  count: 6,
  spread: 80,
  oscillator : {
    type : 'fatsawtooth'
  }
}).connect(gainPolySynth);

const highOctaveChordPart = new Tone.Part((time, note) => {
  highSynth.triggerAttackRelease(note.note, note.duration, time, 1);
}, highOctaveChordsExample);

highOctaveChordPart.loop = true;
highOctaveChordPart.loopStart = 0;
highOctaveChordPart.loopEnd = 9;

document.querySelector('.play-button').addEventListener('click', async () => {
  console.log('Play the track!');
  // highOctaveChordPart.start(0);
  await Tone.Transport.start();
});

document.querySelector('.stop-button').addEventListener('click', async () => {
  await Tone.Transport.stop();
});
hiHatLoop.mute = true;
document.querySelector('.hi-hat-controller').addEventListener('click', async () => {
  hiHatLoop.mute = !hiHatLoop.mute;
});
