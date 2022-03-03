let moonColor;
let c;
let micVar;
let mic;
let drawSmileyX = 0;
let fr = 50;
let a;
let b;
let direction;
let yPos = 0;
let xPos = 0;
let balls =[];
let sketchStarted = false;


function setup() {
   
  createCanvas(600, 600);

  createButton("Start").mousePressed(startSketch);
 
  // frameRate(20);
  // textSize(0);
 //  textAlign(CENTER);
  
  // frameRate(fr); // Attempt to refresh at starting FPS
  // clr = color(255, 0, 0);
  
  a = 0
  b = width;
  direction = true;
  frameRate(50);
  
  //Framecount
  //fill('white');
  textSize(100);
  text()
  
  for (let j = 0; j<30;j++)
    {
      let x = random(0, width);
      let y = random(0, width);
      balls[j]= new Ball(x,y);
    }
  
}

function startSketch() {
  mic = new p5.AudioIn();
  mic.start();

  sketchStarted = true; 
  
} 

function draw() {

  if (sketchStarted) {
    micLevel = mic.getLevel(0.9);
    
    background(171, 120, 210);
    
    console.log("mic level: " + mic.getLevel()); 
    c = color
    micLevel = mic.getLevel();
    micVar = map(mic.getLevel(), 0, 0.1, 0, 245);
    
    {
     for (let j = 0; j<30;j++)
      {
        balls[j].display();
        balls[j].move();
      }
  }
    drawMovers();
    drawRect();
    drawMovement();
    drawMoon(moonColor);
    drawMe();
    drawSmiley();
    
  }

}

function drawRect() {
  push();
  fill(204, 255, 255);
  rect(mouseX, 1, mouseY, 600);
  pop();
}

function drawMovers() {
   for (let j = 0; j<30;j++)
    {
      balls[j].display();
      balls[j].move();
    }
}

class Ball
{
  constructor(xPos, yPos, diameter)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.diameter = diameter;
    this.t = int(random(360));
    this.s = random(50,20);
  }
  
  display()
  {
    push();
      translate(this.xPos, this.yPos);
      rotate(this.t);
      drawSmiley(xPos,yPos, 20);
      fill(0,0,0);
    pop();
  }
  
  move()
  {
    this.t = this.t + this.s;
  }
}

function drawMovement() {
  push();
  fill(61, 20, 166);
  a++;
  if (a > width) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    stroke(a);
  } else {
    stroke(width - a);
  }
  rect(a, 0, a, height / 2);

  b--;
  if (b < 0) {
    b = width;
  }
  if (direction == true) {
    stroke(width - b);
  } else {
    stroke(b);
  }
  rect(b, height / 2 + 1, b, height);
  pop();
}

function drawMoon() {
  fill(249, 255, 158, +micVar);
  strokeWeight(10);
  stroke(color(236, 242, 149));
  circle(295, 295, 500);}

function drawMe() {//shoulders
c = color(65);
fill(c);
noStroke();
ellipse(220, 600, 470, 165);
endShape();

//shirt collar
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
beginShape();
ellipse(220, 550, 270, 70);
endShape();

//neck
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
beginShape();
rect(149, 200, 140, 350);
endShape();

//new head
beginShape();
vertex(340, 200);
vertex(100, 200);
vertex(100, 400);
vertex(200, 500);
vertex(240, 500);
vertex(340, 400);
vertex(340, 200);
endShape();

//left eye (facing)
c = color(0, 0, 0);
fill(c);
strokeWeight(2);
stroke(0);
ellipse(163, 300, 60, 45);


//right eye (facing)
c = color(0, 0, 0);
noStroke();
ellipse(270, 300, 60, 45);

//top lip
c = color(164, 124, 107);
fill(c);
strokeWeight(2);
stroke(51);
 arc(243, 430, 50, 40, radians(180), radians(0));
 arc(192, 430, 50, 40, radians(180), radians(0));
 
 //bottom lip
 c = color(255, 150, 138);
fill(c);
strokeWeight(2);
stroke(51);
arc(218, 430, 101, 60, radians(0), radians(180));

//hair
c = color(0,0,0);
fill(c);
noStroke();
ellipse(100, 180, 110, 125);
ellipse(180, 180, 110, 125);
ellipse(260, 180, 110, 125);
ellipse(335, 180, 110, 125);
ellipse(140, 150, 110, 125);
ellipse(215, 150, 110, 125);
ellipse(290, 150, 110, 125);

//left eyebrow (facing)
c = color(0, 0, 0);
fill(c);
strokeWeight(4);
noStroke(51);
rect(128, 255, 65, 10);
rect(238, 255, 65, 10);

//nose
c = color(141, 106, 91);
fill(c);
strokeWeight(2);
stroke(51);
 arc(218, 370, 50, 40, radians(180), radians(0));
 
 //left ear (facing)
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
 arc(99, 340, 70, 70, radians(90), radians(270));
 
 //right ear (facing)
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
 arc(341, 340, 70, 70, radians(270), radians(90));
 
 //left earring (facing)
 c = color(204, 255, 255);
fill(c);
strokeWeight(2);
stroke(51);
circle(85, 360, 20);

 //right earring (facing)
 c = color(204, 255, 255);
fill(c);
strokeWeight(2);
stroke(51);
circle(355, 360, 20);
  
 //triangles
  c = color(61, 20, 166);
fill(c);
//triangle(133, 200, 161, 145, 189, 200);
//triangle(252, 200, 277, 145, 306, 200);

  
}

function drawSmiley() {
  //smileyface
  push();
  fill(255, 230, 0);
  ellipse(482, 335, 170, 170);
  pop();
  
 //smileyface mouth
  push();
  fill(255, 255, 255);
  arc(484, 357, 110, 85, radians(0), 
  radians(180));
  pop();
  
//smileyface top outline
  push();
  c = color(255, 255, 255)
  fill(255, 255, 255);
  line(539, 357, 429, 357);
  pop();
  
//smileyface eyes
  push();
  fill(5, 5, 0);
  ellipse(448, 320, 37, 37);
  ellipse(519, 320, 37, 37);
  pop();
}
