function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  angleMode(DEGREES);
}

function draw() {
  background(230);

  translate(width / 2, height / 2);

  noStroke();
  noFill();
  fill(87, 123, 193);
  ellipse(0, 0, 500, 500);

  let sAngle = map(second(), 0, 60, 0, 360);
  let mAngle = map(minute(), 0, 60, 0, 360);
  let hAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  //day/night (hour hand)
  push();
  noStroke();
  fill(0, 9, 87);
  rotate(-90);
  strokeWeight(80);
  arc(0, 0, 420, 420, 0, hAngle);
  pop();

  //stars row 1
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 300, 300, 10, hAngle);
  pop();

  //stars row 2
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80, 1, 50]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 200, 200, 5, hAngle);
  pop();

  //stars row 3
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80, 1, 50]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 80, 80, 35, hAngle);
  pop();

  //blue cloud
  push();
  rotate(sAngle);
  rotate(60);
  noFill();
  stroke(52, 76, 183);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(60);
  arc(0, 0, 450, 450, 0, 360);
  pop();

  //grey cloud
  push();
  noFill();
  stroke(200);
  rotate(sAngle);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(65);
  arc(0, 0, 500, 500, 0, 360);
  pop();

  //white cloud
  push();
  noFill();
  rotate(sAngle);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(60);
  arc(0, 0, 500, 500, 0, 360);
  pop();

  //sun/moon (minute hand)
  push();
  noStroke();
  fill(235, 230, 69);
  rotate(mAngle);
  ellipse(0, -100, 100, 100);
  pop();
}
