function setup() {
  // windowWidth & windowHeight will read the browser width and height.
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let audioContext;
let audio;

function mousePressed() {
  if (!audioContext) {
    audioContext = new AudioContext();
    audio = document.createElement("audio");
    audio.loop = true;
    audio.src = "audio/piano.mp3";
    audio.play()

    const source = audioContext.createMediaElementSource(audio)
    // wire the source to the speakers
    source.connect(audioContext.destination)
  } else {
    audio.pause();
    audioContext.close();
    audioContext = audio = null;
  }
}

function draw() {
  background("black"); // filling the background

  fill("white");
  noStroke();

  // Draw play/pause button
  const dim = min(width, height);
  if (audioContext) {
    polygon(width / 2, height / 2, dim * 0.1, 4, PI / 4);
  } else {
    polygon(width / 2, height / 2, dim * 0.1, 3);
  }
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
