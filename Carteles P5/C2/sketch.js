    
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
