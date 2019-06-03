let rows = 0;
let segments = 3;
let rowHeight = 30;
let rowMultiplier = 1;
let border = 50;
let yPos = border;
let count = 0;
let totalCount = 40;
let = img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke();
  background(255);
  img = loadImage('flO.png');
}


function draw() {

  push();
  translate(width * 0.25, 0);
  if (random() < 0.2 && segments > 1) {
    segments--;
  }
  if (random() < 0.1) {
    rowMultiplier = rowMultiplier * 0.5;
  }
  if (count < totalCount) {
    for (let i = 0; i < segments; i++) {

      if (random() < 0.2) {
        let x = width / 2 / segments;
        rect(i * x, yPos - rowHeight * 0.5 * rowMultiplier, x, rowHeight * rowMultiplier);
        count++;
      }
    }
    yPos += rowHeight;
  } else {
    hardReset();
  }
  if (yPos > height - border) {
    softReset();
  }
  pop();
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function hardReset() {
  background(255);
  softReset();
  count = 0;
}

function softReset() {
  yPos = border;
  segments = 3;
  rowMultiplier = 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}