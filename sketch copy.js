let myData;
let cloudNames = [];

function preload() {
  myData = loadStrings('/assets/cloudnames.txt');
}

function cloud(x, y, size, name) {
  let betweenX = mouseX > x - size && mouseX < x + size;
  let betweenY = mouseY > y - size && mouseY < y + size;

  noStroke();
  fill(255);
  ellipse(x, y, size);
  ellipse(x + 25, y + 20, size);
  ellipse(x - 20, y + 20, size);
  ellipse(x - 40, y + 5, size);
  ellipse(x - 65, y + 25, size);

  if (betweenX && betweenY) {
    fill(0);
    text(name, x, y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(16);
  
  for (let i = 0; i < 7; i++) {
    let name = random(myData);
    cloudNames.push(name);
  }
}

function draw() {
  let m = millis();
  background('cornflowerBlue');

  if (m > 1000) {
    let x1pos = 0.9 * frameCount / 2;
    cloud(x1pos % width, height / 1.2, 60, cloudNames[0]);
  }

  if (m > 3000) {
    let x2pos = 0.8 * frameCount;
    cloud(x2pos % width, height / 3, 70, cloudNames[1]);
  }

  if (m > 5000) {
    let x3pos = 0.9 * frameCount / 2;
    cloud(x3pos % width, height / 12, 80, cloudNames[2]);
  }

  if (m > 7000) {
    let x4pos = 2 * frameCount;
    cloud(x4pos % width, height / 2, 60, cloudNames[3]);
  }

  if (m > 9000) {
    let x5pos = 1.5 * frameCount;
    cloud(x5pos % width, height / 5, 70, cloudNames[4]);
  }

  if (m > 11000) {
    let x6pos = 1.2 * frameCount;
    cloud(x6pos % width, height / 5, 80, cloudNames[5]);
  }

  if (m > 14000) {
    let x7pos = 5 * frameCount / 2;
    cloud(x7pos % width, height / 1.6, 60, cloudNames[6]);
  }
}