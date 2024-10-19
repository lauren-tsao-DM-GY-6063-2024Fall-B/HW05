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

  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  push();
  // stroke(0, 9, 87)
  noStroke();
  fill(0, 9, 87);
  rotate(-90);
  strokeWeight(80);
  arc(0, 0, 420, 420, 0, hourAngle);
  pop();

  //stars row 1
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 300, 300, 10, hourAngle);
  pop();

  //stars row 2
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80, 1, 50]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 200, 200, 5, hourAngle);
  pop();

  //stars row 3
  push();
  stroke(255);
  drawingContext.setLineDash([1, 80, 1, 50]);
  noFill();
  rotate(-90);
  strokeWeight(5);
  arc(0, 0, 80, 80, 35, hourAngle);
  pop();

  //seconds animation
  push();
  rotate(secondAngle);
  rotate(60);
  noFill();
  stroke(52, 76, 183);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(60);
  arc(0, 0, 450, 450, 0, 360);
  pop();

  push();
  noFill();
  stroke(200);
  rotate(secondAngle);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(65);
  arc(0, 0, 500, 500, 0, 360);
  pop();

  push();
  noFill();
  rotate(secondAngle);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(60);
  arc(0, 0, 500, 500, 0, 360);
  pop();

  // push();
  // noFill()
  // rotate(-secondAngle);
  // drawingContext.setLineDash([10, 50, 20, 30]);
  // strokeWeight(5);
  // arc(0, 0, 200, 200, 0, 360);
  // pop();

  // push();
  // noFill()
  // rotate(secondAngle);
  // drawingContext.setLineDash([10, 50, 20, 30]);
  // strokeWeight(3);
  // arc(0, 0, 350, 350, 0, 360);
  // pop();

  //   push();
  // strokeWeight(4);
  // fill(255, 0, 0)
  // rotate(hourAngle);
  // line(0, 0, 0, -100);
  // pop();

  push();
  noStroke();
  fill(235, 230, 69);
  rotate(minuteAngle);
  ellipse(0, -100, 100, 100);
  pop();
}
