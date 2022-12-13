# Making sounds with Tone.js

## 1. Connecting to output

You can either use `toDestination()`or`.connect(Tone.Master)`.

```js
const synth = new Tone.Synth().connect(Tone.Master);

const synth = new Tone.Synth().toDestination();
```

## 2. Using master volume

```js
// Set global volume in decibels
const volume = -15;
// Set the volume
Tone.Master.volume.value = volume;
```

## 3. Using effects

Use `.connect()` to chain the effects. Or use `.chain()` to chain the effect.

Using `.connect()`

```js
const reverb = new Tone.Reverb({
  decay: 5,
  wet: 0.5,
  preDelay: 0.2,
});
// Load the reverb
await reverb.generate();

const effect = new Tone.FeedbackDelay(0.4, 0.85);

filter = new Tone.Filter();
filter.type = "lowpass";

synth.connect(effect);
effect.connect(reverb);
reverb.connect(filter);
filter.connect(Tone.Master);
```

Using `.chain`

```js
const distortion = new Tone.Distortion({
  distortion: 0.1,
  oversample: "4x", // none, 2x, 4x
});
const reverb = new Tone.Freeverb(0.75, 3000);
const gain = new Tone.Gain(0.5);
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.25);
const compressor = new Tone.Compressor({
  ratio: 12,
  threshold: -24,
  release: 0.25,
  attack: 0.003,
  knee: 10,
});

gain.chain(reverb, compressor, Tone.Master);
gain.chain(compressor, Tone.Master);

bd.chain(gain);
```
