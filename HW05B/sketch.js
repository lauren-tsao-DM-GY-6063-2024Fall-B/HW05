let phrase;
let myData;
let lastSec;

function preload() {
  myData = loadStrings("/assets/cloudnames.txt");
}

function cloud(x, y, size) {
  let betweenX = mouseX > x - size && mouseX < x + size;
  let betweenY = mouseY > y - size && mouseY < y + size;

  noStroke();
  ellipse(x, y, size);
  ellipse(x + 25, y + 20, size);
  ellipse(x - 20, y + 20, size);
  ellipse(x - 40, y + 5, size);
  ellipse(x - 65, y + 25, size);

  if (betweenX && betweenY) {
      text(phrase, x, y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  phrase = random(myData);
  lastMin = minute();
}

function draw() {
  m = millis();
  background("cornflowerBlue");

  let currentSec = second();
  if (currentSec !== lastSec) {
    phrase = random(myData);
    lastSec = currentSec;
  }

  if (m > 1000) {
    let x1pos = (0.9 * frameCount) / 2;
    cloud(x1pos % width, height / 1.2, 60);
  }

  if (m > 3000) {
    let x2pos = 0.8 * frameCount;
    cloud(x2pos % width, height / 3, 70);
  }

  if (m > 5000) {
    let x3pos = (0.9 * frameCount) / 2;
    cloud(x3pos % width, height / 12, 80);
  }

  if (m > 7000) {
    let x4pos = 2 * frameCount;
    cloud(x4pos % width, height / 2, 60);
  }

  if (m > 9000) {
    let x5pos = 1.5 * frameCount;
    cloud(x5pos % width, height / 5, 70);
  }

  if (m > 11000) {
    let x6pos = 1.2 * frameCount;
    cloud(x6pos % width, height / 5, 80);
  }

  if (m > 14000) {
    let x7pos = (5 * frameCount) / 2;
    cloud(x7pos % width, height / 1.6, 60);
  }

 
}
