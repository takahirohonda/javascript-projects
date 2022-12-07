function setup() {
  // windowWidth & windowHeight will read the browser width and height.
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(225);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
