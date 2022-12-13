class Snare {
  constructor() {
    const lowPass = new Filter({
      frequency: 11000,
    }).toMaster();

    const noise = new NoiseSynth({
      volume: -12,
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
    }).connect(lowPass);

    const poly = new PolySynth(6, Synth, {
      volume: -10,
      oscillator: {
        partials: [0, 2, 3, 4],
      },
      envelope: {
        attack: 0.001,
        decay: 0.17,
        sustain: 0,
        release: 0.05,
      },
    }).toMaster();

    const notes = ['C2', 'D#2', 'G2'];

    /**
		 * Method 1
		 *
		 */
    // const ratio = 11;
    // const attack = 0.0;
    // const decay = 0.04;

    /**
		 * Method 2
		 *
		 */
    const freqEnv = [];
    poly.voices.forEach((v, i) => {
      const env = new FrequencyEnvelope({
        attack: 0.001,
        decay: 0.08,
        release: 0.08,
        baseFrequency: Frequency(notes[i]),
        octaves: Math.log2(13),
        releaseCurve: 'exponential',
        exponent: 3.5,
      });
      env.connect(v.oscillator.frequency);
      freqEnv[i] = env;
    });

    const part = new Part(
      (time) => {
        poly.voices.forEach((v, i) => {
          /**
					 * Method 1
					 *
					 */
          // v.oscillator.frequency.setValueAtTime(Frequency(notes[i]) * ratio, time + attack);
          // v.oscillator.frequency.exponentialRampToValueAtTime(notes[i], time + decay);

          /**
					 * Method 2
					 *
					 */
          freqEnv[i].triggerAttackRelease('16n', time);
          v.envelope.triggerAttackRelease('16n', time);
        });
        noise.triggerAttackRelease('16n', time);
      },
      ['0:1', '0:3'],
    );

    this.noise = noise;
    this.poly = poly;
    this.lpf = lowPass;
    this.part = part;
  }

  start(time) {
    this.part.start(time);
  }

  trigger(time) {
    this.noise.triggerAttack(time);
    this.poly.triggerAttackRelease(['Eb3', 'G4', 'C5'], '16n', time);
  }
}
