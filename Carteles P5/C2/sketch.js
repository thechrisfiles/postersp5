    
let increment = 0.008;
let zoff = 0.0;
let zincrement = 0.008;
let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img = loadImage('flO.png');
}

function draw() {
  
  loadPixels();
  let xoff = 0.0;
  for (let x = 0; x < width / 2; x++) {
    xoff += increment;
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      yoff += increment;
      let bright = noise(xoff, yoff, zoff) * 255;
      
      if(bright>110){
        bright = 255;
      }else{
        bright = 0;
      }

      let loc = (x + y * width) * 4;
      pixels[loc] = bright;
      pixels[loc + 1] = bright;
      pixels[loc + 2] = bright;

      let flippedXPos = width - x - 1;
      let flippedLoc = (flippedXPos + y * width) * 4;
      pixels[flippedLoc] = bright;
      pixels[flippedLoc + 1] = bright;
      pixels[flippedLoc + 2] = bright;

    }
    
  }

  updatePixels();
  zoff += zincrement;
  image(img, 0, height / 2, img.width / 2, img.height / 2);

}














/*let yoff = 0.0; // 2nd dimension of perlin noise
let mic;
function setup() {
  createCanvas(windowWidth, windowHeight);
    // Create an Audio input
    mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start()
}

function draw() {
  background(51);
  let vol = mic.getLevel();

  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0 + vol; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff - vol), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
*/