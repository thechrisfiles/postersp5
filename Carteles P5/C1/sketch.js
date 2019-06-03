var x = 0;
var y = 0;
var s = 50;
let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img = loadImage('1.jpg');
}

function draw() {
  fill(255);
  noStroke();
  if (random(1) < 0.4) {
    triangle(x, y, x, y + s, x + s, y + s);
  } else {
    triangle(x, y, x + s, y + s, x + s, y);
  }
  x += s;
  if (x > width) {
    x = 0;
    y += s;
  }
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}
