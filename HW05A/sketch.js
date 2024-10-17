// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = height / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  describe('Functioning pink clock on a grey background.');
}

function draw() {
  background(230);
  
  
  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  noStroke();
  noFill()
  fill(87, 123, 193);
  ellipse(0, 0, 500, 500);
  

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  push();
  stroke(0, 9, 87)
rotate(-90)
drawingContext.setLineDash([1, 50]);
strokeWeight(80);
  arc(0, 0, 350, 350, 0, minuteAngle);
  pop();

  //seconds animation
  push();
  rotate(secondAngle);
  rotate(60)
noFill()
  stroke(52, 76, 183)
  drawingContext.setLineDash([1, 50]);
  strokeWeight(60);
  arc(0, 0, 450, 450, 0, 360);
  pop();

  push();
  noFill()
  stroke(200)
  rotate(secondAngle);
  drawingContext.setLineDash([1, 50]);
  strokeWeight(65);
  arc(0, 0, 500, 500, 0, 360);
  pop();

  push();
  noFill()
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
 noStroke()
  fill(235, 230, 69)
  rotate(hourAngle);
  ellipse(0, -100, 100, 100)
  pop();
  


  
}