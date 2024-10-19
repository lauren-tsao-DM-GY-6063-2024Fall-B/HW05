let myData;
let lastSec;
let cloudNames = [];
let cloudAlphas = [];

function preload() {
  myData = loadStrings("../assets/cloudnames.txt");
}

function cloud(x, y, size, cloudNames, cloudAlpha) {
  let betweenX = mouseX > x - size && mouseX < x + size;
  let betweenY = mouseY > y - size && mouseY < y + size;

  noStroke();
  fill(255, 251, 230, cloudAlpha);
  ellipse(x, y, size);
  ellipse(x + 25, y + 20, size);
  ellipse(x - 20, y + 20, size);
  ellipse(x - 40, y + 5, size);
  ellipse(x - 65, y + 25, size);

  if (betweenX && betweenY) {
    fill(0);
    text(cloudNames, x, y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lastSec = second();

  for (let i = 0; i < 7; i++) {
    cloudNames[i] = random(myData);
    cloudAlphas[i] = 0;
  }
}

function draw() {
  let m = millis();
  background("cornflowerBlue");

  //sun
  noStroke();
  fill(252, 205, 42);
  ellipse(width / 7, height / 5, 200, 200);

  //mountains
  push();
  fill(192, 235, 166);
  triangle(width, height, width / 1.5, height / 2, width / 2, height);
  pop();

  push();
  fill(52, 121, 40);
  triangle(width / 3, height, width / 1.5, height / 2, width / 2, height);
  pop();

  //cloud generators

  if (m > 1000) {
    let x1pos = (0.9 * frameCount) / 2;
    cloud((x1pos % width) * 2, height / 1.2, 60, cloudNames[0], cloudAlphas[0]);
    if (cloudAlphas[0] < 255) {
      cloudAlphas[0] += 4;
    }
  }

  if (m > 5000) {
    let x2pos = 0.8 * frameCount;
    cloud((x2pos % width) * 2, height / 3, 70, cloudNames[1], cloudAlphas[1]);
    if (cloudAlphas[1] < 255) {
      cloudAlphas[1] += 4;
    }
  }

  if (m > 21000) {
    let x3pos = (0.6 * frameCount) / 2;
    cloud((x3pos % width) * 2, height / 12, 80, cloudNames[2], cloudAlphas[2]);
    if (cloudAlphas[2] < 255) {
      cloudAlphas[2] += 4;
    }
  }

  if (m > 8000) {
    let x4pos = 0.7 * frameCount;
    cloud((x4pos % width) * 2, height / 2, 60, cloudNames[3], cloudAlphas[3]);
    if (cloudAlphas[3] < 255) {
      cloudAlphas[3] += 4;
    }
  }

  if (m > 13000) {
    let x5pos = 0.4 * frameCount;
    cloud((x5pos % width) * 2, height / 5, 70, cloudNames[4], cloudAlphas[4]);
    if (cloudAlphas[4] < 255) {
      cloudAlphas[4] += 4;
    }
  }

  if (m > 18000) {
    let x6pos = 0.5 * frameCount;
    cloud((x6pos % width) * 2, height / 3, 80, cloudNames[5], cloudAlphas[5]);
    if (cloudAlphas[5] < 255) {
      cloudAlphas[5] += 4;
    }
  }

  if (m > 25000) {
    let x7pos = (0.3 * frameCount) / 2;
    cloud((x7pos % width) * 2, height / 1.6, 60, cloudNames[6], cloudAlphas[6]);
    if (cloudAlphas[6] < 255) {
      cloudAlphas[6] += 4;
    }
  }
}
