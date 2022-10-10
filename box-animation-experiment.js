

let boxColor, boxSize, cX, cY, posX, posY;
let particleCount = 0;
let boxColorInt = 0;

function setup() {

  if (windowWidth > windowHeight) {
      cX = windowHeight * 0.9;
      cY = windowHeight * 0.9;
    } else {
      cX = windowWidth * 0.9;
      cY = windowWidth * 0.9;
    }
  
  let myCanvas = createCanvas(cX, cY);
  myCanvas.parent("main-window");

  background(0, 0, 0, 0);

  noFill();
  stroke(0, 255, 255);
  
  rectMode(RADIUS);

}

function draw() {

  if (particleCount < 1000) {
    posX = random() * cX;
    posY = random() * cY;
    if ((Math.abs(posX - mouseX) < 40)) {
      stroke(255, 0, 0);
    } else {
      stroke(0, 255, 255);
    }
    rect(posX, posY, (random() * 20), (random() * 20));
    stroke(255, 0, 0);
    rect((mouseX + (random() * 20)), (mouseY + (random() * 20)), (random() * 50), (random() * 50));
    particleCount++;
  } else {
    particleCount = 0;
    clear();
  }
  
}

  