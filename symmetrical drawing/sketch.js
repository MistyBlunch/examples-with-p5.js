function setup() {
  createCanvas(1365, 660);
  background(232, 238, 233);
}

function draw() {
  //elipse1
  fill(205, 173, 208);
  noStroke();
  ellipse(mouseX, mouseY, 10);
  //ellipse2
  fill(146, 198, 191);
  noStroke();
  ellipse(mouseY, mouseX, 10);
}

function mousePressed() {
  background(232, 238, 233);
}