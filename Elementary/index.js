const core = require('elementary-core');
const el = require('@nick-thompson/elementary');

function sineTone(t) {
  return el.sin(el.mul(2 * Math.PI, t));
}

core.on('load', function() {
  let tone = sineTone(el.phasor(440));
  core.render(tone);
});
