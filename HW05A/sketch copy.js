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
  fill(237, 34, 93);
  ellipse(0, 0, 600, 600);
  

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  // Second hand
  push();
  rotate(secondAngle);
  drawingContext.setLineDash([1, 55]);
  strokeWeight(60);
  arc(0, 0, 500, 500, 0, 360);
  pop();

 
  // Second hand
  push();
  rotate(secondAngle);
  drawingContext.setLineDash([1, 10]);
  strokeWeight(5);
  arc(0, 0, 500, 500, 0, 360);
  pop();

    // Second hand
    push();
    fill(255)
  noStroke()
  rotate(-90)
    arc(0, 0, 200, 200, 0, secondAngle);
    pop();
  

  // // Minute hand
  // push();
  // fill(255)
  // noStroke()
  // rotate(-80);
  // arc(0, 0, 80, 80, 0, -minuteAngle);
  // pop();

  // Hour hand
  push();
  strokeWeight(10);
  rotate(hourAngle);
  arc(50, 50, 80, 80, 0, hourAngle);
  pop();
  


  
}